import React, { Component } from 'react';

class AmountOfWood extends Component {
  render() {

    var amountOfWoodSentence = <span>Thus far, I have chopped {Math.floor(this.props.woodCount)} cords of Wood.  I have a long way to go.</span>;
    if (this.props.numberPeople > 1) {
      amountOfWoodSentence = (<span>Thus far, We have chopped {Math.floor(this.props.woodCount)} cords of wood.  We have a long way to go.</span>);
    }

    return (
      <span className="AmountOfWood">
        {amountOfWoodSentence}
      </span>
    );
  }
}

export default AmountOfWood;
