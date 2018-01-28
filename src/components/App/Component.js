import React from 'react';
import './Component.css';

import PropTypes from 'prop-types';

import TechnologyStory from '../Technology/Story'
import BuildingList from '../BuildingList';
import Game from '../Game';
import InspirationList from '../InspirationList';
import Quote from '../Quote';


const App = ({ started, showTechnologyStory }) => {
  if (started) {
    if (showTechnologyStory) {
      return (<div className="App">
        <TechnologyStory />
      </div>
    );
    } else {
      return (
        <div className="App">
          <InspirationList />
          <Game />
          <BuildingList />
        </div>
      );
    }
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
