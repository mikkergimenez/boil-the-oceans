// If I had a <a onClick={sharpenAxe}>sharper axe</a>, I could chop faster.</span>&nbsp
import React from 'react';

import GroupContainer from './GroupContainer'

const UBsComponent = ({ groups, unlockedBuildings }) => (
  <span>
    {Object.keys(groups).map(function(i) {
      return (<GroupContainer key={i} group={groups[i]} buildings={unlockedBuildings} />)
    })}
  </span>
);

export default UBsComponent;
