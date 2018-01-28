import React from 'react';

import { Link } from 'react-router-dom'

import './Component.css';

const Header = () => (
  <div className="header">
    <span className="logo">
      <Link to="/">Read.ly</Link>
    </span>
  </div>
);

export default Header;
