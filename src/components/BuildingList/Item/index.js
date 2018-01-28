import { connect } from 'react-redux'
import ItemComponent from './Component';

import { increaseBuilding } from '../../../actions/building'

import { truncatedNumber, getPurchaseCount, getCost, canBuy } from '../../../helpers/number';

const mapStateToProps = (state, props) => {
  return {
    purchaseCount: getPurchaseCount(props.building, state.resources.purchasedBuildings[props.building.id].count, state.game.multiplier, state.resources.energy),
    canBuy: canBuy(getCost(props.building, state.resources.purchasedBuildings[props.building.id].count, state.game.multiplier, state.resources.energy), state.resources.energy),
    id: props.building.id,
    name: props.building.name,
    costs: truncatedNumber(getCost(props.building, state.resources.purchasedBuildings[props.building.id].count, state.game.multiplier, state.resources.energy)),
    count: state.resources.purchasedBuildings[props.building.id].count,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    purchaseBuilding: id => {
      dispatch(increaseBuilding(props.building.id))
    }
  }
}

const ListItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemComponent)

export default ListItemContainer
