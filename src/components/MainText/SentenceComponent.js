import React from 'react';

import './SentenceComponent.css'

const SentenceComponent = ({ amare, myyour, iwe, beforeText, link, afterText, purchaseBuilding }) => (
  <span>
    {beforeText} <button className="paragraph-button" onClick={() => purchaseBuilding()}>{link}</button> {afterText}&nbsp;
  </span>
)

export default SentenceComponent;
