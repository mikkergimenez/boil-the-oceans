import { connect } from 'react-redux'
import DateComponent from './Component';

import dateFormat from 'dateformat';

const getEnergy = (resources) => {
  return Math.floor(resources.energy)
}

const mapStateToProps = state => {
  return {
    date: (dateFormat(state.date.current, "dddd mmmm dd H:00, yyyy") + " AD")
  }
}

const mapDispatchToProps = dispatch => {
  return { }
}

const DateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DateComponent)

export default DateContainer
