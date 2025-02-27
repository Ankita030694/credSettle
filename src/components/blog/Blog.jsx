import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../../firebase";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Blog.css";

// Import fallback images
import blogImage from "../../assets/images/Image.png";
import elipse from "../../assets/images/Elipse.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  // Store DocumentSnapshots as cursors for sequential navigation
  const [pageCursors, setPageCursors] = useState([null]);
  const [loading, setLoading] = useState(false);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [page, setPage] = useState(1);
  const blogsPerPage = 3;

  // Helper to fetch the cursor for a given page number
  const getCursorForPage = async (pageNumber) => {
    if (pageNumber === 1) return null;

    const blogCollection = collection(db, "blogs");
    // Calculate how many documents to skip
    const skipCount = (pageNumber - 1) * blogsPerPage;
    // Query the documents up to the desired page
    const q = query(
      blogCollection,
      orderBy("created", "desc"),
      limit(skipCount)
    );
    const snapshot = await getDocs(q);
    if (snapshot.docs.length === skipCount) {
      return snapshot.docs[snapshot.docs.length - 1];
    }
    return null;
  };
  useEffect(() => {
    fetchTotalBlogs();
    // initial fetch for page 1 (sequential mode)
    fetchBlogs(null, 1);
  }, []);

  const fetchTotalBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    setTotalBlogs(snapshot.size);
  };


  const fetchBlogs = async (cursor = null, pageNumber = 1, useOffset = false) => {
    setLoading(true);
    try {
      const blogCollection = collection(db, "blogs");
      let q;
  
      if (useOffset) {
        // (Assume you have your simulated offset logic here)
        // e.g., use getCursorForPage to simulate an offset
        q = query(
          blogCollection,
          orderBy("created", "desc"),
          limit(blogsPerPage)
        );
      } else {
        q = cursor
          ? query(
              blogCollection,
              orderBy("created", "desc"),
              startAfter(cursor),
              limit(blogsPerPage)
            )
          : query(blogCollection, orderBy("created", "desc"), limit(blogsPerPage));
      }
  
      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      setBlogs(blogsData);
      setPage(pageNumber);
  
      // Always update the cursor if not using offset and if documents exist
      if (!useOffset && querySnapshot.docs.length > 0) {
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
  
  

  const handlePageClick = async (pageNumber) => {
    if (Math.abs(pageNumber - page) > 1) {
      // For non-sequential jumps, compute the cursor manually
      const cursor = await getCursorForPage(pageNumber);
      fetchBlogs(cursor, pageNumber);
    } else {
      // For sequential navigation, use the cached cursor.
      const cursor = pageNumber === 1 ? null : pageCursors[pageNumber - 2] || null;
      fetchBlogs(cursor, pageNumber);
    }
  };
  

  // Calculate total pages
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  // Calculate the range of visible pages (for pagination controls)
  const visiblePages = [];
  for (
    let i = Math.max(1, page - 2);
    i <= Math.min(totalPages, page + 2);
    i++
  ) {
    visiblePages.push(i);
  }

  // Next and Previous buttons for sequential navigation
  const handleNext = () => {
    if (page < totalPages) {
      const currentCursor = pageCursors[page - 1];
      fetchBlogs(currentCursor, page + 1);
    }
  };

  const handlePrev = () => {
    if (page === 1) return;
    const prevCursor = pageCursors[page - 2] || null;
    fetchBlogs(prevCursor, page - 1);
  };

  // Utility functions
  const generateSlug = (title) =>
    title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  const truncateDescription = (description, wordLimit = 30) => {
    if (!description) return "";
    const words = description.split(" ");
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
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
                <a
                  href={`/blogs/${generateSlug(blog.title)}`}
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
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center">
        <a href="/form">
          <button className="btn btn-primary get-started-btn1">
            Register Now
          </button>
        </a>
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls d-flex justify-content-center mt-4 align-items-center">
        <button className="btn btn-outline-primary mx-1" onClick={handlePrev}>
          Prev
        </button>
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
        <button className="btn btn-outline-primary mx-1" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
