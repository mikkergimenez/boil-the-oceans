import reducer from './resources'

import initialState from '../state/initial';

import buildings from '../state/buildings';
import technologies from '../state/technologies';

var state = {}

describe('resources reducer, technology tests', () => {
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

  it('should not UNLOCK_TECHNOLOGY if there is not enough money', () => {
    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'closeToGod'
    })
    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(0);

    expect(newState.purchasedTechnologies).toEqual([])
  })

  it('should UNLOCK_TECHNOLOGY if there is enough money', () => {
    state.inspiration = 1000;

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'closeToGod'
    })

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(500);

    expect(newState.purchasedTechnologies).toEqual(['closeToGod'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource sawTeam if applicable', () => {
    state.inspiration = 1000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'sawTeam'
    })

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(900);

    expect(newState.purchasedTechnologies).toEqual(['closeToGod', 'sawTeam'])
    expect(newState.unlockedBuildings).toEqual(['axeSharpness', 'sawTeam'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource sawMill if applicable', () => {
    state.inspiration = 1000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'sawMill'
    })

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(500);

    expect(newState.purchasedTechnologies).toEqual(['closeToGod', 'sawTeam', 'sawMill'])
    expect(newState.unlockedBuildings).toEqual(['axeSharpness', 'sawTeam', 'sawMill'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource sawMill if applicable', () => {
    state.inspiration = 5000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'coal'
    })

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(2000);

    expect(newState.purchasedTechnologies).toEqual(['closeToGod', 'sawTeam', 'sawMill', 'coal'])
    expect(newState.unlockedBuildings).toEqual(['axeSharpness', 'sawTeam', 'sawMill', 'bellPit'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource sawMill if applicable', () => {
    state.inspiration = 20000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'coalMine'
    })

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(10000);

    expect(newState.purchasedTechnologies).toEqual(['closeToGod', 'sawTeam', 'sawMill', 'coal', 'coalMine'])
    expect(newState.unlockedBuildings).toEqual(['axeSharpness', 'sawTeam', 'sawMill', 'bellPit', 'coalMine'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource blackGold if applicable', () => {
    state.inspiration = 100000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'blackGold'
    })

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(60000);

    expect(newState.purchasedTechnologies).toEqual(['closeToGod', 'sawTeam', 'sawMill', 'coal', 'coalMine', 'blackGold'])
    expect(newState.unlockedBuildings).toEqual(['axeSharpness', 'sawTeam', 'sawMill', 'bellPit', 'coalMine', 'oilWell'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource oilField if applicable', () => {
    state.inspiration = 200000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'oilField'
    })

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(0);

    expect(newState.purchasedTechnologies).toEqual(['closeToGod', 'sawTeam', 'sawMill', 'coal', 'coalMine', 'blackGold', 'oilField'])
    expect(newState.unlockedBuildings).toEqual(['axeSharpness', 'sawTeam', 'sawMill', 'bellPit', 'coalMine', 'oilWell', 'oilField'])
  })


})
