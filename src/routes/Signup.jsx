import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {apiServiceClient} from '../util/axios-client';
import Header from "../components/Header";
import { validateEmail } from "../util/validation";


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
        document.getElementById(`${field}_error`).classList.remove('hide');
        document.getElementById(`${field}_error`).innerHTML = `${field} is required`;
        return false;
      } else {
        if (field === 'password' && state['password'].length < 7) {
          document.getElementById('password').classList.add('error-input');
          document.getElementById('password_error').classList.remove('hide');
          document.getElementById('password_error').innerHTML = 'password cannot be less than 7';
          return false;
        } else if (!validateEmail(state['email'])) {
          document.getElementById('email').classList.add('error-input');
          document.getElementById('email_error').classList.remove('hide');
          document.getElementById('email_error').innerHTML = 'email format is invalid';
          return false;
        }
        document.getElementById(field).classList.remove('error-input');
        document.getElementById(`${field}_error`).classList.add('hide');
        return true;
      }
    })
  }

  const handleSubmit = async (e) => {
    try {
      document.getElementById('auth_error').classList.add('hide');

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
      document.getElementById('auth_error').classList.remove('hide');
      document.getElementById('auth_error').innerHTML = 'we are not able to sign you up at this time';
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />
      <div className="dark_background" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div>
          <div>
            <span id="auth_error" className="hide error-div"></span>
          </div>
          <div>
            <input className="auth__input" type='text' id="username" onChange={handleChange} placeholder="Name" />
            <span id="username_error" className="hide error-span"></span>
          </div>
          <div>
            <input className="auth__input" type='email' id="email" onChange={handleChange} placeholder="Email" />
            <span id="email_error" className="hide error-span"></span>
          </div>
          <div>
            <input className="auth__input" type="password" id="password" placeholder="Password" onChange={handleChange} />
            <span id="password_error" className="hide error-span"></span>
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
