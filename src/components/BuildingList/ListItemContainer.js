import { connect } from 'react-redux'
import ItemComponent from './ItemComponent';

import { increaseBuilding } from '../../actions/building'

function getCost(building, count) {
  return Math.floor(building.baseCost * Math.pow(1.15, count));
}

const mapStateToProps = (state, props) => {
  return {
    id: props.building.id,
    name: props.building.name,
    costs: getCost(props.building, state.resources.purchasedBuildings[props.building.id].count),
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
