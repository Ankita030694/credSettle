import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Blog.css";

// Import fallback images
import blogImage from "../../assets/images/Image.png";
import elipse from "../../assets/images/Elipse.png";

const BlogMain = () => {
  const [blogs, setBlogs] = useState([]);
  // Store DocumentSnapshots as cursors for sequential navigation
  const [pageCursors, setPageCursors] = useState([null]);
  const [loading, setLoading] = useState(false);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const blogsPerPage = 10;

  // Helper to fetch the cursor for a given page number
  const getCursorForPage = async (pageNumber) => {
    if (pageNumber === 1) return null;

    const blogCollection = collection(db, "blogs");
    // Calculate how many documents to skip
    const skipCount = (pageNumber - 1) * blogsPerPage;
    // Query the documents up to the desired page
    const q = query(
      blogCollection,
      orderBy("created", "desc"),
      limit(skipCount)
    );
    const snapshot = await getDocs(q);
    if (snapshot.docs.length === skipCount) {
      return snapshot.docs[snapshot.docs.length - 1];
    }
    return null;
  };
  useEffect(() => {
    fetchTotalBlogs();
    // initial fetch for page 1 (sequential mode)
    fetchBlogs(null, 1);
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const fetchTotalBlogs = async () => {
    const snapshot = await getDocs(collection(db, "blogs"));
    setTotalBlogs(snapshot.size);
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      fetchBlogs(null, 1);
      return;
    }

    setLoading(true);
    try {
      const blogCollection = collection(db, "blogs");
      const searchTermLower = searchTerm.toLowerCase();
      
      // Get all blogs and filter client-side (since Firestore doesn't support full text search)
      const snapshot = await getDocs(query(blogCollection, orderBy("created", "desc")));
      const results = snapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        .filter(blog => 
          blog.title.toLowerCase().includes(searchTermLower) ||
          blog.description.toLowerCase().includes(searchTermLower) ||
          blog.subtitle.toLowerCase().includes(searchTermLower)
        );

      setSearchResults(results);
      setBlogs(results);
      setTotalBlogs(results.length);
      setPage(1);
    } catch (error) {
      console.error("Error searching blogs: ", error);
    }
    setLoading(false);
  };

  const fetchBlogs = async (cursor = null, pageNumber = 1, useOffset = false) => {
    setLoading(true);
    try {
      const blogCollection = collection(db, "blogs");
      let q;
  
      if (useOffset) {
        // (Assume you have your simulated offset logic here)
        // e.g., use getCursorForPage to simulate an offset
        q = query(
          blogCollection,
          orderBy("created", "desc"),
          limit(blogsPerPage)
        );
      } else {
        q = cursor
          ? query(
              blogCollection,
              orderBy("created", "desc"),
              startAfter(cursor),
              limit(blogsPerPage)
            )
          : query(blogCollection, orderBy("created", "desc"), limit(blogsPerPage));
      }
  
      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      setBlogs(blogsData);
      setPage(pageNumber);
  
      // Always update the cursor if not using offset and if documents exist
      if (!useOffset && querySnapshot.docs.length > 0) {
        setPageCursors((prev) => {
          const updatedCursors = [...prev];
          updatedCursors[pageNumber - 1] =
            querySnapshot.docs[querySnapshot.docs.length - 1];
          return updatedCursors;
        });
      }
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
    setLoading(false);
  };
  
  const handlePageClick = async (pageNumber) => {
    if (Math.abs(pageNumber - page) > 1) {
      // For non-sequential jumps, compute the cursor manually
      const cursor = await getCursorForPage(pageNumber);
      fetchBlogs(cursor, pageNumber);
    } else {
      // For sequential navigation, use the cached cursor.
      const cursor = pageNumber === 1 ? null : pageCursors[pageNumber - 2] || null;
      fetchBlogs(cursor, pageNumber);
    }
  };
  
  // Calculate total pages
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);
  // Calculate the range of visible pages (for pagination controls)
  const visiblePages = [];
  for (
    let i = Math.max(1, page - 2);
    i <= Math.min(totalPages, page + 2);
    i++
  ) {
    visiblePages.push(i);
  }

  // Next and Previous buttons for sequential navigation
  const handleNext = () => {
    if (page < totalPages) {
      const currentCursor = pageCursors[page - 1];
      fetchBlogs(currentCursor, page + 1);
    }
  };

  const handlePrev = () => {
    if (page === 1) return;
    const prevCursor = pageCursors[page - 2] || null;
    fetchBlogs(prevCursor, page - 1);
  };

  // Utility functions
  const generateSlug = (title) =>
    title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  const truncateDescription = (description, wordLimit = 30) => {
    if (!description) return "";
    const words = description.split(" ");
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="blog-section container-fluid py-5">
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="display-4 text-center mb-0">Our Latest Insights</h1>
            <img className="ms-3" src={elipse} alt="Elipse" style={{width: "40px"}} />
          </div>
          <p className="text-center text-muted mt-3">Discover expert advice and industry updates</p>
        </div>
      </div>

      <div className="row">
        {/* Main Blog Content */}
        <div className="col-md-8">
          {/* Blog List */}
          {loading ? (
            <div className="row g-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div className="col-12" key={index}>
                  <div className="card mb-4 border-0 shadow-sm">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Skeleton height={250} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <Skeleton height={24} width="40%" />
                          <Skeleton height={32} className="mt-2" />
                          <Skeleton count={3} height={16} className="mt-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="row g-4">
              {blogs.map((blog) => (
                <div className="col-12" key={blog.id}>
                  <div className="card mb-4 border-0 shadow-sm hover-scale">
                    <div className="row g-0">
                      <div className="col-md-4 d-flex align-items-center">
                        <a href={`/blogs/${generateSlug(blog.title)}`} className="w-100">
                          <img
                            src={blog.image || blogImage}
                            alt={blog.title}
                            className="img-fluid rounded-start"
                            style={{height: "250px", width: "100%", objectFit: "cover"}}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = blogImage;
                            }}
                          />
                        </a>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body h-100 d-flex flex-column">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h3 className="card-title h4 mb-0">
                              <a href={`/blogs/${generateSlug(blog.title)}`} className="text-decoration-none text-dark">
                                {blog.title}
                              </a>
                            </h3>
                            <span className="badge bg-primary">{formatDate(blog.date)}</span>
                          </div>
                          <p className="card-subtitle text-muted mb-2">
                            {blog.subtitle.split("|").slice(0, 3).join(" | ")}
                          </p>
                          <div
                            className="card-text text-secondary flex-grow-1"
                            dangerouslySetInnerHTML={{
                              __html: truncateDescription(blog.description, 40),
                            }}
                          />
                          <a href={`/blogs/${generateSlug(blog.title)}`} className="btn btn-outline-primary align-self-end">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="row mt-4">
              <div className="col-12">
                <nav aria-label="Blog navigation">
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={handlePrev}>
                        <i className="bi bi-chevron-left"></i> Previous
                      </button>
                    </li>
                    {visiblePages.map((pageNum) => (
                      <li key={pageNum} className={`page-item ${page === pageNum ? 'active' : ''}`}>
                        <button 
                          className="page-link"
                          onClick={() => handlePageClick(pageNum)}
                        >
                          {pageNum}
                        </button>
                      </li>
                    ))}
                    <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={handleNext}>
                        Next <i className="bi bi-chevron-right"></i>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="col-md-4">
          {/* Search Bar */}
          <div className="card mb-4 border-0 shadow-sm">
            <div className="card-body">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control rounded-0 rounded-start" 
                  placeholder="Search blogs..."
                  aria-label="Search blogs"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  className="btn btn-primary rounded-0 rounded-end d-flex align-items-center" 
                  type="button"
                  onClick={handleSearch}
                >
                  <i className="bi bi-search"></i> Search
                </button>
              </div>
            </div>
          </div>

          {/* Latest Blogs */}
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-4">Latest Posts</h5>
              {blogs.slice(0, 5).map((blog) => (
                <div key={blog.id} className="mb-3 pb-3 border-bottom">
                  <a href={`/blogs/${generateSlug(blog.title)}`} className="text-decoration-none">
                    <h6 className="text-dark mb-1">{blog.title}</h6>
                    <small className="text-muted">{formatDate(blog.date)}</small>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="row mt-5">
        <div className="col-12 text-center">
          <a href="/form" className="btn btn-primary get-started-btn1 btn-lg px-5 py-3">
            Start Your Journey Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
