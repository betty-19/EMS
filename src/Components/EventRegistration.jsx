import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/EventRegistration.css";

function EventRegistration() {
  const [formData, setFormData] = useState({
    username: "",
    eventName: "",
    receipt: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, receipt: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", formData.username);
    data.append("eventName", formData.eventName);
    data.append("receipt", formData.receipt);

    try {
      const response = await fetch("http://localhost:3000/api/registered_events", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Successfully Registered");
        navigate("/viewRegistration");
      } else {
        console.error("Failed to register event");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="register-wrapper">
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              placeholder="Enter Full Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="eventName" className="form-label">
              Event Name
            </label>
            <input
              type="text"
              name="eventName"
              className="form-control"
              id="eventName"
              placeholder="Enter Event Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="receipt" className="form-label">
              Upload Receipt
            </label>
            <input
              type="file"
              name="receipt"
              className="form-control"
              id="receipt"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="buttons">
            <button type="button" className="btn btn-outline-danger" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-outline-success">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventRegistration;
