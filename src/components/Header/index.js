import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
