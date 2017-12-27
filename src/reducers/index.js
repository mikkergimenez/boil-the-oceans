import combineSectionReducers from 'combine-section-reducers'
import date                   from './date'
import game                   from './game'
import resources              from './resources'

const boilTheOcean = combineSectionReducers({
  date,
  game,
  resources
})

export default boilTheOcean
