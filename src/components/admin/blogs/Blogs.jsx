import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import "./Blogs.css"

const Blogs = () => {
  const [data, setData] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null); // Blog to be edited

  // Format date as dd/mm/yyyy
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    // Assuming dateStr is in yyyy-mm-dd format
    const parts = dateStr.split("-");
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  // Fetch blogs from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogCollection = collection(db, "blogs");
        const querySnapshot = await getDocs(blogCollection);
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
    fetchData();
  }, []);

  // Delete blog
  const handleDelete = async (blogId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "blogs", blogId));
      // Remove deleted blog from state
      setData((prevData) => prevData.filter((blog) => blog.id !== blogId));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog: ", error);
      alert("Failed to delete blog!");
    }
  };

  // Handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      // Prepare the updated data from form fields
      const updatedBlog = {
        date: e.target.date.value,
        title: e.target.title.value,
        subtitle: e.target.subtitle.value,
        description: e.target.description.value,
      };

      // Update document in Firestore
      const blogRef = doc(db, "blogs", editingBlog.id);
      await updateDoc(blogRef, updatedBlog);

      // Update the blog in the local state
      setData((prevData) =>
        prevData.map((blog) =>
          blog.id === editingBlog.id ? { ...blog, ...updatedBlog } : blog
        )
      );

      // Close the edit modal
      setEditingBlog(null);
      alert("Blog updated successfully!");
    } catch (error) {
      console.error("Error updating blog: ", error);
      alert("Failed to update blog!");
    }
  };

  return (
    <div className="dashboard-container">
      {/* Filter Section */}
      <div className="filter-section justify-content-between">
        <div className="blogsadmin">
          <h1>Blogs</h1>
        </div>
        <div className="logout-container mx-1">
          <Link to="/admin/addnew">
            <button className="filter-button">Add New</button>
          </Link>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Sub-Title</th>
                <th>Description</th>
                <th>Image</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((blog) => (
                <tr key={blog.id} className="data-row">
                  <td>{formatDate(blog.date)}</td>
                  <td>{blog.title}</td>
                  <td>{blog.subtitle}</td>
                  <td>{blog.description}</td>
                  <td>IMAGE</td>
                  <td>
                    <button
                      onClick={() => setEditingBlog(blog)}
                      style={{ textDecoration: "none", color: "blueviolet", background: "none", border: "none", cursor: "pointer" }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="delete-link"
                      style={{ background: "none", border: "none", color: "red", cursor: "pointer" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal Popup */}
      {editingBlog && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Edit Blog</h2>
            <form onSubmit={handleEditSubmit}>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  defaultValue={editingBlog.date}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={editingBlog.title}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Sub-Title:</label>
                <input
                  type="text"
                  name="subtitle"
                  defaultValue={editingBlog.subtitle}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="description"
                  defaultValue={editingBlog.description}
                  required
                  className="form-input"
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="submit-button">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingBlog(null)}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
