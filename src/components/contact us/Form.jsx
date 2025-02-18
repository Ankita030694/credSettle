import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import affStrap from "../../assets/images/affStrap.png";
import strap from "../../assets/images/strapw.png";
import turndown from "../../assets/images/turn-down.png";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
const Form = () => {
  const location = useLocation();
  const { state } = location;
  const creditCardDebt = state?.creditCardDebt || 0;
  const personalLoanDebt = state?.personalLoanDebt || 0;
  const navigate = useNavigate();

  const[error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}-${today.getFullYear()}`;
    data["created"] = Date.now();
    data["date"] = formattedDate;
    try {
      await addDoc(collection(db, "Form"), data);
      console.log("Data Submitted!", data);
      navigate("/thanks");
    } catch (error) {
      console.error("Error Submitting form:", error);
      alert("Failed to submit the form!");
    } 
  };

  const handleNameInput = (e) => {
    const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setValue("name", value);
  };

  const handleNumberInput = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setValue("number", value);
  };

  const handleEmailInput = (e) => {
    const value = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (value === "" || gmailRegex.test(value)) {
      setValue("email", value);
      setError("email", "");
    } else {
      setError("email", "Please enter a valid Gmail address.");
    }
  };
  useEffect(() => {
    if (creditCardDebt) {
      setValue("creditCardDues", getDebtRange(creditCardDebt));
    }
    if (personalLoanDebt) {
      setValue("personalLoanDues", getDebtRange(personalLoanDebt));
    }
  }, [creditCardDebt, personalLoanDebt]);

  const getDebtRange = (amount) => {
    if (amount >= 1000000) return "10,00,000 or above";
    if (amount >= 500000) return "5,00,000 - 10,00,000";
    if (amount >= 400000) return "4,00,000 - 5,00,000";
    if (amount >= 300000) return "3,00,000 - 4,00,000";
    if (amount >= 200000) return "2,00,000 - 3,00,000";
    return "1,00,000 - 2,00,000";
  };
  return (
    <div className="text-center row">
      <div className="col-md-4 mt-5">
        {" "}
        <div className="text-center text-black p-3">
          <h1 className="tagline1">
            SETTLE YOUR LOANS AND STOP YOUR HARASSEMENT IN 24 HOURS
          </h1>
          <img src={turndown} alt="" className="turnDown" />
        </div>
      </div>
      <div className="col-md-4 row1">
        {" "}
        <h1>Contact Us</h1>
        <strong className="text-danger">We Do Not Provide Any Kind Of Loan*</strong>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-12 form_container form-group">
            <label htmlFor="name" className="label" style={{color: "white"}}>
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", { required: "Name is required" })}
              onInput={handleNameInput}
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container form-group">
            <label htmlFor="number" className="label" style={{color: "white"}}>
              Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              {...register("number", { required: "Mobile number is required" })}
              onInput={handleNumberInput}
            />
            {errors.number && (
              <p className="text-danger">{errors.number.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="email" className="label">
              Email ID <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              {...register("email", { required: "Email is required" })}
              onInput={handleEmailInput}
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="city" className="label">
              City <span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              {...register("city", { required: "City is required" })}
            >
              <option value="">Select City</option>
              {[
                "Delhi",
                "Mumbai",
                "Pune",
                "Bangalore",
                "Chennai",
                "Hyderabad",
                "Other",
              ].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-danger">{errors.city.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="employmentStatus" className="label">
              Employment Status <span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              {...register("employmentStatus", {
                required: "Employment status is required",
              })}
            >
              <option value="">Select</option>
              {[
                "Not employed",
                "Working as salaried employee",
                "Self employed",
                "Business with more than 10 employees",
              ].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.employmentStatus && (
              <p className="text-danger">{errors.employmentStatus.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="monthlyIncome" className="label">
              Monthly Income <span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              {...register("monthlyIncome", {
                required: "Monthly income is required",
              })}
            >
              <option value="">Select</option>
              {[
                "10,000 - 50,000",
                "50,000 - 1,00,000",
                "1,00,000 - 3,00,000",
                "3,00,000 - 5,00,000",
                "5,00,000 or above",
              ].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.monthlyIncome && (
              <p className="text-danger">{errors.monthlyIncome.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="harassment" className="label">
              Facing Harassment? <span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              {...register("harassment", {
                required: "Harassment status is required",
              })}
            >
              <option value="">Select</option>
              {["Yes", "No"].map((harassment) => (
                <option key={harassment} value={harassment}>
                  {harassment}
                </option>
              ))}
            </select>
            {errors.harassment && (
              <p className="text-danger">{errors.harassment.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="creditCardDues" className="label">
              Total Credit Card Dues? <span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              {...register("creditCardDues", {
                required: "Credit card dues are required",
              })}
            >
              <option value="">Select</option>
              {[
                "1,00,000 - 2,00,000",
                "2,00,000 - 3,00,000",
                "3,00,000 - 4,00,000",
                "4,00,000 - 5,00,000",
                "5,00,000 - 10,00,000",
                "10,00,000 or above",
              ].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.creditCardDues && (
              <p className="text-danger">{errors.creditCardDues.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="personalLoanDues" className="label">
              Total Personal Loan Dues? <span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              {...register("personalLoanDues", {
                required: "Personal loan dues are required",
              })}
            >
              <option value="">Select</option>
              {[
                "1,00,000 - 2,00,000",
                "2,00,000 - 3,00,000",
                "3,00,000 - 4,00,000",
                "4,00,000 - 5,00,000",
                "5,00,000 - 10,00,000",
                "10,00,000 or above",
              ].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.personalLoanDues && (
              <p className="text-danger">{errors.personalLoanDues.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="canPay" className="label">
              Can you pay 2,000 to 5,000 to start the process?{" "}
              <span className="text-danger">*</span>
            </label>
            <select
              className="form-control"
              {...register("canPay", {
                required: "This field is required",
              })}
            >
              <option value="">Select</option>
              {["Yes", "No"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.canPay && (
              <p className="text-danger">{errors.canPay.message}</p>
            )}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="queries" className="label">
              Your Queries
            </label>
            <textarea
              placeholder="Your Queries"
              className="form-control"
              {...register("queries")}
            ></textarea>
          </div>

          <div className="col-md-12 text-center">
            <button className="btn btn-primary get-started-btn mt-4">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-4 mt-5 aff_Cont">
        <h3 className="text-center">We work with guidelines of:</h3>
        <div className="marquee-container1">
          <div className="marquee-content1">
            <img src={affStrap} alt="" />
          </div>
        </div>

        <h3 className="text-center">Our media coverages:</h3>
        <div className="marquee-container2">
          <div className="marquee-content2">
            <img src={strap} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
