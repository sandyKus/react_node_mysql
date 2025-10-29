import React from "react";

const Login = () => {
  return (
    <form className="form">
      <div className="input-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
      </div>

      <button type="submit" className="btn">Login</button>
    </form>
  );
};

export default Login;
