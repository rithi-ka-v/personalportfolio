import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="header">

      <nav className="navbar">

        <h2 className="logo">RV</h2>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>

    </header>

  );
}

export default Navbar;