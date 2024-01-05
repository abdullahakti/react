import React from 'react';
import './Navbar.css'; // CSS dosyanızın adını ve uzantısını ayarlayın

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-container">
        <div className="logo">
          <img src="https://abdullahakti.com/wp-content/uploads/elementor/thumbs/abdullah-akti-yeni-logo-1-p745sk5hl8eetul851u2jchjza6ol6uo4hraad9z44.png" alt="Logo" />
        </div>
        <div className="links">
          <a href="https://abdullahakti.com/iletisim/">Hakkımda</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
