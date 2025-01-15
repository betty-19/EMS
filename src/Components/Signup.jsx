import React, { useState,useRef } from "react";
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
  const handleLoginBtn = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("LoginPassword").value;

    console.log("Username:", username);
    console.log("Password:", password);

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
       
        if (response.headers.get("content-type").includes("application/json")) {
          return response.json();
        } else {
          return response.text(); 
        }
      })
      .then((data) => {
        if (typeof data === "string") {
          console.log("Response text:", data);
          alert(data); 
        } else {
          console.log("Response JSON:", data);
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        alert("Login failed. Please check your username and password.");
      });
};

  
  const handleSignUp = () =>{
        const fullName = document.getElementById("fullName").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const username = document.getElementById("usernameSignup").value;
    // nav("/viewRegistration");
    if(password !== confirmPassword){
      alert("Password do not match");
      return;
    }

    fetch("http://localhost:3000/signUp", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({fullName, username, password}),
    })
    .then((response) =>{
      if(response.ok){
        alert("User registered successfully");
        nav("/viewRegistration");
      }
      else{
        alert("Faild to register user");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred");
    });


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
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="LoginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="LoginPassword"
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
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="usernameSignup" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameSignup"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
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
