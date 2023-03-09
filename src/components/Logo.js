import React from 'react';
import spacehub from 'space_hub.png';
import Styles from 'styles/Navbar.module.css';

const Logo = () => (
  <div className="d-flex justify-content-start">
    <img src={spacehub} alt="Logo" className={Styles.logo} />
    <h1>Space Traveler&apos;s Hub</h1>
  </div>
);

export default Logo;
