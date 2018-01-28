import { connect } from 'react-redux'
import Component from './Component';

import { increaseFaith } from '../../../actions/faith'

import { truncatedNumber, getCost, getPurchaseCount, canBuy } from '../../../helpers/number'

// function getCost(religiousItem, count) {
//   var cost = Math.floor(religiousItem.baseCost * Math.pow(1.15, count));
//   if (cost > 1000000) {
//     return cost.toExponential(3);
//   }
//   return cost;
// }

const mapStateToProps = (state, props) => {
  return {
    purchaseCount: getPurchaseCount(props.religiousItem, state.resources.purchasedReligion[props.religiousItem.id].count, state.game.multiplier, state.resources.energy),
    canBuy: canBuy(getCost(props.religiousItem, state.resources.purchasedReligion[props.religiousItem.id].count, state.game.multiplier, state.resources.energy), state.resources.energy),
    imageURL: "images/faith/" + props.religiousItem.id + ".jpg",
    id: props.religiousItem.id,
    name: props.religiousItem.name,
    costs: truncatedNumber(getCost(props.religiousItem, state.resources.purchasedReligion[props.religiousItem.id].count, state.game.multiplier, state.resources.energy)),
    count: truncatedNumber(state.resources.purchasedReligion[props.religiousItem.id].count),
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    purchaseReligiousItem: id => {
      dispatch(increaseFaith(props.religiousItem.id))
    }
  }
}

const ListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default ListItemContainer
