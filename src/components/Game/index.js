import React, { Component } from 'react';
import './Game.css';

import Icon from '../Icon';

// import AmountOfWood from './lines/AmountOfWood';
// import AxeSharpness from './lines/AxeSharpness';
// import ChopWood from './lines/ChopWood';

import Date from '../Date';
import NumberPeople from '../NumberPeople';
import InspireOthers from '../InspireOthers';

import MainText from '../MainText';
import UnlockedTechnology from '../UnlockedTechnology';

import UnlockBuilding from '../Buildings/Unlock';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   numberPeople: 1,
    //   axeSharpness: 0,
    //   woodCount: 0,
      flashMessage: "",
    //   inspiration: 0,
    };

    // this.inspireOthers      = this.inspireOthers.bind(this);
    this.clearFlashMessage  = this.clearFlashMessage.bind(this);
    // this.sharpenAxe         = this.sharpenAxe.bind(this);
    // this.woodCost           = this.woodCost.bind(this);
  }

  clearFlashMessage() {
    this.setState({
      flashMessage: ""
    });
  }

  resourceCost(resource) {
    return Math.floor(100 * Math.pow(1.15, resource));
  }

  render() {

    return (
      <div className="Game container">
        <div className="Game blog-header">
          <h1>Boil the Oceans</h1>
          <Date />
        </div>
        <p><NumberPeople/></p>
        <MainText />
        <InspireOthers />&nbsp;
        <UnlockedTechnology />&nbsp;
        <UnlockBuilding />
        <br /><br /><br />
        <div className="flash">{this.state.flashMessage}</div>
      </div>
    );
  }
}

export default Game;

//<!--<AxeSharpness sharpenAxe={this.sharpenAxe} woodCount={this.state.woodCount} numberPeople={this.state.numberPeople} />&nbsp;-->
