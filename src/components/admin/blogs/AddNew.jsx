import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill"; // Import React Quill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase"; // Import Firebase instance
import "./AddNew.css"; // Import the CSS file

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
        subtitle: data.subtitle,
        description: data.description, // Save rich HTML content
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

        <button type="submit" className="submit-button">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddNew;
