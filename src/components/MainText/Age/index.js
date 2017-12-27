import { connect } from 'react-redux';
import { increaseResource } from '../../../actions';
import Component from './Component';

function array_contains(arr, val) {
  console.log(arr);
  for (var item in arr) {
    if (arr[item].name == val) {
      return true;
    }
  }
  return false;
}

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

const getAge = (purchasedTechnologies) => {
  if (array_contains(purchasedTechnologies, "coal")) {
    console.log("age is coal");
    return "coal";
  }
  console.log("age is wood");
  return "wood";
}

const mapStateToProps = state => {
  return {
    age: getAge(state.resources.purchasedTechnologies),
    iwe: getIWE(state.resources.people),
    energy: getEnergy(state.resources)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    chopWood: id => {
      dispatch(increaseResource("energy"))
    }
  }
}

const AgeText = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default AgeText
