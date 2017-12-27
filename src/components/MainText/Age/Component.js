import { connect } from 'react-redux'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

let AgeText = ({ age, iwe, energy, chopWood }) => {
  if (age == "wood") {
    return (
      <span>
        <span>The only way {iwe} know how, is to <a onClick={chopWood}> chop wood</a>. </span>
        <span>I have traded my last 10 pounds for an axe. </span>
        <span>So far, I have chopped {energy } cords of Wood.  {iwe.charAt(0).toUpperCase() + iwe.slice(1)} have a long way to go.</span>
      </span>
    );
  } else if (age == "coal") {
    return (
      <span>
        <span>We have enough coal and wood to burn a fire for {energy } more hours.  {iwe.charAt(0).toUpperCase() + iwe.slice(1)} have a long way to go.</span>
      </span>
    );
  }
}

AgeText.propTypes = {
  iwe: PropTypes.string.isRequired,
  energy: PropTypes.number.isRequired,
  chopWood: PropTypes.func.isRequired,
}

AgeText = connect()(AgeText)

export default AgeText;
