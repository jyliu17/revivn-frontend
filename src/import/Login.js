import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SignupForm from "./SignupForm";
import "./Form.css";

//work on formdata - form submit on login & login route
const Login = ({ submitForm, currentUser, setCurrentUser }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((r) => r.json())
      .then((userObj) => {
        if (userObj.errors) {
          setErrors(userObj.errors);
          window.alert ("Invalid username or password")
        } else {
          alert
          setCurrentUser(userObj)
          history.push(`/tickets`);
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
  };

  return (
    <div>
      <div>
      <h1>
      Welcome to the Revivn Tracker. Please Sign In.
      </h1>
    </div>
      <div className="form-content">
        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email"> Email </label>
            <input
              id="email"
              type="email"
              className="form-field"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password"> Password </label>
            <input
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              className="form-field"
              placeholder="Password"
              name="password"
            />
            
          </div>
          <div>
            <button className="form-field" type="submit">
              Submit
            </button>
          </div>
        </form>
        <a href= "/signup">
              Sign Up 
        </a>
      </div>
    </div>
  );
};

export default Login;
