import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  endBefore,
  limitToLast,
  endAt,
} from "firebase/firestore";
import { db } from "../../firebase";
import Skeleton from "react-loading-skeleton"; // Import Skeleton loader
import "react-loading-skeleton/dist/skeleton.css"; // Import styles for skeleton
import "./Blog.css";

// Import fallback images
import blogImage from "../../assets/images/Image.png";
import elipse from "../../assets/images/Elipse.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  // Store DocumentSnapshots as cursors
  const [pageCursors, setPageCursors] = useState([null]);
  const [loading, setLoading] = useState(false);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [page, setPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    fetchTotalBlogs();
    fetchBlogs();
  }, []);
  const fetchTotalBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    setTotalBlogs(snapshot.size);
  };

  const fetchBlogs = async (cursor = null, pageNumber = 1) => {
    setLoading(true);
    try {
      const blogCollection = collection(db, "blogs");
      let q = cursor
        ? query(
            blogCollection,
            orderBy("created", "desc"),
            startAfter(cursor),
            limit(blogsPerPage)
          )
        : query(
            blogCollection,
            orderBy("created", "desc"),
            limit(blogsPerPage)
          );

      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBlogs(blogsData);
      setPage(pageNumber);

      // Store cursor for pagination
      if (querySnapshot.docs.length > 0) {
        setPageCursors((prev) => {
          const updatedCursors = [...prev];
          updatedCursors[pageNumber - 1] =
            querySnapshot.docs[querySnapshot.docs.length - 1];
          return updatedCursors;
        });
      }
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
    setLoading(false);
  };
  const handlePageClick = (pageNumber) => {
    const cursor = pageCursors[pageNumber - 2] || null; // Get the cursor of the previous page
    fetchBlogs(cursor, pageNumber);
  };
  // Calculate total pages
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  // Calculate the range of visible pages
  const visiblePages = [];
  for (let i = Math.max(1, page - 2); i <= Math.min(totalPages, page + 2); i++) {
    visiblePages.push(i);
  }
  const handleNext = () => {
    const currentCursor = pageCursors[pageCursors.length - 1];
    fetchBlogs(currentCursor, "next");
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page === 1) return;
    const prevCursor = pageCursors[pageCursors.length - 2];
    fetchBlogs(prevCursor, "prev");
    setPage((prev) => prev - 1);
  };

  // Function to generate a slug from the title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  // Helper function to truncate the blog description to 30 words
  const truncateDescription = (description, wordLimit = 30) => {
    if (!description) return "";
    const words = description.split(" ");
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Ensures two digits
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="blog-section container-fluid p-5">
      <div className="elipse5 mb-4 d-flex align-items-center">
        <h3>Blogs</h3>
        <img className="about_icon ms-3" src={elipse} alt="Elipse" />
      </div>
      {loading ? (
        <div className="row align-items-center">
          {/* Render skeleton loaders */}
          {Array.from({ length: blogsPerPage }).map((_, index) => (
            <div className="col-md-4" key={index}>
              <div className="blog-card shadow-sm rounded">
                <Skeleton height={200} />
                <div className="blog-content">
                  <Skeleton height={25} width="60%" />
                  <Skeleton height={20} width="80%" />
                  <Skeleton count={3} height={15} width="90%" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="row align-items-center">
          {blogs.map((blog) => (
            <div className="col-md-4" key={blog.id}>
              <div className="blog-card shadow-sm rounded">
                <Link
                  to={{
                    pathname: `/blogs/${generateSlug(blog.title)}`,
                    state: {
                      fetchBlogs,
                      page,
                      setPage,
                      pageCursors,
                    },
                  }}
                  className="blog-link"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={blog.image || blogImage}
                    alt={blog.title}
                    className="blog-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = blogImage;
                    }}
                  />
                  <div className="blog-content">
                    <p>{formatDate(blog.date)}</p>
                    <h2 className="blog-title">{blog.title}</h2>
                    <h5>{blog.subtitle.split("|").slice(0, 3).join(" | ")}</h5>
                    <div
                      className="blog-description mt-2"
                      style={{ textAlign: "left" }}
                      dangerouslySetInnerHTML={{
                        __html: truncateDescription(blog.description),
                      }}
                    ></div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <a to="/form">
          <button className="btn btn-primary get-started-btn1">
            Register Now
          </button>
        </a>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls d-flex justify-content-center mt-4 align-items-center">
        {visiblePages.map((pageNum) => (
          <button
            key={pageNum}
            className={`btn mx-1 ${
              page === pageNum ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handlePageClick(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
