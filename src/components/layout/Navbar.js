import React, { Component } from "react";
import { GoMarkGithub } from "react-icons/go";

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <GoMarkGithub />
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
