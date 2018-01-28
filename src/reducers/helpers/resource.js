export function incrementEnergy(eCount, state) {
  var newCount = eCount
  Object.keys(state.buildings).forEach(function (key) {

    if (key === "axeSharpness") {
      var peopleMultiplier = state.purchasedReligion["people"].count - 1;
      if (peopleMultiplier > 10) {
        peopleMultiplier = 10;
      }
      console.log("People Multiplier: " + peopleMultiplier);
      newCount = newCount + (state.purchasedBuildings[key].count * peopleMultiplier * state.buildings[key].incomeRate);
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

export function techCost(state, action) {
  return state.technologies[action.technologyID].cost
}

export function hashKeyContains(arr, val): boolean {
  for (var a in arr) {
    if (a === val) {
      return true
    }
  }
  return false
}
