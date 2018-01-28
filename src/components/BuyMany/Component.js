import React, { Component } from 'react';
import './Component.css';

import Button from './Button';

const BuyManyComponent = ({ multiplier }) => (
  <span className="btn-group menu-btn-group">
    <Button multiplier="1x" />
    <Button multiplier="10x" />
    <Button multiplier="100x" />
    <Button multiplier="max" />
  </span>
);

export default BuyManyComponent
