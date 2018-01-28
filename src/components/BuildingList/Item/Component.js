import React, { Component } from 'react';

const ItemComponent = ({ purchaseCount, canBuy, id, name, count, costs, purchaseBuilding }) => {
  var purchaseCountButton
  if (purchaseCount == 1) {
    purchaseCountButton = <span className="purchase-button-container"><button onClick={purchaseBuilding} className="purchase-button" disabled={canBuy} >buy {purchaseCount}</button></span>
  } else {
    purchaseCountButton = <span className="purchase-button-container"><button onClick={purchaseBuilding} className="purchase-button" disabled={canBuy} >{purchaseCount}</button></span>

  }
  return (
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
    {purchaseCountButton}
  </div>
);
}

export default ItemComponent;
