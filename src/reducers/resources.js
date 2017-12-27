function incrementEnergy(eCount, state) {
  var newCount = eCount
  Object.keys(state.buildings).forEach(function (key) {

    if (key == "axeSharpness") {
      newCount = newCount + (state.purchasedBuildings[key].count * (state.people - 1) * state.buildings[key].incomeRate);
    } else {
      try {
        newCount = newCount + (state.purchasedBuildings[key].count * state.buildings[key].incomeRate);
      } catch (err) {
        state.purchasedBuildings[key] = {
          count: 0
        }
        newCount = newCount + (state.purchasedBuildings[key].count * state.buildings[key].incomeRate);
      }
    }
  });

  return newCount;
 }

function techCost(state, action) {
  return state.technologies[action.technologyID].cost
}

function hash_key_contains(arr, val) {
  for (var a in arr) {
    if (a == val) {
      return true
    }
  }
  return false
}

function getInitialState() {
  return {};
}

const resources = (state = {}, action, completeState) => {
  switch (action.type) {
    case 'TICK':
      state.energy      = incrementEnergy(state.energy, state)
      state.inspiration = incrementEnergy(state.inspiration, state)

      return Object.assign({}, state)

    case 'INSPIRE_OTHERS':
      var peopleCost = Math.floor(100 * Math.pow(1.15, state.people));
      if (state.inspiration > peopleCost) {
        state.inspiration = state.inspiration - peopleCost
        state.people = state.people + 1
        return Object.assign({}, state)
      }

      return state;
    case 'UNLOCK_TECHNOLOGY':
      // If there is enough resource, subtract resource for technology purchase.
      var techResource = state.technologies[action.technologyID].costs

      if (state[techResource] >= techCost(state, action)) {
        state[techResource] = state[techResource] - techCost(state, action)

        state.purchasedTechnologies.push({
          name: action.technologyID,
          date: completeState.date.current
        })

        if (state.technologies[action.technologyID].unlockResource) {
          console.log(`Unlocking ${state.technologies[action.technologyID].unlockResource}`);
          state.unlockedBuildings.push(state.technologies[action.technologyID].unlockResource);
        }
      }

      return Object.assign({}, state)
    case 'INCREASE_RESOURCE':
      state[action["resource"]] = state[action["resource"]] + state.purchasedBuildings.axeSharpness.count;
      state.inspiration         = state.inspiration + state.purchasedBuildings.axeSharpness.count;

      return Object.assign({}, state)
    case 'INCREASE_BUILDING':
      var building = state.buildings[action["building"]]
      var buildingCount = state.purchasedBuildings[action["building"]].count
      var cost = Math.floor(building.baseCost * Math.pow(building.multiplier, buildingCount));

      if (state[building.costs] > cost) {
        state[building.costs]           = state[building.costs] - cost;
        state.purchasedBuildings[action["building"]].count = state.purchasedBuildings[action["building"]].count + 1;
      } else {
        return state
      }

      return Object.assign({}, state)
    default:
      return Object.assign({}, state)
  }
}

export default resources
