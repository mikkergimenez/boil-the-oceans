import { connect } from 'react-redux';
import { increaseResource } from '../../actions';
import { increaseBuilding } from '../../actions/building';
import ChopWood from './ChopWood';

const getEnergy = (resources) => {
  return Math.floor(resources.energy)
}

const getIWE = (people) => {
  if (people > 1) {
    return 'we'
  } else {
    return 'I'
  }
}

const getMyOur = (people) => {
  if (people > 1) {
    return 'our'
  } else {
    return 'my'
  }
}

const getAmAre = (people) => {
  if (people > 1) {
    return 'are'
  } else {
    return 'am'
  }
}

const mapStateToProps = state => {
  return {
    amare: getAmAre(state.resources.people),
    myour: getMyOur(state.resources.people),
    iwe: getIWE(state.resources.people),
    wood: getEnergy(state.resources)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sharpenAxe: id => {
      dispatch(increaseBuilding("axeSharpness"))
    }
  }
}

const MainText = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChopWood)

export default MainText
