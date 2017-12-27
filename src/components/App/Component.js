import React from 'react';
import './Component.css';

import PropTypes from 'prop-types';

import BuildingList from '../BuildingList';
import Game from '../Game';
import Quote from '../Quote';


const App = ({ started }) => {
  if (started) {
    return (
      <div className="App">
        <Game />
        <BuildingList />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Quote />
      </div>
    );
  }
};

App.propTypes = {
  started: PropTypes.bool.isRequired,
}


export default App;
