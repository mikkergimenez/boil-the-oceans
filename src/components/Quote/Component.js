import React from 'react';
import './Quote.css';

import PropTypes from 'prop-types';

let Quote = ({ startGame }) => (
  <div className="Quote-container fadeIn">
      <div className="Quote-background"></div>
      <div className="Quote-intro">
        <div>He makes <a onClick={startGame}>the depths boil like a pot;</a> He makes the sea like a jar of ointment.</div>
        <br />
        <div className="pull-right author">Job 41:31</div>
      </div>
  </div>
);

Quote.propTypes = {
  startGame: PropTypes.func.isRequired,
}

export default Quote;
