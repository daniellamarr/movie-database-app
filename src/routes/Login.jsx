import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import { FormInput } from "../components";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Axios from "axios";


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required"),
  password: Yup.string().required("Password is Required")
});

const Login = () => {
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
    Axios.post(`https://thesource-movie-database-app.herokuapp.com/api/v1/auth/login`, state, {
      "headers": {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      console.log("message", res)
      if (res.data.status === "success") {
        setLoading(false)
        var token = res.data.data.token
        var userName = res.data.data.username
        localStorage.setItem('token', token);
        localStorage.setItem('userName', userName);
        props.history.push("/")

      }
    }).catch((err) => {
      alert(err)
      setLoading(false)
    })
  };


  return (
    <div className="dark_background" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div>
        <div>
          <input className="auth__input" type='email' id="email" onChange={handleChange} placeholder="User Name" onChange={handleChange} style={{ background: "inherit" }} />
        </div>
        <div>
          <input className="auth__input" type="password" id="password" placeholder="Password" onChange={handleChange} style={{ background: "inherit" }} />
        </div>
        <div>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <div>
          <Button className="login_button" onClick={handleSubmit}>{
            loading ? "Authenticating" : "Login"
          }</Button>
        </div>
        <div>
          <span style={{ color: "#ffffff", opacity: "0.5", letterSpacing: "0.46px", font: "Bold 16px/29px", marginRight: "1vw" }}>Dont have an account?</span>
          <span style={{ textDecoration: "underline", letterSpacing: "0.46px", color: "#000000" }}><Link to="/signup">Sign up</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
