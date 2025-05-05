import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./login-register.css";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  const [action, setAction] = useState("");

  const registerLink = () => {
    setAction("active");
  };

  const loginLink = () => {
    setAction("");
  };

  return (
    <div className="container-1">
      <h1>ADMIN</h1>
      <div className={`wrapper ${action}`}>
        <div className="form-box login">
          <form action="">
            <h1>Login</h1>

            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>

            <div className="remember-forget">
              <label>
                {" "}
                <input type="checkbox" /> Remember Me{" "}
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">
              <Link to="/AdminDash">Login</Link>
            </button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form action="">
            <h1>Registeration</h1>

            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>

            <div className="remember-forget">
              <label>
                {" "}
                <input type="checkbox" /> I agree to the terms and conditions{" "}
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

<button className="button-79" role="button"><Link to="/UserLoginRegister">User Login </Link> </button>



    </div>
  );
};

export default LoginRegister;
