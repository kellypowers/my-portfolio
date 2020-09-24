import React from "react";
import logo from "/Users/kellypowers/coding/my-portfolio/src/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

class NavBar extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render()
    {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                <img
                    src={logo}
                    className="nav-logo"
                    alt="Logo"
                    onClick={this.scrollToTop}
                />
                {/* <ul className="nav-items"> */}
            {/* <li className="nav-item"> */}
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            {/* </li> */}
            {/* <li className="nav-item"> */}
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                My Projects
              </Link>
            {/* </li> */}
            {/* <li className="nav-item"> */}
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Info
              </Link>
                </div>
            </nav>
        )
    }
}

export default NavBar;