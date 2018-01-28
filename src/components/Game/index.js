import { connect } from 'react-redux'

import Game from './Component.js'

import React from 'react';

function getFlashMessage(flashMessage) {
  console.log(flashMessage);
  if (flashMessage) {
    return (<div>
      <br />
      <span key="111" className="flash">{flashMessage}</span>
    </div>)
  } else {
    return (<div></div>)
  }

}

const mapStateToProps = state => {
  return {
    flashMessage: getFlashMessage(state.game.flashMessage)
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer
