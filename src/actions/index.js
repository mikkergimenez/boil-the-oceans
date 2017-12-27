
export const unlockTechnology = technologyID => {
  return {
    type: 'UNLOCK_TECHNOLOGY',
    technologyID
  }
}

export const increaseResource = resource => {
  return {
    type: 'INCREASE_RESOURCE',
    resource
  }
}

export const addResource = resource => {
  return {
    type: 'ADD_RESOURCE',
    resource
  }
}

export const reduceResource = (resource, amount) => {
  return {
    type: 'REDUCE_RESOURCE',
    resource,
    amount
  }
}
