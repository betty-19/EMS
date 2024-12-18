import React, { useState } from "react";
import "../assets/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const nav = useNavigate();
  const [login, setLogin] = useState(false);


  const closeSignUp = () => {
    nav("/");
  };

  const handleLoginClick = () => {
    setLogin(true);
  };

  const handleSignUpClick = () => {
    setLogin(false);
  };
  const handleLoginBtn = () =>{
    console.log("Navigating to /eventRegistration");
nav("/eventRegistration");
  }
  const handleSignUp = () =>{
    nav("/viewRegistration");
  }

  return (
    <div className="sl-wrapper">
      <div className="signup-login">   <div className="title">
        <h1 onClick={handleSignUpClick}>SignUp</h1>
        <p>/</p>
        <h1 onClick={handleLoginClick}>Login</h1>
      </div>
      {login ? (
        <div className="login-wrapper">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter Password"
            />
          </div>
          <div className="buttons">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={closeSignUp}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-outline-success" onClick={handleLoginBtn}>
              Login
            </button>
          </div>
        </div>
      ) : (
        <div className="signup-wrapper">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">
              Confirm Password
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput3"
              placeholder="Confirm Password"
            />
          </div>
          <div className="buttons">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={closeSignUp}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-outline-success" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      )}</div>
   
    </div>
  );
}

export default Signup;
