import reducer from './resources'

import initialState from '../state/initial';

import buildings from '../state/buildings';
import technologies from '../state/technologies';

var state     = {}
var entireState = {
  date: {
    current: new Date('1204-07-08T06:00:00Z')
  }
}

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
    }, entireState)
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
    }, entireState)

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(500);

    expect(newState.purchasedTechnologies).toEqual([
      { name: 'closeToGod', date: new Date('1204-07-08T06:00:00Z') },
    ])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource sawTeam if applicable', () => {
    state.inspiration = 1000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'sawTeam'
    }, entireState)

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(900);

    expect(newState.purchasedTechnologies).toEqual([
      { name: 'closeToGod', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawTeam',    date: new Date('1204-07-08T06:00:00Z') },
    ])

    expect(newState.unlockedBuildings).toEqual(['sawTeam'])
  })

  it('UNLOCK_TECHNOLOGY should not unlock duplicate resources', () => {
    state.inspiration = 1000

    // Unlocking same as above
    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'sawTeam'
    }, entireState)

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(1000);

    expect(newState.purchasedTechnologies).toEqual([
      { name: 'closeToGod', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawTeam',    date: new Date('1204-07-08T06:00:00Z') },
    ])

    expect(newState.unlockedBuildings).toEqual(['sawTeam'])
  })


  it('UNLOCK_TECHNOLOGY should unlock resource sawMill if applicable', () => {
    state.inspiration = 1000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'sawMill'
    }, entireState)

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(500);

    expect(newState.purchasedTechnologies).toEqual([
      { name: 'closeToGod', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawTeam',    date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawMill',    date: new Date('1204-07-08T06:00:00Z') },
    ])

    expect(newState.unlockedBuildings).toEqual(['sawTeam', 'sawMill'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource coal if applicable', () => {
    state.inspiration = 5000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'coal'
    }, entireState)

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(2000);

    expect(newState.purchasedTechnologies).toEqual([
      { name: 'closeToGod', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawTeam',    date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawMill',    date: new Date('1204-07-08T06:00:00Z') },
      { name: 'coal',       date: new Date('1204-07-08T06:00:00Z') },
    ])

    expect(newState.unlockedBuildings).toEqual(['sawTeam', 'sawMill', 'bellPit'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource driftMine if applicable', () => {
    state.inspiration = 20000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'driftMine'
    }, entireState)

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(10000);

    expect(newState.purchasedTechnologies).toEqual([
      { name: 'closeToGod', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawTeam',    date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawMill',    date: new Date('1204-07-08T06:00:00Z') },
      { name: 'coal',       date: new Date('1204-07-08T06:00:00Z') },
      { name: 'driftMine',  date: new Date('1204-07-08T06:00:00Z') },
    ])

    expect(newState.unlockedBuildings).toEqual(['sawTeam', 'sawMill', 'bellPit', 'driftMine'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource blackGold if applicable', () => {
    state.inspiration = 100000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'blackGold'
    }, entireState)

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(60000);

    expect(newState.purchasedTechnologies).toEqual([
      { name: 'closeToGod', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawTeam', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawMill', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'coal', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'driftMine', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'blackGold', date: new Date('1204-07-08T06:00:00Z') }
    ])

    expect(newState.unlockedBuildings).toEqual(['sawTeam', 'sawMill', 'bellPit', 'driftMine', 'oilWell'])
  })

  it('UNLOCK_TECHNOLOGY should unlock resource oilPlatform if applicable', () => {
    state.inspiration = 200000

    var newState = reducer(state, {
      type: "UNLOCK_TECHNOLOGY",
      technologyID: 'oilPlatform'
    }, entireState)

    expect(newState.energy).toEqual(0);
    expect(newState.people).toEqual(1);
    expect(newState.inspiration).toEqual(0);

    expect(newState.purchasedTechnologies).toEqual([
      { name: 'closeToGod', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawTeam', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'sawMill', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'coal', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'driftMine', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'blackGold', date: new Date('1204-07-08T06:00:00Z') },
      { name: 'oilPlatform', date: new Date('1204-07-08T06:00:00Z') }
    ])

    expect(newState.unlockedBuildings).toEqual(['sawTeam', 'sawMill', 'bellPit', 'driftMine', 'oilWell', 'oilPlatform'])
  })


})
