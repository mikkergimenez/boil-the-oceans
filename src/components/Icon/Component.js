import React, { Component } from 'react';
import './Component.css';

const IconComponent = ({ number, icon }) => (
  <span className="Icon">
    {number} <img className="icon-img" src={ "/images/" + icon} alt={icon} />
  </span>
);

export default IconComponent;
