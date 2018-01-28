import React from 'react';
import PropTypes from 'prop-types';

import './Component.css';

const TechnologyStory = ({ technology, technologyID, onClick }) => (
  <div className="TechnologyStory container">
    <div className="TechnologyStory blog-header">
      <br />
      <p dangerouslySetInnerHTML={{__html: technology.story}}></p>
      <hr />
      <div><a onClick={() => onClick(technologyID)}>{technology.response}</a></div>
      <br />
      </div>
  </div>
);

TechnologyStory.propTypes = {
  technologyID: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default TechnologyStory;
