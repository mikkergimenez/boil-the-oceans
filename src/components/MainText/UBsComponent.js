// If I had a <a onClick={sharpenAxe}>sharper axe</a>, I could chop faster.</span>&nbsp
import React, { Component } from 'react';

import GroupContainer from './GroupContainer'

const UBsComponent = ({ groups, unlockedBuildings }) => (
  <div>
    {Object.keys(groups).map(function(i) {
      return (<GroupContainer key={i} group={groups[i]} buildings={unlockedBuildings} />)
    })}
  </div>
);


export default UBsComponent;
