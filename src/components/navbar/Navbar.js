import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  //   showSettings (event) {
  //     event.preventDefault();
  //   }

  let location = useLocation();

  const homeActiveClass = location.pathname === '/home' ? 'active-item' : '';
  const aboutActiveClass = location.pathname === '/about' ? 'active-item' : ''
  const projectActiveClass = location.pathname === '/projects' ? 'active-item' : '';
  const skillsActiveClass = location.pathname === '/skills' ? 'active-item' : '';
  const contactActiveClass = location.pathname === '/contact' ? 'active-item' : ''

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu>
      <Link id="home" className={`menu-item ${homeActiveClass}`} to="/home">
        Home
      </Link>
      <Link id="about" className={`menu-item ${aboutActiveClass}`} to="/about">
        About
      </Link>
      <Link id="contact" className={`menu-item ${projectActiveClass}`} to="/projects">
        Projects
      </Link>
      <Link id="contact" className={`menu-item ${skillsActiveClass}`} to="/skills">
        Skills
      </Link>
      <Link id="contact" className={`menu-item ${contactActiveClass}`} to="/contact">
        Contact
      </Link>
      {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
    </Menu>
  );
};

export default Navbar;
