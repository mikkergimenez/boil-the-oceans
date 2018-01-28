import { connect } from 'react-redux'
import UTComponent from './Component';

const mapStateToProps = (state, props) => {
  return {
    all_resources: state.resources,
    all_all: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const UTContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UTComponent)

export default UTContainer
