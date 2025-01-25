import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import affStrap from "../../assets/images/affStrap.png";
import strap from "../../assets/images/strapw.png";
import turndown from "../../assets/images/turn-down.png"
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
    alert("Form submitted successfully!");
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
    if (!/^[a-zA-Z0-9._%+-]*@gmail\.com$/.test(value) && value !== "") {
      setValue("email", ""); 
    } else {
      setValue("email", value);
    }
  };

  return (
    <div className="text-center row">
      <div className="col-md-4 mt-5">
        {" "}
        <div className="text-center text-black p-3">
          <h1 className="tagline1">
            SETTLE YOUR LOANS AND STOP YOUR HARASSEMENT IN 24 HOURS
          </h1>
          <img src={turndown} alt=""  className="turnDown"/>
          {/* <button className="btn btn-primary get-started-btn mt-4">
              Register Now
            </button> */}
        </div>
      </div>
      <div className="col-md-4 row1">
        {" "}
        <h1>Contact Us</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-12 form_container form-group">
            <label htmlFor="name" className="label">
              Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", {
                required: "Name is required",
               
              })}
              onInput={handleNameInput}
            />
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
          </div>

          <div className="col-md-12 form_container form-group">
            <label htmlFor="number" className="label">
              Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="number"
              {...register("number", {
                required: "Mobile number is required",
              })}
              onInput={handleNumberInput}
            />
            {errors.number && <p className="text-danger">{errors.number.message}</p>}
          </div>

          <div className="col-md-12 form_container">
            <label htmlFor="email" className="label">
              Email ID <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              {...register("email", {
                required: "Email is required",
              })}
              onInput={handleEmailInput}
              placeholder="example@gmail.com"
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </div>
          <div className="col-md-12 form_container">
            <label htmlFor="" className="label">
              City <span className="text-danger">*</span>
            </label>
            <select className="form-control">
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
          </div>
          <div className="col-md-12 form_container">
            <label htmlFor="" className="label">
              Employment Status <span className="text-danger">*</span>
            </label>
            <select className="form-control">
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
          </div>
          <div className="col-md-12 form_container">
            <label htmlFor="" className="label">
              Monthly Income <span className="text-danger">*</span>
            </label>
            <select className="form-control">
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
          </div>
          <div className="col-md-12 form_container">
            <label htmlFor="" className="label">
              Facing Harrasement? <span className="text-danger">*</span>
            </label>
            <select className="form-control">
              <option value="">Select</option>
              {["Yes", "No"].map((harassment) => (
                <option key={harassment} value={harassment}>
                  {harassment}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-12 form_container">
            <label htmlFor="" className="label">
              Total Credit Card Dues? <span className="text-danger">*</span>
            </label>
            <input type="number" className="form-control" />

          </div>
          <div className="col-md-12 form_container">
            <label htmlFor="" className="label">
              Total Personal Loan Dues? <span className="text-danger">*</span>
            </label>
            <input type="number" className="form-control" />
            
            
          </div>
          <div className="col-md-12 form_container">
            <label htmlFor="" className="label">
              Can you pay 2,000 to 5,000 to start the process?{" "}
              <span className="text-danger">*</span>
            </label>
            <select className="form-control">
              <option value="">Select</option>
              {["Yes", "No"].map((harassment) => (
                <option key={harassment} value={harassment}>
                  {harassment}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-12 form_container">
            <label htmlFor="" className="label">
              Your Queries
            </label>
            <textarea
              placeholder="Your Queries"
              name=""
              id=""
              className="form-control"
            ></textarea>
          </div>
          <div className="col-md-12 text-center">
            <button className="btn btn-primary get-started-btn mt-4">
              Register Now
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
      {/* <div className="col-md-4 text-black">
            txt
        </div> */}

      {/* <div className="col-md-4 text-black">
            txt
        </div> */}
      {/* <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <div className="row">
          <div className=" mb-3">
            <div className="row">
              <div className="col-md-6">
                <label className="form-label">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className={`form-control ${errors.Name ? "is-invalid" : ""}`}
                  {...register("Name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Name must contain only alphabets and spaces",
                    },
                  })}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  }}
                />
              </div>
            </div>
          </div>

          <div className=" mb-3">
            <label className="form-labell">
              Mobile Number <span style={{ color: "red" }}>*</span>
            </label>
            <input type="number" minLength="10" maxLength="10" />
          </div>

          <div className=" mb-3">
            <label className="form-labell">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input type="email" />
          </div>

          <div className="mb-3">
            <label className="form-labell">
              City <span style={{ color: "red" }}>*</span>
            </label>
            <select>
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
          </div>

          <div className="mb-3">
            <label className="form-labell">
              Employment Status <span style={{ color: "red" }}>*</span>
            </label>
            <select>
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
          </div>

          <div className="mb-3">
            <label className="form-labell">
              Monthly Income <span style={{ color: "red" }}>*</span>
            </label>
            <select>
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
          </div>

          <div className="mb-3">
            <label className="form-labell">
              Facing Harassment? <span style={{ color: "red" }}>*</span>
            </label>
            <select>
              <option value="">Select</option>
              {["Yes", "No"].map((harassment) => (
                <option key={harassment} value={harassment}>
                  {harassment}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-labell">
              Can you pay 2,000 to 5,000 to start the process?{" "}
              <span style={{ color: "red" }}>*</span>
            </label>
            <select>
              <option value="">Select</option>
              {["Yes", "No"].map((settlement) => (
                <option key={settlement} value={settlement}>
                  {settlement}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <textarea
              placeholder="Your Queries"
              name=""
              id=""
              className=" form-controll pyy-5"
            />
          </div>
          <div className="coll-12 mbb-3 bg-warningg w-fulll">
            <button
              type="submit"
              className="btn btn-primary get-started-btn mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      </form> */}
    </div>
  );
};

export default Form;
