import { connect } from 'react-redux'
import PeopleComponent from './Component';

const mapStateToProps = state => {
  return {
    people: state.resources.purchasedReligion["people"].count
  }
}

const mapDispatchToProps = dispatch => {
  return { }
}

const PeopleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleComponent)

export default PeopleContainer
