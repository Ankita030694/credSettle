import React from "react";
import "./Blog.css"; // You can add the styles in this CSS file
import blogImage from "../../assets/images/Image.png"; // Replace with actual blog image
import elipse from "../../assets/images/Elipse.png";

const Blog = () => {
  return (
    <div className="blog-section container-fluid py-5">
      <div className="elipse5 mb-4">
        <h3>Blogs</h3>
        <img className="about_icon" src={elipse} alt="" />
      </div>
      <div className="row align-items-center">
        {/* Blog Post 1 */}
        <div className="col-md-4">
          <div className="blog-card shadow-sm rounded">
            <img src={blogImage} alt="Blog Title" className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">Understanding Debt Settlement</h3>
              <p className="blog-description">
                Learn how debt settlement works and how it can help reduce your
                outstanding debt. Discover tips and strategies to take control
                of your financial future.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="col-md-4">
          <div className="blog-card shadow-sm rounded">
            <img src={blogImage} alt="Blog Title" className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">Top 5 Tips for Financial Freedom</h3>
              <p className="blog-description">
                Explore the top five strategies for achieving financial freedom.
                Learn how to manage your finances, save more, and eliminate debt
                faster.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="col-md-4">
          <div className="blog-card shadow-sm rounded">
            <img src={blogImage} alt="Blog Title" className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">The Importance of Credit Score</h3>
              <p className="blog-description">
                Understand why your credit score matters and how to improve it.
                Get insights into maintaining a healthy credit score for
                financial success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        {/* Blog Post 1 */}
        <div className="col-md-4">
          <div className="blog-card shadow-sm rounded">
            <img src={blogImage} alt="Blog Title" className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">Understanding Debt Settlement</h3>
              <p className="blog-description">
                Learn how debt settlement works and how it can help reduce your
                outstanding debt. Discover tips and strategies to take control
                of your financial future.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="col-md-4">
          <div className="blog-card shadow-sm rounded">
            <img src={blogImage} alt="Blog Title" className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">Top 5 Tips for Financial Freedom</h3>
              <p className="blog-description">
                Explore the top five strategies for achieving financial freedom.
                Learn how to manage your finances, save more, and eliminate debt
                faster.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="col-md-4">
          <div className="blog-card shadow-sm rounded">
            <img src={blogImage} alt="Blog Title" className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">The Importance of Credit Score</h3>
              <p className="blog-description">
                Understand why your credit score matters and how to improve it.
                Get insights into maintaining a healthy credit score for
                financial success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
