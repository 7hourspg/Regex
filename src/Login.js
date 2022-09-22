import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  useEffect(() => {
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]+[m]$"
    );
    const validPassword = new RegExp(
      "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])"
    );
    if (validEmail.test(email)) {
      setEmailErr(true);
    }
    if (validPassword.test(password)) {
      setPwdError(true);
    }
  }, [email, password]);

  return (
    <>
      <div className="container">
        <div className="child">
          <h2 className="heading">LOGIN</h2>
          <div className="form">
            <form action="">
              <div className="email">
                <span style={{ color: emailErr === false ? "red" : "green" }}>
                  Email
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pass">
                <span style={{ color: pwdError === false ? "red" : "green" }}>
                  Password:
                </span>
                <div>
                <input
                  type={passwordShown ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="8"
                />
                </div>
               
                <div className="eye" style={{ textAlign: "right" }}>
                  <AiFillEye
                    onClick={togglePassword}
                    size="1.5rem"
                    color="red"
                  />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  className="btn"
                  disabled={emailErr && pwdError ? false : true}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
