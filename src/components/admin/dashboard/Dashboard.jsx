import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  const [totalEntries, setTotalEntries] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login"); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactsCollection = collection(db, "Form");
        const querySnapshot = await getDocs(contactsCollection);

        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sortedData = fetchedData.sort(
          (a, b) => new Date(b.created) - new Date(a.created)
        );

        setData(sortedData);
        setFilteredData(sortedData);
        setTotalEntries(sortedData.length);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (isConfirmed) {
      try {
        await deleteDoc(doc(db, "Form", id));
        setData((prevData) => prevData.filter((person) => person.id !== id));
        setFilteredData((prevData) =>
          prevData.filter((person) => person.id !== id)
        );
        setTotalEntries((prev) => prev - 1);
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const handleFilter = () => {
    if (!fromDate || !toDate) {
      setFilteredData(data);
      return;
    }

    const fromTimestamp = new Date(fromDate).getTime();
    const toTimestamp = new Date(toDate).getTime();

    const filtered = data.filter((person) => {
      const personTimestamp = new Date(person.created).getTime();
      return personTimestamp >= fromTimestamp && personTimestamp <= toTimestamp;
    });

    setFilteredData(filtered);
    setTotalEntries(filtered.length);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Pagination Logic
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate visible pages (2 before & 2 after the current page)
  const visiblePages = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    visiblePages.push(i);
  }

  return (
    <div className="dashboard-container">
      {/* Filter Section */}
      <div className="filter-section ">
        <label className="filter-label">From:</label>
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="filter-input"
        />
        <label className="filter-label">To:</label>
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="filter-input"
        />
        <button className="filter-button" onClick={handleFilter}>
          Filter
        </button>
        <div className="logout-container mx-1">
          <Link to="/admin/blogs">
            <button className="filter-button">Blogs</button>
          </Link>
        </div>
        <div className="logout-container mx-3">
          <button className="filter-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="pagination-controls d-flex justify-content-center my-2 align-items-center">
        {visiblePages.map((pageNum) => (
          <button
            key={pageNum}
            className={`btn mx-1 ${
              currentPage === pageNum ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handlePageClick(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>
      {/* Table Section */}
      <div className="table-section">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
                <th>City</th>
                <th>Harassment</th>
                <th>Employment Status</th>
                <th>Monthly Income</th>
                <th>Credit Card Dues</th>
                <th>Personal Loan Dues</th>
                <th>Can Pay?</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((person) => (
                <tr key={person.id} className="data-row">
                  <td>{new Date(person.created).toLocaleString()}</td>
                  <td>{person.name}</td>
                  <td>{person.number}</td>
                  <td>{person.email}</td>
                  <td>{person.city}</td>
                  <td>{person.harassment}</td>
                  <td>{person.employmentStatus}</td>
                  <td>{person.monthlyIncome}</td>
                  <td>{person.creditCardDues}</td>
                  <td>{person.personalLoanDues}</td>
                  <td>{person.canPay}</td>
                  <td>{person.queries}</td>
                  <td>
                    <a
                      href="#"
                      className="delete-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDelete(person.id);
                      }}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
