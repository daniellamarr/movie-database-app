import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            Movie DB API
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <input placeholder="Search" />
            </li>
            {
              !localStorage.getItem('userName') && !localStorage.getItem('token') &&
              <li>
                <Link to="/login">
                  Sign in
                </Link>
              </li>
            }
            {
              !localStorage.getItem('userName') && !localStorage.getItem('token') ?
              <li>
                <Link to="/signup">
                  Register
                </Link>
              </li>
              :
              <li>
                <Link to="/userprofile">
                  {localStorage.getItem('userName')}
                </Link>
              </li>
            }
          </ul>
        </nav>
      </header>
    )
  }
}
