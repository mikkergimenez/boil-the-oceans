import React from 'react';

import GroupContainer from './Group';

import BuyMany from '../BuyMany';

import './Component.css';

const BuildingList = ({ energy, energyPerSecond, inspiration, buildings, groups, show }) => {
  if (!show) {
    return (<div></div>)
  }

  var energyName = "Wood"
  return (
  <span className="right-bar">
    <BuyMany />
    <div className="right-bar-contents">
      <div className="text-muted larger">god whispers into my ear</div>
      <br />
      <div className="energy">{energy} {energyName}</div>
      <div className="energy-per-second">{energyPerSecond}/sec</div>
      <div className="row">
        {Object.keys(groups).map(function(i) {
          return (<GroupContainer key={i} group={groups[i]} buildings={buildings} />);
        })}
      </div>
    </div>
  </span>);
};

export default BuildingList;
