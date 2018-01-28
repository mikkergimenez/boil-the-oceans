import { connect } from 'react-redux'
import UTComponent from './Component';

function getCostOfThing(buildingName, state) {
  return Math.floor(state.resources.buildings[buildingName].baseCost * Math.pow(state.resources.buildings[buildingName].multiplier, state.resources.purchasedBuildings[buildingName].count));
}

const mapStateToProps = (state, props) => {
  return {
    all_resources: state.resources,
    all_all: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const UTContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UTComponent)

export default UTContainer
