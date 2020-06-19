import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import "./Login.scss";

import Title from "../atoms/Title/Title";
import SubmitBtn from "../atoms/SubmitBtn";

const Login = () => {
  return (
    <main className="login-page">
      <Title />

      <form>
        <div className="form-container">
          <input type="email" name="email" placeholder="Mail or Username" />
          <input type="password" name="password" placeholder="Password" />
          <SubmitBtn />

          <a href="#" className="reset-link">
            Forgot Password
          </a>
          <span>
            Don't have an account? <a href="#">Sign Up</a>
          </span>
          <hr />
          <div className="icon-container">
            <div className="icon-circle">
              <FontAwesomeIcon icon={faFacebook} width="20" />
            </div>
            <div className="icon-circle">
              <FontAwesomeIcon icon={faGoogle} width="20" />
            </div>
            <div className="icon-circle">
              <FontAwesomeIcon icon={faTwitter} width="20" />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Login;
