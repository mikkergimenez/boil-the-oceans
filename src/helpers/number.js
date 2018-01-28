const mults = {
  "1x"  : 1,
  "10x" : 10,
  "100x": 100,
  "max" : 100
}

export function truncatedNumber(energy) {
  if (energy > 1000000000000000000000) {
    return (energy / 1000000000000000000000).toFixed(0) + "cc"
  }

  if (energy > 1000000000000000000) {
    return (energy / 1000000000000000000).toFixed(0) + "bb"
  }

  if (energy > 1000000000000000) {
    return (energy / 1000000000000000).toFixed(0) + "aa"
  }

  if (energy > 1000000000000) {
    return (energy / 1000000000000).toFixed(0) + "T"
  }

  if (energy > 1000000000) {
    return (energy / 1000000000).toFixed(0) + "B"
  }
  return energy.toLocaleString();
}


export function getCost(building, count, multiplier, energy) {
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

export function getPurchaseCount(building, count, multiplier, energy) {
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

export function canBuy(cost, energy) {
  if (cost == 0) {
    return true;
  }
  return cost > energy;
}
