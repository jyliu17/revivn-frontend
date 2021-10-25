import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Form.css";


const PickupForm = () => {

  const [values, setValues] = useState({
  
    description: "",
    date: "",
    location: "",
    status: "Pending",
    employee: "",
    email: "",
    
  });
 
  const history = useHistory()
  const [errors, setErrors] = useState({});


  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {

    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("errors", errors)
    console.log("values", values)
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      handleComplete(values);
    }
  };

  const handleComplete = (values) => {
    console.log("values", values)
    fetch("http://localhost:3000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        res.json();
      })
      .catch((error) => console.log("Error", error))
      .then((response) => {console.log("Response", response), history.push(`/tickets`)});
      
  };
  return (
    <div>
      <div className="form-content">
        <header>Sign Up Form</header>
        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div>
            <label>
              Description
            </label>
            <textarea
              placeholder="Description"
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </div>
            <div className="contact-method">
            <label>
              Date
            </label>
            <input
              id="date"
              type="date"
              className="form-field"
              placeholder="date"
              name="date"
              value={values.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              Address
            </label>
            <input
              id="location"
              type="location"
              value={values.location}
              onChange={handleChange}
              className="form-field"
              placeholder="Address"
              name="location"
            />
          </div>
          <div className="contact-method">
            <label htmlFor="email">
              {" "}
              Email{" "}
            </label>
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
            <button className="form-field" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PickupForm;


