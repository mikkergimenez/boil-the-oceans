import React, { Component } from 'react';
import './Unlock.css';

import List from './List.js';

class UnlockBuilding extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: List
    }
  }

  unlockable() {
    return (this.props[this.state.list[0].prereq.resource] > this.state.list[0].prereq.amount);
  }

  getUnlockable() {
    if (this.unlockable()) {
      return this.state.list[0];
    } else {
      return []
    }
  }

  getQuote() {
    if (!this.unlockable()) {
      return ""
    }
    var arr = this.getUnlockable()["quote"].split("<a>");
    return (
      <span>
        {arr[0]}<a onClick={this.unlockBuilding()}>{arr[1]}</a>{arr[2]}
      </span>
    );
  }

  getAuthor() {
    if (!this.unlockable()) {
      return ""
    }

    return this.getUnlockable()["person"]
  }

  unlockBuilding() {

  }

  unlockQuote() {
    if (!this.unlockable()) {
      return ""
    }

    return (<span>{this.getAuthor()} approaches you in camp.  "{this.getQuote()}"</span>);
  }

  render() {
    return (
      <div className="UnlockBuilding-container">
        {this.unlockQuote()}
      </div>
    );
  }
}

export default UnlockBuilding;
