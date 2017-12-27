import { connect } from 'react-redux'
import React from 'react';
import PropTypes from 'prop-types';

import AgeText from './Age';
import UnlockedBuildings from './UnlockedBuildings';

let ChopWood = ({ iwe, myour, amare, sharpenAxe }) => (
  <span>
    <span>If {iwe} {amare} to do god's bidding, {iwe} must build a great fire.</span>
    <span><AgeText /></span>
    <UnlockedBuildings />
  </span>
)

ChopWood.propTypes = {
  iwe: PropTypes.string.isRequired,
  amare: PropTypes.string.isRequired,
  wood: PropTypes.number.isRequired,
  sharpenAxe: PropTypes.func.isRequired,
}

ChopWood = connect()(ChopWood)

export default ChopWood;
