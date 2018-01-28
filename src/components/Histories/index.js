import { connect } from 'react-redux'
import Component from './Component';

import { increaseBuilding } from '../../actions/building'

import Mustache from 'mustache';
import moment from 'moment';

import coalText from './text/coal';
import lumberText from './text/lumber';

function groupBuildings(buildings, group) {
  var retArr = [];
  for (var i in buildings) {
    if (buildings[i].industry === group) {
      retArr.push(buildings[i]);
    }
  }

  return retArr;
}

function getRandomTree() {
  var trees = [
    "Giant Sequoia",
    "Pedunculate oak",
    "Bald Cypress",
    "Southern Live Oak",
    "Dawn Redwood",
    "European beech",
    "Sweet chestnut",
    "Lebanon cedar",
    "Yew",
    "London plane",
    "Bristlecone pine",
    "Coast redwood",
    "Ginkgo",
    "Baobab"
  ]
  return trees[5];
}

function unlockedLumberTechnologies(technologies, purchasedTechnologies, industryVariables) {
  var lumberTechnologies = [];
  for (var tech in technologies) {
    for (var ptech in purchasedTechnologies) {
      if ((tech === purchasedTechnologies[ptech].name) && (technologies[tech].industry === "logging")) {

        var dateOfEvent = new Date(purchasedTechnologies[ptech].date)
        industryVariables.consequenceDate = moment(new Date(dateOfEvent.setTime(dateOfEvent.getTime() + 3*24*60*60*1000))).format("MMMM Do, YYYY");
        industryVariables.consequenceName = "Jim Lancaster";

        for (var i in technologies[tech].history) {
          var techHistory = Mustache.render(technologies[tech].history[i], industryVariables)
          lumberTechnologies.push(techHistory);
        }
      }
    }
  }

  return lumberTechnologies;
}

function unlockedCoalTechnologies(technologies, purchasedTechnologies, industryVariables) {
  var coalTechnologies = [];
  for (var tech in technologies) {
    for (var ptech in purchasedTechnologies) {
      if ((tech === purchasedTechnologies[ptech].name) && (technologies[tech].industry === "coal")) {

        var dateOfEvent = new Date(purchasedTechnologies[ptech].date)
        industryVariables.consequenceDate = moment(new Date(dateOfEvent.setTime(dateOfEvent.getTime() + 3*24*60*60*1000))).format("MMMM Do, YYYY");
        industryVariables.consequenceName = "Jim Lancaster";

        for (var i in technologies[tech].history) {
          var techHistory = Mustache.render(technologies[tech].history[i], industryVariables)
          coalTechnologies.push(techHistory);
        }
      }
    }
  }

  return coalTechnologies;
}

function getType(item) {
  var mapItemToType = {
    axe: "technology",
    coal: "industry",
    lumber: "industry",
  }

  return mapItemToType[item];
}

const mapStateToProps = (state, props) => {
  var textObj = {};
  var technologies = [];

  var industryVariables = {
    random_tree: getRandomTree(),
    country: "Hestraeburg",
    company: "Patrick Industries",
    company_founding: moment(new Date(state.game.companyFounding)).format("MMMM Do, YYYY"),
    player_name: "Michael Snot"
  }

  if (props.match.params.history === "lumber") {
    textObj = lumberText;
    technologies = unlockedLumberTechnologies(state.resources.technologies, state.resources.purchasedTechnologies, industryVariables)
  }

  if (props.match.params.history === "coal") {
    textObj = coalText;
    technologies = unlockedCoalTechnologies(state.resources.technologies, state.resources.purchasedTechnologies, industryVariables)
  }

  return {
    type: getType(),
    company_name: 'Patrick Industries',
    backgroundImage: '/images/logging.jpg',
    subject: textObj.subject,
    title: textObj.title,
    tagline: Mustache.render(textObj.tagline, industryVariables),
    content: Mustache.render(textObj.content, industryVariables),
    technologies: technologies,
    country: 'Hestraeburg'
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {}
}

const HistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export default HistoryContainer
