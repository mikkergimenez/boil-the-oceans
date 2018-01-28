import React, { Component } from 'react';
import './Component.css';

const Button = ({ multiplier, isActive, setMultiplier }) => (
  <span>
    <button onClick={setMultiplier} className={ isActive ? 'active': ''}>{multiplier}</button>
  </span>
);

export default Button
