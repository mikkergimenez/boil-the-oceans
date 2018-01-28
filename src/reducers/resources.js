import { incrementEnergy, techCost, hashKeyContains } from './helpers/resource';

function getInitialState() {
  return {};
}

function incrementReligion(purchasedReligion) {
  var retval = purchasedReligion;
  console.log(retval);

  retval["people"].count     = retval["people"].count     + retval["evangelist"].count
  retval["evangelist"].count = retval["evangelist"].count + retval["bishop"].count

  return retval;
}

const mults = {
  "1x": 1,
  "10x": 10,
  "100x": 100,
  "max": 100
}


function getCost(building, count, multiplier, energy) {
  var sum = 0;
  var after_sum = 0;
  var mult = mults[multiplier];

  for (var x = 0; x < mult; x++) {
    after_sum = sum + Math.floor(building.baseCost * Math.pow(1.15, count + x));
    if (after_sum > energy) {
      return sum;
    }
    sum = after_sum;
  }

  return sum;
}

function getPurchaseCount(building, count, multiplier, energy) {
  var sum = 0;
  var after_sum = 0;

  if (multiplier == "max") {
    for (var x = 0; x < 10000; x++) {
      after_sum = sum + Math.floor(building.baseCost * Math.pow(1.15, count + x));
      if (after_sum > energy) {
        return x;
      }
      sum = after_sum;
    }
  }
  return mults[multiplier];
}

const resources = (state = {}, action, entireState) => {
  switch (action.type) {
    case 'TICK':
      var oldEnergy              = state.energy;
      var oldInspiration         = state.inspiration;
      state.energy               = incrementEnergy(state.energy, state)
      state.inspiration          = incrementEnergy(state.inspiration, state)
      state.energyPerSecond      = state.energy - oldEnergy;
      state.inspirationPerSecond = state.inspiration - oldInspiration;

      if (state.energy > 17) {
        if (!state.unlockedBuildings.includes("axeSharpness")) {
          state.unlockedBuildings.push("axeSharpness");
        }
        if (!state.unlockedReligion.includes("people")) {
          state.unlockedReligion.push("people");
        }
      }

      state.purchasedReligion = incrementReligion(state.purchasedReligion);

      return Object.assign({}, state)

    case 'INSPIRE_OTHERS':
      var peopleCost = Math.floor(100 * Math.pow(1.15, state.purchasedReligion["people"].count));
      if (state.inspiration >= peopleCost) {
        state.inspiration = state.inspiration - peopleCost
        state.purchasedReligion["people"].count = state.purchasedReligion["people"].count + 1
        return Object.assign({}, state)
      }

      return Object.assign({}, state)
    case 'UNLOCK_TECHNOLOGY':
      // If there is enough resource, subtract resource for technology purchase.
      var techResource = state.technologies[action.technologyID].costs

      if (state[techResource] >= techCost(state, action)) {

        if (!state.purchasedTechnologies.map(function(pt) { return pt.name }).includes(action.technologyID)) {
          state[techResource] = state[techResource] - techCost(state, action)

          state.purchasedTechnologies.push({
            name: action.technologyID,
            date: entireState.date.current
          })
        }

        if ((state.technologies[action.technologyID].unlockResource) && (!state.unlockedBuildings.includes(state.technologies[action.technologyID].unlockResource))) {
          state.unlockedBuildings.push(state.technologies[action.technologyID].unlockResource);
        }
      }

      return Object.assign({}, state)
    case 'INCREASE_RESOURCE':
      state[action["resource"]] = state[action["resource"]] + state.purchasedBuildings.axeSharpness.count;
      state.inspiration         = state.inspiration + state.purchasedBuildings.axeSharpness.count;

      return Object.assign({}, state)

    case 'INCREASE_FAITH':
      console.log("Trying to increase faith");
      var religiousItem      = state.faith[action["religiousItem"]]
      var religiousItemCount = state.purchasedReligion[action["religiousItem"]].count
      // var cost               = Math.floor(religiousItem.baseCost * Math.pow(religiousItem.multiplier, religiousItemCount));
      var cost               = getCost(religiousItem, religiousItemCount, entireState.game.multiplier, state.inspiration);
      var purchaseCount      = getPurchaseCount(religiousItem, religiousItemCount, entireState.game.multiplier, state.inspiration);

      if (state[religiousItem.costs] > cost) {
        state[religiousItem.costs]                              = state[religiousItem.costs] - cost;
        state.purchasedReligion[action["religiousItem"]].count  = state.purchasedReligion[action["religiousItem"]].count + purchaseCount;
      } else {
        return state
      }

      return Object.assign({}, state)


    case 'INCREASE_BUILDING':
      var building      = state.buildings[action["building"]]
      var buildingCount = state.purchasedBuildings[action["building"]].count
      var cost          = getCost(building, buildingCount, entireState.game.multiplier, state.energy);
      var purchaseCount = getPurchaseCount(building, buildingCount, entireState.game.multiplier, state.energy);

      if (state[building.costs] > cost) {
        state[building.costs]                              = state[building.costs] - cost;
        state.purchasedBuildings[action["building"]].count = state.purchasedBuildings[action["building"]].count + purchaseCount;
      } else {
        return state
      }

      return Object.assign({}, state)
    default:
      return Object.assign({}, state)
  }
}

export default resources
