import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {

    let navStyle = {
      textDecoration: 'none'
    }

    return (
      <div className='BaseLayout'>
        <nav className="nav">
          <NavLink activeClassName="selected"
          style={navStyle} exact to='/'>House Rules
          </NavLink>
          <NavLink activeClassName="selected"
          style={navStyle} exact to='/games'>Games
          </NavLink>
        </nav>
        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
};
