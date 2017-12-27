import { connect } from 'react-redux'

import { unlockTechnology } from '../../actions'

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
    if (arr[a] == val) {
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
      dispatch(unlockTechnology(id))
    }
  }
}

const UnlockedTechnology = connect(
  mapStateToProps,
  mapDispatchToProps
)(Technology)

export default UnlockedTechnology
