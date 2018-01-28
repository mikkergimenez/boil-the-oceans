export const startGame = () => {
  return {
    type: 'START_GAME'
  }
}

export const tick = () => {
  return {
    type: 'TICK'
  }
}

export const openTechnologyStory = (technologyID) => {
  return {
    type: 'OPEN_TECHNOLOGY_STORY',
    technologyID
  }
}

export const setMultiplier = (multiplier) => {
  console.log("Set multiplier");
  return {
    type: 'SET_MULTIPLIER',
    multiplier
  }
}
