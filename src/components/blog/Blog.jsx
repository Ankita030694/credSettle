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
import "./Blog.css";

// Import fallback images
import blogImage from "../../assets/images/Image.png";
import elipse from "../../assets/images/Elipse.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async (next = true) => {
    setLoading(true);
    try {

      const blogCollection = collection(db, "blogs");
      let q = lastVisible
        ? query(
            blogCollection,
            orderBy("created", "desc"),
            startAfter(lastVisible),
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

      if (blogsData.length > 0) {
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }

      setBlogs(blogsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs: ", error);
      setLoading(false);
    }
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
    fetchBlogs(true);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      fetchBlogs(false);
    }
  };

  // Function to generate a slug from the title
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
  };
  // Helper function to truncate the blog description to 40 words
  const truncateDescription = (description, wordLimit = 40) => {
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
                <Link to={`/blogs/${generateSlug(blog.title)}`} className="blog-link" style={{textDecoration: "none"}}>
                  <img
                    src={blog.image || blogImage}
                    alt={blog.title}
                    className="blog-image"
                    // If the image fails to load, fallback to the default image
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = blogImage;
                    }}
                  />
                  <div className="blog-content">
                    <h2 className="blog-title" >{blog.title}</h2>
                    <h5>{blog.subtitle}</h5>
                    <p className="blog-description">{truncateDescription(blog.description)}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="pagination-controls d-flex justify-content-center mt-4 align-items-center">
        <button className="btn btn-primary me-2" onClick={handlePrev} disabled={page === 1}>
          Previous
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
