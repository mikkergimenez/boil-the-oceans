import { connect } from 'react-redux'

import BuyMany from './Component.js'

import React from 'react';

function getMultiplier(multiplier) {
  if (multiplier) {
    return multiplier
  }
  return "1x"
}

const mapStateToProps = state => {
  return {
    multiplier: getMultiplier(state.game.multiplier)
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const BuyManyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyMany)

export default BuyManyContainer
