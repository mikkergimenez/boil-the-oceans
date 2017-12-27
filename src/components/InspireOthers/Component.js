import React, { Component } from 'react';

import './Component.css';

const InspireOthers = ({ numberPeople, inspireOthers }) => {
  var inspireOthersSentence = <span>Perhaps my work will <a onClick={inspireOthers}>inspire</a> more to help. </span>
  if (numberPeople > 1) {
    inspireOthersSentence = (<span>Perhaps our work will <a onClick={inspireOthers}>inspire</a> more to help. </span> )
  }

  return (
    <span className="InspireOthers">
      {inspireOthersSentence}
    </span>
  );
}

export default InspireOthers;
