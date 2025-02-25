import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./Blog.css";

const BlogDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogCollection = collection(db, "blogs");
        const querySnapshot = await getDocs(blogCollection);

        const blogs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Function to normalize and sanitize slugs properly
        const formatSlug = (title) =>
          title
            .normalize("NFKD") // Normalize special characters (é → e)
            .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
            .toLowerCase()
            .trim()
            .replace(/[:&$@!*+=?,;'"()<>[\]{}|\\/]/g, " ") // Replace problematic special characters with space
            .replace(/[^a-z0-9\s-]/g, "") // Remove any other non-alphanumeric characters except spaces and hyphens
            .trim()
            .replace(/\s+/g, "-") // Convert spaces to hyphens
            .replace(/-+/g, "-"); // Collapse multiple hyphens into one

        // Normalize the URL slug by collapsing multiple hyphens and trimming
        const cleanSlug = slug.replace(/-+/g, "-").replace(/^-|-$/g, "");

        const blogData = blogs.find((b) => {
          const generatedSlug = formatSlug(b.title);
          console.log(
            "Generated Slug:",
            generatedSlug,
            "Clean URL Slug:",
            cleanSlug
          );
          return generatedSlug === cleanSlug;
        });

        if (blogData) {
          setBlog(blogData);
        } else {
          console.log("❌ Blog not found for slug:", cleanSlug);
        }
      } catch (error) {
        console.error("Error fetching blog: ", error);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <p>Loading...</p>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Ensures two digits
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="blog-detail">
      <div className="blog-image-container">
        <img src={blog.image} alt="" className="blog-image" />
      </div>
      <h1 className="mt-5">{blog.title}</h1>
      <a href="/blogs" className="blog-link" style={{ textDecoration: "none" }}>
        <h3 className="mt-3">{blog.subtitle}</h3>
      </a>
      <p>{formatDate(blog.date)}</p>

      {/* Render the blog description using dangerouslySetInnerHTML */}
      <div
        className="blog-description mt-5"
        dangerouslySetInnerHTML={{ __html: blog.description }}
        style={{ textAlign: "left" }}
      />
      <a href="/form">
        <button className="btn btn-primary get-started-btn1">
          Register Now
        </button>
      </a>
    </div>
  );
};

export default BlogDetail;
