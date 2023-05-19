import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // handle any change:
  const handleChange = e => {
    const inputName = e.target.name;
    if (inputName === "name") {
      setName(e.target.value);
    }
    if (inputName === "email") {
      setEmail(e.target.value);
    }
    if (inputName === "password") {
      setPass(e.target.value);
    }
  };
  // handle submit:
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Form is Submitted !! `);
  };
  // handle rest form:
  const handleReset = () => {
    setEmail("");
    setPass("");
    setName("");
  };
  return (
    <div className="container w-25 mt-5">
      <h3 className="mt-5 text-center">Fill Up Your Form</h3>

      <div className="w-100 shadow-lg p-3 mb-5 bg-warning rounded mt-5 ">
        <form className="p-2" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Enter your name"
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="name"
              value={name}
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Enter your email"
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={handleChange}
              placeholder="Enter your password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              required
              value={pass}
            />
          </div>

          <div className="d-flex">
            <button type="submit" className="btn btn-primary w-100 m-1">
              Submit
            </button>
            <button
              onClick={handleReset}
              type="submit"
              className="btn btn-danger w-100 m-1"
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
