import React, { Component } from 'react';
import GroupContainer from './GroupContainer';

import Icon from '../Icon';

import './Component.css';

const BuildingList = ({ energy, people, inspiration, buildings, groups }) => (
  <div className="right-bar">
    <div className="right-bar-contents">
      <div className="text-muted larger">God whispers into my ear</div>
      <br />
      <br />
      <div className="resources">e:{energy} p:{people} i:{inspiration}</div>
      <br /><br />
      <div className="row">
        {Object.keys(groups).map(function(i) {
          return (<GroupContainer key={i} group={groups[i]} buildings={buildings} />);
        })}
      </div>
    </div>
  </div>
);

export default BuildingList;
