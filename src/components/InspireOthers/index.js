import { connect } from 'react-redux'
import PeopleComponent from './Component';

import { inspireOthers } from '../../actions/resources'

import { getMyOur } from '../../helpers/text'

const mapStateToProps = state => {
  return {
    numberPeople: state.resources.people,
    myour: getMyOur(state.resources.people)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inspireOthers: id => {
      dispatch(inspireOthers())
    }
  }
}

const PeopleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleComponent)

export default PeopleContainer
