import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../firebase";
import "./Blog.css"; // Make sure your CSS is updated accordingly

// Import fallback images (replace with your actual assets)
import blogImage from "../../assets/images/Image.png";
import elipse from "../../assets/images/Elipse.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogCollection = collection(db, "blogs");
        // Create a query that orders by 'created' descending and limits to 6 results
        const q = query(blogCollection, orderBy("created", "desc"), limit(6));
        const querySnapshot = await getDocs(q);
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-section container-fluid py-5">
      <div className="elipse5 mb-4 d-flex align-items-center">
        <h3>Blogs</h3>
        <img className="about_icon ms-3" src={elipse} alt="Elipse" />
      </div>
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
                <h5>{blog.subtitle }</h5>
                <p className="blog-description">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
