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
import "./Blog.css";

// Import fallback images
import blogImage from "../../assets/images/Image.png";
import elipse from "../../assets/images/Elipse.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  // Store DocumentSnapshots as cursors
  const [pageCursors, setPageCursors] = useState([null]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async (cursor = null, direction = "next") => {
    setLoading(true);
    try {
      const blogCollection = collection(db, "blogs");
      let q;

      if (direction === "next") {
        q = cursor
          ? query(
              blogCollection,
              orderBy("created", "desc"),
              startAfter(cursor),
              limit(blogsPerPage)
            )
          : query(blogCollection, orderBy("created", "desc"), limit(blogsPerPage));
      } else if (direction === "prev") {
        q = query(
          blogCollection,
          orderBy("created", "desc"),
          endAt(cursor),
          limitToLast(blogsPerPage)
        );
      }

      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (direction === "next" && querySnapshot.docs.length > 0) {
        // Save the last DocumentSnapshot for the current page.
        setPageCursors((prev) => [
          ...prev,
          querySnapshot.docs[querySnapshot.docs.length - 1],
        ]);
      } else if (direction === "prev") {
        // Remove the last cursor when moving back.
        setPageCursors((prev) => prev.slice(0, prev.length - 1));
      }

      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
    setLoading(false);
  };

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

  return (
    <div className="blog-section container-fluid p-5">
      <div className="elipse5 mb-4 d-flex align-items-center">
        <h3>Blogs</h3>
        <img className="about_icon ms-3" src={elipse} alt="Elipse" />
      </div>
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="row align-items-center">
          {blogs.map((blog) => (
            <div className="col-md-4" key={blog.id}>
              <div className="blog-card shadow-sm rounded">
                <Link
                  to={`/blogs/${generateSlug(blog.title)}`}
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
                    <p>{blog.date}</p>
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
        <Link to="/form">
          <button className="btn btn-primary get-started-btn1">
            Register Now
          </button>
        </Link>
      </div>

      <div className="pagination-controls d-flex justify-content-center mt-4 align-items-center">
        <button
          className="btn btn-primary me-2"
          onClick={handlePrev}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="px-3">Page {page}</span>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={blogs.length < blogsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
