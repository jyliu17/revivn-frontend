import { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

const SignupForm = (callback) => {
  const [values, setValues] = useState({
  
    company_name: "",
    email: "",
    password: "",
    is_admin: false,
    
  });
  const {company_name, email, password} = values
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
    fetch("http://localhost:3000/clients", {
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

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  

  return (
    <div>
      <div className="form-content">
        <header>Sign Up Form</header>
        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div>
            <label>
              Company Name
            </label>
            <input
              placeholder="Company Name"
              type="text"
              name="company_name"
              value={company_name}
              onChange={handleChange}
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
            <label htmlFor="password">
              {" "}
              Password{" "}
            </label>
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
      </div>
    </div>
  );
};

export default SignupForm;
