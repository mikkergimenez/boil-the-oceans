import { connect } from 'react-redux';
import { increaseBuilding } from '../../actions/building';
import ChopWood from './ChopWood';
import { getIWE, getMyOur, getAmAre } from '../../helpers/text';

const getEnergy = (resources) => {
  return Math.floor(resources.energy)
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
