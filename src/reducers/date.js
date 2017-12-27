function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function randomYear() {
  var min = Math.ceil(1200);
  var max = Math.floor(1500);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomMonth() {
  var min = Math.ceil(1);
  var max = Math.floor(12);
  return zeroPad(Math.floor(Math.random() * (max - min + 1)) + min, 2);
}

function randomDay() {
  var min = Math.ceil(1);
  var max = Math.floor(28);
  return zeroPad(Math.floor(Math.random() * (max - min + 1)) + min, 2);
}

function initialState() {
  var retDate = `${randomYear()}-${randomMonth()}-${randomDay()}T06:00:00Z`
  return {
    current: new Date(retDate)
  }
}

Date.prototype.addHours = function(h) {
   this.setTime(this.getTime() + (h*60*60*1000));
   return this;
}

const date = (state = initialState(), action, entireState = []) => {
  switch (action.type) {
    case 'TICK':
      if (state.current == NaN) {
        return initialState();
      }
      var new_state = state;
      try {
        new_state.current = new Date(state.current.setTime(state.current.getTime() + (60*60*1000)));
      } catch(e) {
        new_state = initialState();
      }
      return Object.assign({}, new_state);
    default:
      return state
  }
}

export default date
