import { connect } from 'react-redux';
import { increaseResource } from '../../actions';
import { increaseBuilding } from '../../actions/building';
import UBsComponent from './UBsComponent';

function array_contains(arr, val) {
  for (var item in arr) {
    if (arr[item] == val) {
      return true;
    }
  }
  return false;
}

const getEnergy = (resources) => {
  return Math.floor(resources.energy)
}

function unlockedBuildings(buildings, unlockedBuildings) {
  var buildingsToShow = [];
  for (var buildingID in buildings) {
    if (array_contains(unlockedBuildings, buildingID)) {
      buildingsToShow.push(buildings[buildingID]);
    }
  }
  return buildingsToShow;
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

const mapStateToProps = state => {
  return {
    groups: listOfGroups(unlockedBuildings(state.resources.buildings, state.resources.unlockedBuildings)),
    unlockedBuildings: unlockedBuildings(state.resources.buildings, state.resources.unlockedBuildings),
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const UnlockedBuildings = connect(
  mapStateToProps,
  mapDispatchToProps
)(UBsComponent)

export default UnlockedBuildings
