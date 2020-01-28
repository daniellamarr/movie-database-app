import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {apiServiceClient} from '../util/axios-client';
import Header from "../components/Header";


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
  };

  const handleError = (fields) => {
    return fields.map(field => {
      if(!state[field]) {
        document.getElementById(field).classList.add('error-input');
        return false;
      } else {
        if (field === 'password' && state['password'].length < 4) {
          document.getElementById('password').classList.add('error-input');
          return false;
        }
        document.getElementById(field).classList.remove('error-input');
        return true;
      }
    })
  }

  const handleSubmit = async (e) => {
    try {
      if (handleError(['username', 'email', 'password']).includes(false)) {
        return false;
      }

      if (state.password.length < 4) {
        return false;
      }

      setLoading(true)
      e.preventDefault();

      const signup = await apiServiceClient({
        url: `/auth/signup`,
        method: "post",
        data: state
      });

      if (signup.data.status === "success") {
        setLoading(false)
        const token = signup.data.token
        const userName = signup.data.data.username
        localStorage.setItem('token', token);
        localStorage.setItem('userName', userName);
        props.history.push("/")
      }
    } catch(err) {
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />
      <div className="dark_background" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div>
          <div>
            <input className="auth__input" type='text' id="username" onChange={handleChange} placeholder="Name" />
          </div>
          <div>
            <input className="auth__input" type='email' id="email" onChange={handleChange} placeholder="Email" />
          </div>
          <div>
            <input className="auth__input" type="password" id="password" placeholder="Password" onChange={handleChange} />
          </div>
          <div className="remember">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div style={{ marginTop: "0.5vmin" }}>
            <Button className="login_button" onClick={handleSubmit} disabled={loading}>{
              loading ? "Authenticating..." : "Sign up"
            }</Button>
          </div>
          <div className="alt-sign">
            <span style={{ color: "#ffffff", opacity: "0.5", letterSpacing: "0.46px", font: "Bold 16px/29px"}}>Already have an account?</span>{" "}
            <span><Link to="/login">Sign in</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
