import React from 'react'
import { render } from 'react-dom'
import { compose, applyMiddleware, createStore } from 'redux'
import boilTheOcean from './reducers'
import Root from './Root'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import initialState from './state/initial';
import buildings    from './state/buildings';
import faith        from './state/faith';
import technologies from './state/technologies';

import { loadState, saveState } from './localStorage.js';

import { tick } from './actions/game';

import { removeDuplicatesUsingFilter, removeHashDuplicatesUsingFilter } from './state/helpers';


const persistedState = loadState();

var startingState = persistedState;
if (!persistedState) {
  startingState = initialState;
}

startingState.resources.buildings    = buildings;
startingState.resources.faith        = faith;
startingState.resources.technologies = technologies;

/*
 * These three functions should not do anything, but may occassionally need to fix messed up states.
 */
if (startingState.resources.purchasedBuildings === [] || startingState.resources.purchasedBuildings === {}) {
  startingState.resources.purchasedBuildings = initialState.purchasedBuildings;
}

if (!startingState.resources.unlockedReligion || startingState.resources.unlockedReligion === [] || startingState.resources.unlockedReligion === {}) {
  startingState.resources.unlockedReligion = initialState.resources.unlockedReligion;
}

if (!startingState.resources.purchasedReligion || startingState.resources.purchasedReligion === [] || startingState.resources.purchasedReligion === {} || startingState.resources.purchasedReligion.length === 0) {
  startingState.resources.purchasedReligion = initialState.resources.purchasedReligion;
}

if (startingState.resources.unlockedBuildings) {
  startingState.resources.unlockedBuildings = removeDuplicatesUsingFilter(startingState.resources.unlockedBuildings);
}

if (startingState.resources.purchasedTechnologies) {
  startingState.resources.purchasedTechnologies = removeHashDuplicatesUsingFilter(startingState.resources.purchasedTechnologies);
}

if (startingState.game.technologyStory === undefined) {
  startingState.game.technologyStory = initialState.game.technologyStory;
}

// /*
//  * Delete the following
//  */
// startingState.resources.purchasedReligion = {
//   "people": {
//     count: 1
//   },
//   "evangelist": {
//     count: 1
//   },
//   "bishop": {
//     count: 1
//   }
// };
//
// if (startingState.resources.people > startingState.resources.purchasedReligion["people"].count) {
//   startingState.resources.purchasedReligion["people"].count = startingState.resources.people;
// }
//
// startingState.resources.unlockedReligion = ["people", "evangelist", "bishop"];


let store = createStore(boilTheOcean, startingState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
saveState(store.getState());

store.subscribe(() => {
  saveState(store.getState());
})

function doTick() {
  store.dispatch(tick())
}

setInterval(doTick, 1000);

render(
  <Root store={store} />,
  document.getElementById('root')
)
registerServiceWorker();
