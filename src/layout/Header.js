// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFileAlt, FaCog, FaPenNib, FaHandshake, FaPlusCircle, FaUserCircle } from 'react-icons/fa';
import './Header.css';
import profile from '../img/profil.jpg';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav">
        <ul>

          <li>
            <Link to="/">
              <FaHome /> Bosh sahifa
            </Link>
          </li>

          <li>
            <Link to="/documents">
              <FaFileAlt /> Gonorar hujjatlar
            </Link>
          </li>

          <li>
            <Link to="/services">
              <FaCog /> Sozlamalar
            </Link>
          </li>

          <li>
            <Link to="/blog">
              <FaPenNib /> Imolash
            </Link>
          </li>

          <li className="dropdown">
            <Link to="/agreements">
              <FaHandshake /> Kelishish
            </Link>
            <div className="dropdown-content">
              <Link className='dropdown-text' to="/agreements/option1">Option 1</Link>
              <Link className='dropdown-text' to="/agreements/option2">Option 2</Link>
            </div>
          </li>
        </ul>
      </nav>
      <Link to="/create-document" className="create-button">
        <FaPlusCircle /> Gonorar hujjat yaratish
      </Link>
      <div className="profile">
       
        <img src={profile} alt="Profile" className="profile-image" />
        <span>Sodiqov S</span>
      </div>

    </header>
  );
};

export default Header;
