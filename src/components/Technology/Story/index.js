import { connect } from 'react-redux'
import { unlockTechnology } from '../../../actions';

import TechnologyStory from './Component.js'

const mapStateToProps = state => {
  return {
    technologyID: state.game.technologyStory.id,
    technology: state.resources.technologies[state.game.technologyStory.id]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      dispatch(unlockTechnology(id))
    }
  }
}

const UnlockedTechnology = connect(
  mapStateToProps,
  mapDispatchToProps
)(TechnologyStory)

export default UnlockedTechnology
