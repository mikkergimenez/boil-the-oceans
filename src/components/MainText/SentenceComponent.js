import React, { Component } from 'react';

const SentenceComponent = ({ amare, myyour, iwe, beforeText, link, afterText, purchaseBuilding }) => (
  <span>
    {beforeText} <a onClick={() => purchaseBuilding()}>{link}</a> {afterText}&nbsp;
  </span>
)

export default SentenceComponent;
