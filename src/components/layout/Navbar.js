import React from "react";
import { GoMarkGithub } from "react-icons/go";

const Navbar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <GoMarkGithub />
        {props.title}
      </h1>
    </nav>
  );
};

export default Navbar;
