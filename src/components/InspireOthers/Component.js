import React from 'react';

import './Component.css';

const InspireOthers = ({ numberPeople, myour, inspireOthers }) => {
  var inspireOthersSentence = <span>Perhaps {myour} work will <button className="paragraph-button" onClick={inspireOthers}>inspire</button> more to help. </span>

  return (
    <span className="InspireOthers">
      {inspireOthersSentence}
    </span>
  );
}

export default InspireOthers;
