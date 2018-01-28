import { connect } from 'react-redux'

import App from './Component.js'

import React from 'react';

const mapStateToProps = state => {
  return {
    started: state.game.started,
    showTechnologyStory: state.game.technologyStory.shown
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
