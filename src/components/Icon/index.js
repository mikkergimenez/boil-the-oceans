import { connect } from 'react-redux'
import IconComponent from './Component';

import { inspireOthers } from '../../actions/resources'

function getCostOfThing(buildingName, state) {
  return Math.floor(state.resources.buildings[buildingName].baseCost * Math.pow(state.resources.buildings[buildingName].multiplier, state.resources.purchasedBuildings[buildingName].count));
}

const mapStateToProps = (state, props) => {
  return {
    icon: props.icon,
    number: getCostOfThing(props.building, state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inspireOthers: id => {
      dispatch(inspireOthers())
    }
  }
}

const IconContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IconComponent)

export default IconContainer
