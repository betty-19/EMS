import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/EventRegistration.css";
import bazaar from '../assets/yene_bazaar.jpg'


function EventRegistration() {
  const [formData, setFormData] = useState({
    // username: "",
    businessName: "",
    contactPerson: "",
    phoneNumber: "",
    link: "",
    description: "",
    electricalOutlet: "No",
    boothNumber: "",
    receipt: null,
  });

  const fileInputRef = useRef(null); // Ref for file input
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, receipt: e.target.files[0] }));
  };
  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      electricalOutlet: prevData.electricalOutlet === "Yes" ? "No" : "Yes",
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }


    try {
      const response = await fetch("http://localhost:3000/api/registered_events", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Successfully Registered");

        // Reset form values
        setFormData({
          // username: "",
          businessName: "",
          contactPerson: "",
          phoneNumber: "",
          link: "",
          description: "",
          electricalOutlet: "No",
          boothNumber: "",
          receipt: null,
        });
        

        // Clear the file input field
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        // navigate("/viewRegistration");
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
            <label htmlFor="businessName" className="form-label">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              className="form-control"
              id="businessName"
              placeholder="Enter Your Business Name"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactPerson" className="form-label">
              Contact Person
            </label>
            <input
              type="text"
              name="contactPerson"
              className="form-control"
              id="contactPerson"
              placeholder="Enter Name of Contact Person"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              name="phoneNumber"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="link" className="form-label">
              Email or Social Media Link
            </label>
            <input
              type="text"
              name="link"
              className="form-control"
              id="link"
              placeholder="Enter link of Socail Media"
              value={formData.link}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
            Please provide a description of your business and the product that you sell or the service that you offer
            </label>
            <textarea row="200" column="100" 
              type="text"
              name="description"
              className="form-control"
              id="description"
              placeholder="Write about Your Business"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="electrical-outlet" className="form-label">
              Do you need an electrical outlet ?
            </label>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="" />
              <label class="form-check-label" for=""> Yes </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id=""
                checked
                required
              />
              <label class="form-check-label" for=""> No </label>
            </div>
            </div> */}

<div className="mb-3">
            <label>Do you need an electrical outlet?</label><br></br>
            <input
            id="check"
              type="checkbox"
              checked={formData.electricalOutlet === "Yes"}
              onChange={handleCheckboxChange}
            />
            Yes
          </div>
            <div className="mb-3">
            <label htmlFor="booth_number" className="form-label">
              Write booth Number you Select From this Picture.
            </label>
            <div className="img-cl">
            <img id="download" src={bazaar} alt="Expenditure" /><br></br>
          </div>
            <input 
              type="Number"
              name="boothNumber"
              className="form-control"
              id="boothNumber"
              placeholder="Enter booth number"
              value={formData.boothNumber}
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
              ref={fileInputRef} // Attach the ref
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="buttons">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleCancel}
            >
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
