import React from 'react';
import './Component.css';

const UTHelperComponent = ({ all_resources, all_all }) => {
  var buildings = [];
  console.log(all_resources.buildings);
  for (var i in Object.keys(all_resources.buildings)) {
    buildings.push(<div key={i}><b>{i}</b> {JSON.stringify(all_resources.buildings[Object.keys(all_resources.buildings)[i]])}</div>);
  };

  var technologies = [];
  console.log(all_resources.technologies);
  for (var j in Object.keys(all_resources.technologies)) {
    technologies.push(<div key={j}><b>{j}</b> {JSON.stringify(all_resources.technologies[Object.keys(all_resources.technologies)[j]])}</div>);
  };

  return (<span className="JSONBlob">
  <div>
    <h3>Game:</h3>
    <p>{JSON.stringify(all_all.game)}
    </p>
  </div>
  <div>
    <h3>Date:</h3>
    <p>{JSON.stringify(all_all.date)}
    </p>
  </div>
  <div>
    <p><b>Energy: </b> {JSON.stringify(all_resources.energy)}</p>
    <p><b>People: </b> {JSON.stringify(all_resources.people)}</p>
    <p><b>Inspiration: </b> {JSON.stringify(all_resources.inspiration)}</p>
  </div>
    <div>
      <h3>Unlocked Buildings:</h3>
      <p>{JSON.stringify(all_resources.unlockedBuildings)}
      </p>
    </div>
    <div>
      <h3>Purchased Technologies:</h3>
      <p>{JSON.stringify(all_resources.purchasedTechnologies)}
      </p>
    </div>
    <div>
      <h3>Purchased Buildings:</h3>
      <p>
        {JSON.stringify(all_resources.purchasedBuildings)}
      </p>
    </div>
    <div>
      <h3>Buildings:</h3>
      <p>
        {buildings}
      </p>
    </div>
    <div>
      <h3>Technologies:</h3>
      <p>
        {technologies}
      </p>
    </div>
  </span>);
};

export default UTHelperComponent;
