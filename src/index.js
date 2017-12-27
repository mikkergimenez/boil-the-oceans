import React from 'react'
import { render } from 'react-dom'
import { compose, applyMiddleware, createStore } from 'redux'
import boilTheOcean from './reducers'
import Root from './Root'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import initialState from './state/initial';
import buildings from './state/buildings';
import technologies from './state/technologies';

import { loadState, saveState } from './localStorage.js';

import { tick } from './actions/game';

const persistedState = loadState();

var startingState = persistedState;
if (!persistedState) {
  startingState = initialState;
}

startingState.resources.buildings    = buildings;
startingState.resources.technologies = technologies;

if (startingState.resources.purchasedBuildings == [] || startingState.resources.purchasedBuildings == {}) {
  startingState.resources.purchasedBuildings = initialState.purchasedBuildings;
}

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
