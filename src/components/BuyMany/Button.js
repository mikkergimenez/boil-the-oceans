import { connect } from 'react-redux'

import { setMultiplier } from '../../actions/game';

import ButtonComponent from './ButtonComponent.js'

import React from 'react';

function getMultiplier(multiplier) {
  if (multiplier) {
    return multiplier
  }
  return "1x"
}

function isActive(multiplier, buttonMult) {
  var realMultiplier = getMultiplier(multiplier);
  return realMultiplier == buttonMult;
}

const mapStateToProps = (state, props) => {
  return {
    multiplier: props.multiplier,
    isActive: isActive(state.game.multiplier, props.multiplier)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    setMultiplier: id => {
      dispatch(setMultiplier(props.multiplier))
    }
  }
}

const BuyManyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonComponent)

export default BuyManyContainer
