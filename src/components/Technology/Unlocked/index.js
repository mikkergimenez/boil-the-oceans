import { connect } from 'react-redux'

import { unlockTechnology } from '../../../actions'
import { openTechnologyStory } from '../../../actions/game'

import Technology from './Component'

function getUnlockedTechnologyName(techs, purchased_techs, resources) {
  for (var key in techs) {
    if (array_contains(purchased_techs, key)) {
      continue;
    }
    if (resources[techs[key].costs] > techs[key].cost) {
      return key
    }
  }
  return ""
}

function array_contains(arr, val) {
  for (var a in arr) {
    if (arr[a].name == val) {
      return true
    }
  }
  return false
}

function getUnlockedTechnology(techs, purchased_techs, resources) {
  for (var key in techs) {
    if (array_contains(purchased_techs, key)) {
      continue;
    }
    if (resources[techs[key].costs] > techs[key].cost) {
      return techs[key]
    }
  }
  return {
    text: {
      beforeLink: "",
      link: "",
      afterLink: "",
    }
  }
}

const mapStateToProps = state => {
  return {
    unlockedTechnologyName: getUnlockedTechnologyName(state.resources.technologies, state.resources.purchasedTechnologies, state.resources),
    unlockedTechnology: getUnlockedTechnology(state.resources.technologies, state.resources.purchasedTechnologies, state.resources)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      dispatch(openTechnologyStory(id))
    }
  }
}

const UnlockedTechnology = connect(
  mapStateToProps,
  mapDispatchToProps
)(Technology)

export default UnlockedTechnology
