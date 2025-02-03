import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import "./Blog.css";
import banner from "../../assets/images/bgImage.png"
// import blogImage from "../../../assets/images/Image.png";

const BlogDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogCollection = collection(db, "blogs");
        const querySnapshot = await getDocs(blogCollection);
        const blogData = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .find((b) => b.title.toLowerCase().replace(/ /g, "-") === slug);

        if (blogData) setBlog(blogData);
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
      <div className="container-fluid blog-image">
      <img src={banner} alt=""
       style={{width: "100%", height: "100%"}}/>
      </div>
      <h1 className="mt-5">{blog.title}</h1>
      <h3 className="mt-3">{blog.subtitle}</h3>
      {/* <img src={blog.image || blogImage} alt={blog.title} className="blog-image" /> */}
      <p className="mt-5">{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
