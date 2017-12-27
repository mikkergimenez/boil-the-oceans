import * as actions from './building'
// import * as types from '../../constants/ActionTypes'

describe('actions', () => {
  it('should create an action to increase the number of buildings', () => {
    const building = "closeToGod"
    const expectedAction = {
      type: "INCREASE_BUILDING",
      building
    }
    expect(actions.increaseBuilding(building)).toEqual(expectedAction)
  })
})
