import React from "react";

const Register = () => {
  return (
    <form className="form">
      <div className="input-group">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" required />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Create password" required />
      </div>

      <button type="submit" className="btn">Sign Up</button>
    </form>
  );
};

export default Register;
