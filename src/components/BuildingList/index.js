import { connect } from 'react-redux'

import { truncatedNumber } from '../../helpers/number';
import BuildingComponent from './Component';

function array_contains(arr, val) {
  for (var item in arr) {
    if (arr[item] === val) {
      return true;
    }
  }
  return false;
}

function listOfGroups(buildings) {
  var groups = []
  for (var i in buildings) {
    if (!array_contains(groups, buildings[i].industry)) {
      groups.push(buildings[i].industry);
    }
  }
  return groups;
}

function unlockedBuildings(resources) {
  var buildingsToShow = [];
  for (var buildingID in resources.buildings) {
    if (array_contains(resources.unlockedBuildings, buildingID)) {
      buildingsToShow.push(resources.buildings[buildingID]);
    }
  }
  return buildingsToShow;
}

function closerToGodUnlocked(state) {
  for (var i in state.resources.purchasedTechnologies) {
    if (state.resources.purchasedTechnologies[i].name === "closeToGod") {
      return true
    }
  }
  return false;
}


const mapStateToProps = (state, props) => {
  return {
    energy: truncatedNumber(state.resources.energy),
    energyName: "Wood",
    energyPerSecond: truncatedNumber(state.resources.energyPerSecond),
    inspiration: state.resources.inspiration.toFixed(0),
    buildings: unlockedBuildings(state.resources),
    groups: listOfGroups(unlockedBuildings(state.resources)),
    show: closerToGodUnlocked(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const BuildingList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingComponent)

export default BuildingList
