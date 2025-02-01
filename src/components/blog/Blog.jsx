import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit, startAfter } from "firebase/firestore";
import { db } from "../../firebase";
import "./Blog.css";

// Import fallback images
import blogImage from "../../assets/images/Image.png";
import elipse from "../../assets/images/Elipse.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [firstVisible, setFirstVisible] = useState(null);
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
      let q;

      if (next) {
        // Fetch next set of blogs
        q = lastVisible
          ? query(blogCollection, orderBy("created", "desc"), startAfter(lastVisible), limit(blogsPerPage))
          : query(blogCollection, orderBy("created", "desc"), limit(blogsPerPage));
      } else {
        // Fetch previous set of blogs
        q = query(blogCollection, orderBy("created", "desc"), limit(blogsPerPage));
      }

      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (blogsData.length > 0) {
        setFirstVisible(querySnapshot.docs[0]);
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
                <img
                  src={blog.image ? blog.image : blogImage}
                  alt={blog.title}
                  className="blog-image"
                />
                <div className="blog-content">
                  <h2 className="blog-title">{blog.title}</h2>
                  <h5>{blog.subtitle}</h5>
                  <p className="blog-description">{blog.description}</p>
                </div>
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
        <button className="btn btn-primary" onClick={handleNext} disabled={blogs.length < blogsPerPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Blog;
