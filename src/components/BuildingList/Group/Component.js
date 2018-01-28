import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import ListItemContainer from '../Item';

const GroupComponent = ({ name, buildings }) => (
  <div className="row">
    <h1><Link to={"/" + name}>{name}</Link></h1>
    {Object.keys(buildings).map(function(i) {
      return (<ListItemContainer key={buildings[i].id} building={buildings[i]} />);
    })}
  </div>
);

export default GroupComponent;
