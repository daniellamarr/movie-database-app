import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Axios from "axios";


const Signup = (props) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      props.history.push("/")
    }
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setState({ ...state, [e.target.id]: e.target.value })
    console.log(state)
  };
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    Axios.post(`https://thesource-movie-database-app.herokuapp.com/api/v1/auth/signup`, state, {
      "headers": {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      console.log("message", res)
      if (res.data.status === "success") {
        setLoading(false)
        var token = res.data.token
        var userName = res.data.data.username
        console.log("for what",token)
        localStorage.setItem('token', token);
        localStorage.setItem('userName', userName);
        props.history.push("/")
      }
    }).catch((err)=>{
      alert(err)
      setLoading(false)
    })
  };

  return (
    <div className="dark_background" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div>
        <div>
          <input className="auth__input" type='text' id="username" onChange={handleChange} placeholder="User Name" style={{ background: "inherit" }} />
        </div>
        <div>
          <input className="auth__input" type='email' id="email" onChange={handleChange} placeholder="Email" style={{ background: "inherit" }} />
        </div>
        <div>
          <input className="auth__input" type="password" id="password" placeholder="Password" onChange={handleChange} style={{ background: "inherit" }} />
        </div>
        <div>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <div style={{ marginTop: "0.5vmin" }}>
          <Button className="login_button" onClick={handleSubmit}>{
            loading ? "Authenticating" : "Sign up"
          }</Button>
        </div>
        <div style={{ marginTop: "0.5vmin" }}>
          <span style={{ color: "#ffffff", opacity: "0.5", letterSpacing: "0.46px", font: "Bold 16px/29px", marginRight: "1vw" }}>Already have an account?</span>
          <span style={{ textDecoration: "underline", letterSpacing: "0.46px", color: "#000000" }}><Link to="/login">Sign in</Link></span>
        </div>
        <div style={{ marginTop: "0.5vmin" }}>
          <p className="center">
            By signing up you agree to our Terms and Conditions &
            privacy policy
            </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
