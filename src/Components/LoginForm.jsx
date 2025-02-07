import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import "./LoginForm.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="input-group">
          <FaUser className="icon" />
          <input type="text" placeholder="Username or email" />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <button className="login-button">LOGIN</button>
        </div>
        <div className="links">
          <a href="/register">Register now</a>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <div className="divider">
          <span>or</span>
        </div>
        <div className="social-login">
          <button className="social-button facebook">
            <FaFacebook className="social-icon" /> LOGIN WITH FACEBOOK
          </button>
          <button className="social-button twitter">
            <FaTwitter className="social-icon" /> LOGIN WITH TWITTER
          </button>
          <button className="social-button google">
            <FaGoogle className="social-icon" /> LOGIN WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
