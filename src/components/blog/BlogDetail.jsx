import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./Blog.css";
import banner from "../../assets/images/bgImage.png";

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

        console.log("Fetched Blogs:", blogs); // Debugging - check if blogs are fetched

        // Function to normalize slugs
        const formatSlug = (title) =>
          title
            .toLowerCase()
            .trim()
            .replace(/[\s_]+/g, "-") // Convert spaces & underscores to hyphens
            .replace(/[^\w-]+/g, "") // Remove ALL special characters except hyphens
            .replace(/-+/g, "-") // Remove duplicate hyphens
            .replace(/^-|-$/g, ""); // Trim leading and trailing hyphens

        // Trim extra hyphen from URL slug
        const cleanSlug = slug.replace(/^-|-$/g, "");

        const blogData = blogs.find((b) => {
          const generatedSlug = formatSlug(b.title);
          console.log(
            "Generated Slug:",
            generatedSlug,
            "Clean URL Slug:",
            cleanSlug
          ); // Debugging

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

  // Function to generate a slug from the title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

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
      <Link
        to="/blogs"
        className="blog-link"
        style={{ textDecoration: "none" }}
      >
        <h3 className="mt-3">{blog.subtitle}</h3>
      </Link>
      <p>{formatDate(blog.date)}</p>
      

      {/* Render the blog description using dangerouslySetInnerHTML */}
      <div
        className="blog-description mt-5"
        dangerouslySetInnerHTML={{ __html: blog.description }}
        style={{ textAlign: "left" }}
      />
      <Link to="/form">
        <button className="btn btn-primary get-started-btn1">
          Register Now
        </button>
      </Link>
    </div>
  );
};

export default BlogDetail;
