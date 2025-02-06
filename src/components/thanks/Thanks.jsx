import React from "react";

const Thanks = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="card shadow-lg" style={{ maxWidth: "500px", width: "100%" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-3" style={{color: "#070030"}}>Thank You!</h2>
          <p className="card-text text-secondary mb-4">
            Your form has been successfully submitted. We appreciate your interest!
          </p>
          <a href="/" className="btn btn-primary get-started-btn1">
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
