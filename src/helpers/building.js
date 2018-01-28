export function groupBuildings(buildings, group) {
  var retArr = [];
  for (var i in buildings) {
    if (buildings[i].industry === group) {
      retArr.push(buildings[i]);
    }
  }

  return retArr;
  }
