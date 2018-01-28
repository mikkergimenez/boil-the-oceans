import React from 'react';
import PropTypes from 'prop-types';

import './Component.css';

const PeopleComponent = ({ people }) => {
  var numberPeopleSentence = <span>I am but {people}.</span>;
  if (people > 1) {
    numberPeopleSentence = (<span>We are but {people}.</span>);
  }

  if (people > 99) {
    numberPeopleSentence = (<span>We are {people} workers strong.</span>);
  }

  return (
    <span className="NumberPeople">
      {numberPeopleSentence}
    </span>
  )
};

PeopleComponent.propTypes = {
  people: PropTypes.number.isRequired,
}

export default PeopleComponent;
