import React from 'react';
import ListItemContainer from './Item';

import './Component.css';

const InspirationListComponent = ({ inspiration, inspirationPerSecond, religiousItems, show }) => {
  if (!show) {
    return (<div className="left-bar"></div>)
  }

  var inspirationName = "Faith"
  return (
  <span className="right-bar">
    <div className="right-bar-contents">
      <div className="text-muted larger">god whispers into my ear</div>
      <br />
      <div className="inspiration">{inspiration} {inspirationName}</div>
      <div className="inspiration-per-second">{inspirationPerSecond}/sec</div>
      <br />
      <div className="row">
        {Object.keys(religiousItems).map(function(i) {
          return (<ListItemContainer key={i} religiousItem={religiousItems[i]} />);
        })}
      </div>
    </div>
  </span>);
};

export default InspirationListComponent;
