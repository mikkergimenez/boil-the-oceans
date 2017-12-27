import reducer from './resources'

import initialState from '../state/initial';

import buildings from '../state/buildings';
import technologies from '../state/technologies';

var state = {}

describe('purchasedTechnologies reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  })

  beforeEach(() => {
    state = {
      energy: 0,
      people: 1,
      inspiration: 0
    }

    state.purchasedBuildings    = initialState.resources.purchasedBuildings;
    state.purchasedTechnologies = initialState.resources.purchasedTechnologies;
    state.unlockedBuildings     = initialState.resources.unlockedBuildings;
    state.buildings             = buildings;
    state.technologies          = technologies;
  });

  afterEach(() => {
    var state_keys = Object.keys(state)
    expect(state_keys).toEqual(['energy', 'people', 'inspiration', 'purchasedBuildings', 'purchasedTechnologies', 'unlockedBuildings', 'buildings', 'technologies'])
  })

  it('should increase energy and inspiration by the same amount.', () => {
    state.energy = 9
    state.inspiration = 4
    var newState = reducer(state, {
      type: "INCREASE_RESOURCE",
      resource: 'energy'
    })

    expect(newState.energy).toEqual(10);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(5);

    expect(state.purchasedBuildings.axeSharpness.count).toEqual(1)
  })

  it('should not INCREASE_BUILDING if there is not enough money', () => {
    var newState = reducer(state, {
      type: "INCREASE_BUILDING",
      building: 'axeSharpness'
    })

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(0);

    expect(state.purchasedBuildings.axeSharpness.count).toEqual(1)
  })

  it('should INCREASE_BUILDING if there is enough energy', () => {
    state.energy = 1000;

    var newState = reducer(state, {
      type: "INCREASE_BUILDING",
      building: 'axeSharpness'
    })

    expect(newState.energy).toEqual(983);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(0);

    expect(state.purchasedBuildings.axeSharpness.count).toEqual(2)
  })

})
