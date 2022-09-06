import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../css/Login.css";

function Login() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    fetch(
      "https://edit-shop-api.herokuapp.com/api/login?username=" +
        name +
        "&password=" +
        password
    )
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then((data) => {
        navigate("/productlist");
      })
      .catch((error) => {
        console.log("error: " + error);
        alert("Password or user incorrect");
      });
  };

  return (
    <div className="backpanel">
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
          <h2>Sign in</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={name}
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <input type="submit" value="Login"></input>
        </div>
      </form>
    </div>
  );
}

export default Login;
