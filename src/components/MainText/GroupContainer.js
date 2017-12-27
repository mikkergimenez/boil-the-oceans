import { connect } from 'react-redux'
import GroupComponent from './GroupComponent';

import { increaseBuilding } from '../../actions/building'

function groupBuildings(buildings, group) {
  var retArr = [];
  for (var i in buildings) {
    if (buildings[i].industry == group) {
      retArr.push(buildings[i]);
    }
  }

  return retArr;
  }

const mapStateToProps = (state, props) => {
  return {
    name: props.group,
    buildings: groupBuildings(props.buildings, props.group)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

const GroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupComponent)

export default GroupContainer
