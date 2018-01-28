import React from 'react';
import PropTypes from 'prop-types';

import './Component.css';

const DateComponent = ({ date }) => (
  <div className="date">{date}</div>
);

DateComponent.propTypes = {
  date: PropTypes.string.isRequired,
}

export default DateComponent;
