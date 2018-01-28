import { connect } from 'react-redux'
import DateComponent from './Component';

import dateFormat from 'dateformat';

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
