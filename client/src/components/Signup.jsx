import React, { useState } from 'react';
import './Signup.css'; // Don't forget to create a CSS file and import it

const Signup = ({ messages }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]); // This is for displaying error messages to the user

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]); // Clear out any previous errors

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, email, password, confirmPassword }),
      });

      if (response.ok) {
        // Redirect the user to the profile page after successful registration
        window.location.href = '/profile';
      } else {
        const errorData = await response.json();
        setErrors(errorData.errors);
        console.error('Error:', errorData);
      }
    } catch (error) {
      // console.error('Error:', error);
    }
  };

  return (
    <main className="container-fluid signup-page">
      <div className="signup-container">
        <img src="/imgs/leveredgeLogo.png" alt="logo" />
        <section>
          {errors &&
            errors.map((el, index) => (
              <div key={index} className="alert alert-danger">
                {el.msg}
              </div>
            ))}
          {messages.info &&
            messages.info.map((el, index) => (
              <div key={index} className="alert alert-info">
                {el.msg}
              </div>
            ))}
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              Let's go
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Signup;
