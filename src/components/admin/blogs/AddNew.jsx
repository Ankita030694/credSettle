import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill"; // Import React Quill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase"; // Import Firebase instance
import "./AddNew.css"; // Import the CSS file
import { Helmet } from "react-helmet"; // Add this import

const AddNew = () => {
  const navigate = useNavigate();

  const {
    register,
    control, // Controller from react-hook-form
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: data.title,
        metaTitle: data.metaTitle,
        subtitle: data.subtitle,
        description: data.description, // Save rich HTML content
        metaDescription: data.metaDescription, // Add meta description to Firebase
        date: data.date,
        image: data.imageUrl,
        created: Date.now(),
      });

      console.log("Blog added with ID: ", docRef.id);
      alert("Blog submitted successfully!");
      navigate("/admin/blogs"); // Redirect after submission
    } catch (error) {
      console.error("Error submitting blog: ", error);
      alert("Failed to submit blog!");
    }
  };

  return (
    <div className="dashboard-container1">
      <Helmet>
        <title>Add New Blog - Admin Dashboard</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <h1 className="form-title">Add New Blog</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="blog-form">
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="form-input"
          />
          {errors.date && (
            <p className="error-message">{errors.date.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="form-input"
          />
          {errors.title && (
            <p className="error-message">{errors.title.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Meta Title (for SEO):</label>
          <small>Optimal length: 50-60 characters</small>
          <input
            type="text"
            {...register("metaTitle", {
              required: "Meta title is required",
              maxLength: {
                value: 60,
                message: "Meta title should not exceed 60 characters"
              }
            })}
            className="form-input"
            placeholder="Example: Debt Freedom Guide: 10 Steps to Get Out of Debt Fast (2024) | CredSettle"
          />
          {errors.metaTitle && (
            <p className="error-message">{errors.metaTitle.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Sub-Title:</label>
          <input
            type="text"
            {...register("subtitle", { required: "Sub-Title is required" })}
            className="form-input"
          />
          {errors.subtitle && (
            <p className="error-message">{errors.subtitle.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <small>The image size should be 1340 X 250</small>
          <input
            type="url"
            {...register("imageUrl", {
              required: "Image URL is required",
              pattern: {
                value: /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))/i,
                message: "Enter a valid image URL",
              },
            })}
            className="form-input"
            placeholder="https://example.com/image.jpg"
          />
          {errors.imageUrl && (
            <p className="error-message">{errors.imageUrl.message}</p>
          )}
        </div>
        <div className="form-group">
          <label>Description:</label>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <ReactQuill
                {...field} // bind quill to react-hook-form
                theme="snow"
                className="form-input"
                placeholder="Write your description here"
              />
            )}
          />
          {errors.description && (
            <p className="error-message">{errors.description.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Meta Description (for SEO):</label>
          <textarea
            {...register("metaDescription", {
              required: "Meta description is required",
              maxLength: {
                value: 160,
                message: "Meta description should not exceed 160 characters"
              }
            })}
            className="form-input"
            placeholder="Enter a compelling meta description (max 160 characters)"
            rows="3"
          />
          {errors.metaDescription && (
            <p className="error-message">{errors.metaDescription.message}</p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddNew;
