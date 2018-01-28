import React from 'react';

import './GroupComponent.css'

import UnlockedBuilding from './UnlockedBuilding';

const GroupComponent = ({ name, buildings }) => (
  <p>
    {Object.keys(buildings).map(function(i) {
      return (<UnlockedBuilding key={buildings[i].id} building={buildings[i]} />);
    })}
  </p>
);

export default GroupComponent
