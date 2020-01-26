import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          Movie DB API
        </div>
        <nav>
          <ul>
            <li>
              <input placeholder="Search" />
            </li>
            <li>
              <a href="">
                Sign in
              </a>
            </li>
            <li>
              <a href="">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
