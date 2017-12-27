import React, { Component } from 'react';

import './Component.css';

const ItemComponent = ({ id, name, count, costs, purchaseBuilding }) => (
  <div className="building-list-item">
    <span>
      <img src={"images/buildings/" + id + ".jpg"}/>
    </span>
    <span className="text-container">
      <div><a onClick={purchaseBuilding}><b>{name}</b></a></div>
      <div>
        <span className="major-number">{count}</span>
        <span className="minor-number">{costs}</span>
      </div>
    </span>
    <span className="purchase-button-container"><button onClick={purchaseBuilding} className="purchase-button">buy</button></span>

  </div>
)

export default ItemComponent;
