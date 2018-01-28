export const getIWE = (people) => {
  if (people > 1) {
    return 'we'
  } else {
    return 'I'
  }
}

export const getMyOur = (people) => {
  if (people > 1) {
    return 'our'
  } else {
    return 'my'
  }
}

export const getAmAre = (people) => {
  if (people > 1) {
    return 'are'
  } else {
    return 'am'
  }
}
