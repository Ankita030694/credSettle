import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./Blog.css";
import banner from "../../assets/images/bgImage.png";
// import blogImage from "../../../assets/images/Image.png";

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
    
        console.log("Fetched Blogs:", blogs); // Debugging - check if blogs are fetched in production
    
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
          console.log("Generated Slug:", generatedSlug, "Clean URL Slug:", cleanSlug); // Debugging
    
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

  return (
    <div className="blog-detail">
      <div className="blog-image-container">
        <img
          src={blog.image}
          alt=""
          className="blog-image"
        />
      </div>
      <h1 className="mt-5">{blog.title}</h1>
      <h3 className="mt-3">{blog.subtitle}</h3>
      {/* <img src={blog.image || blogImage} alt={blog.title} className="blog-image" /> */}
      <p className="mt-5">{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
