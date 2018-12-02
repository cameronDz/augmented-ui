import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarEnd extends Component {

  render() {
    return (
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-light"><Link to="/signup"><strong>Sign up</strong></Link></a>
            <a className="button is-light"><Link to="/signin"><strong>Sign In</strong></Link></a>
          </div>
        </div>
      </div>
    );
  }  
}

export default NavbarEnd;
