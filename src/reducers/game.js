const game = (state = [], action, entireState = []) => {
  switch (action.type) {
    case 'START_GAME':
      var temp_state = state;
      temp_state.started = true;
      return Object.assign({}, temp_state);
    default:
      return state
  }
}

export default game
