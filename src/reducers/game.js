function getInitialState() {
  return {
    started: false,
    companyFounding: "",
  }
}

const game = (state = getInitialState(), action, entireState = []) => {
  switch (action.type) {
    case 'TICK':
      if (state.flashMessageSeconds > 5) {
        state.flashMessage = "";
      }
      if (state.flashMessageSeconds == undefined) {
        state.flashMessageSeconds = 0;
      }

      state.flashMessageSeconds = state.flashMessageSeconds + 1;

      return Object.assign({}, state);

    case 'SET_MULTIPLIER':
      console.log(action);
      state.multiplier = action.multiplier;
      return Object.assign({}, state);

    case 'START_GAME':
      state.started = true;
      return Object.assign({}, state);

    case 'INSPIRE_OTHERS':

      var peopleCost = Math.floor(100 * Math.pow(1.15, entireState.resources.people));
      if (entireState.resources.inspiration < peopleCost) {
        state.flashMessage = "Your work has not sufficiently inspired people yet, continue your efforts, and they will come."
        state.flashMessageSeconds = 0;
      }

      return Object.assign({}, state)
    case 'OPEN_TECHNOLOGY_STORY':
      state.technologyStory.shown = true;
      state.technologyStory.id    = action.technologyID;
      return Object.assign({}, state);

    case 'UNLOCK_TECHNOLOGY':
      state.technologyStory.shown = false;
      state.technologyStory.id    = "";
      return Object.assign({}, state);

    default:
      if (state.companyFounding == "" || (state.companyFounding === undefined)) {
        if (entireState.date != undefined && entireState.date.current != undefined) {
          state.companyFounding = entireState.date.current
          return Object.assign({}, state)
        }
      }
      return state
  }
}

export default game
