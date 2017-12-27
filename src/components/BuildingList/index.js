import { connect } from 'react-redux'
import BuildingComponent from './Component';

function array_contains(arr, val) {
  for (var item in arr) {
    if (arr[item] == val) {
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

const mapStateToProps = (state, props) => {
  return {
    energy: state.resources.energy.toFixed(0),
    people: state.resources.people.toFixed(0),
    inspiration: state.resources.inspiration.toFixed(0),
    buildings: unlockedBuildings(state.resources),
    groups: listOfGroups(unlockedBuildings(state.resources)),
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
