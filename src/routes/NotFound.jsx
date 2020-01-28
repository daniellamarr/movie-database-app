import React, { Component } from 'react';
import Text from '../components/Text';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="dark_background" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="notFound">
            <Text color="#fff" fontSize={50}>404!</Text>
            <Text color="#fff" fontSize={16}>The resource you are looking for does not exist</Text>
            <Link to="/">
              <button>
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
