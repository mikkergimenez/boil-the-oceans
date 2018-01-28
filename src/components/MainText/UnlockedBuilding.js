import { connect } from 'react-redux';
import { increaseBuilding } from '../../actions/building';
import SentenceComponent from './SentenceComponent';

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

const mapDispatchToProps = (dispatch, props) => {
  return {
    purchaseBuilding: id => {
      dispatch(increaseBuilding(props.building.id))
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    amare: getAmAre(state.resources.people),
    myour: getMyOur(state.resources.people),
    iwe: getIWE(state.resources.people),
    beforeText: props.building.text.beforeLink,
    link: props.building.text.link,
    afterText: props.building.text.afterLink,
  }
}

const UnlockedBuilding = connect(
  mapStateToProps,
  mapDispatchToProps
)(SentenceComponent)

export default UnlockedBuilding
