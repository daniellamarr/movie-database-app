import React from "react";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div id="header_parent">
      <Menu attached="top" id="navbar">
        <Link to="/">
          <Menu.Item>Logo</Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input className="prompt" type="text" placeholder="Search ..." />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
          <Link to="/login">
            <Menu.Item>Sign In</Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Header;
