import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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
        // Get a reference to the "contacts" collection
        const contactsCollection = collection(db, "Form");

        // Get the documents in the "contacts" collection
        const querySnapshot = await getDocs(contactsCollection);

        // Map through the documents and extract data
        const fetchedData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Sort by 'created' field in descending order
        const sortedData = fetchedData.sort(
          (a, b) => new Date(b.created) - new Date(a.created)
        );
        // Store the fetched data in the state
        setData(sortedData);
        setFilteredData(sortedData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData(); // Call fetch function
  }, []);
  const handleDelete = async (id) => {
    // Ask for confirmation before deleting
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (isConfirmed) {
      try {
        // Get a reference to the document to delete
        const docRef = doc(db, "Form", id); // Ensure you pass the correct document reference

        // Delete the document from Firestore
        await deleteDoc(docRef);

        // After deletion, filter out the deleted document from the state
        setData((prevData) => prevData.filter((person) => person.id !== id));
        console.log("Document deleted successfully!");
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    } else {
      console.log("Deletion cancelled");
    }
  };

  const handleFilter = () => {
    // If no fromDate or toDate, just return all data
    if (!fromDate || !toDate) {
      setFilteredData(data);
      return;
    }

    const fromTimestamp = new Date(fromDate).getTime();
    const toTimestamp = new Date(toDate).getTime();

    const filtered = data.filter((person) => {
      const personTimestamp = new Date(person.created).getTime(); // Assuming 'created' is a timestamp
      return personTimestamp >= fromTimestamp && personTimestamp <= toTimestamp;
    });

    setFilteredData(filtered); // Update the filtered data
  };
  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign out
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Filter Section */}
      <div className="filter-section mb-5">
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
        {/* Logout Button */}
        <div className="logout-container mx-3">
          <button className="filter-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                {/* Table Headers */}
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
              {filteredData.map((person) => (
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
                        e.preventDefault(); // Prevent default link behavior
                        handleDelete(person.id); // Pass the person.id to handleDelete
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
