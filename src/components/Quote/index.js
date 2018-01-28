import { connect } from 'react-redux'
import { startGame } from '../../actions/game'
import Quote from './Component';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: id => {
      dispatch(startGame())
    }
  }
}

const QuoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quote)

export default QuoteContainer
