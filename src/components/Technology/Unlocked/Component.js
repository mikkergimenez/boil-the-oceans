import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group'

import './Component.css';

const Technology = ({ author, unlockedTechnology, unlockedTechnologyName, onClick }) => (
  <div className="Technology block-quote">
    <hr />
      <CSSTransition
        classNames="buildingsList"
        timeout={{ enter: 500, leave: 500}}>
        <div>
          <br />
          <div><i>{unlockedTechnology.text.beforeLink} <a onClick={() => onClick(unlockedTechnologyName)}>{unlockedTechnology.text.link}</a> {unlockedTechnology.text.afterLink}</i></div>
          <br /><div className="author">{unlockedTechnology.text.author}</div>
        </div>
      </CSSTransition>
    <br />
  </div>
);

Technology.propTypes = {
  unlockedTechnologyName: PropTypes.string.isRequired,
  unlockedTechnology: PropTypes.shape({
    text: PropTypes.shape({
      beforeLink: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      afterLink: PropTypes.string.isRequired,
    })
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Technology;
