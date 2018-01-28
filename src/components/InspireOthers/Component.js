import React, { Component } from 'react';

import './Component.css';

const InspireOthers = ({ numberPeople, inspireOthers }) => {
  var inspireOthersSentence = <span>Perhaps my work will <button className="paragraph-button" onClick={inspireOthers}>inspire</button> more to help. </span>
  if (numberPeople > 1) {
    inspireOthersSentence = (<span>Perhaps our work will <button className="paragraph-button" onClick={inspireOthers}>inspire</button> more to help. </span> )
  }

  return (
    <span className="InspireOthers">
      {inspireOthersSentence}
    </span>
  );
}

export default InspireOthers;
