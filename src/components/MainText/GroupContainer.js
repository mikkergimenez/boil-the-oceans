import { connect } from 'react-redux'
import GroupComponent from './GroupComponent';

import { groupBuildings } from '../../helpers/building'

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
