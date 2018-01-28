import { connect } from 'react-redux'
import InspirationListComponent from './Component';

import { truncatedNumber } from '../../helpers/number';

function array_contains(arr, val) {
  for (var item in arr) {
    if (arr[item] === val) {
      return true;
    }
  }
  return false;
}

function unlockedReligion(resources) {
  var religiousItemsToShow = [];
  for (var buildingID in resources.faith) {
    if (array_contains(resources.unlockedReligion, buildingID)) {
      religiousItemsToShow.push(resources.faith[buildingID]);
    }
  }
  return religiousItemsToShow;
}

function withGodUnlocked(state) {
  for (var i in state.resources.purchasedTechnologies) {
    if (state.resources.purchasedTechnologies[i].name === "withGod") {
      return true
    }
  }
  return false;
}

function getInspiration(inspiration) {
  if (inspiration > 1000000) {
    return inspiration.toExponential(3);
  }
  return inspiration.toFixed(0);

}

const mapStateToProps = (state, props) => {
  return {
    inspiration: truncatedNumber(getInspiration(state.resources.inspiration)),
    inspirationName: "Faith",
    inspirationPerSecond: truncatedNumber(state.resources.inspirationPerSecond.toFixed(0)),
    religiousItems: unlockedReligion(state.resources),
    show: withGodUnlocked(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const InspirationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(InspirationListComponent)

export default InspirationList
