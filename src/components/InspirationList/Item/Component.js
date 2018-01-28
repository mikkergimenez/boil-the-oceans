import React, { Component } from 'react';

const ItemComponent = ({ imageURL, id, name, count, costs, purchaseReligiousItem, purchaseCount, canBuy }) => {
  var purchaseCountButton
  if (purchaseCount == 1) {
    purchaseCountButton = <span className="purchase-button-container"><button onClick={purchaseReligiousItem} className="purchase-button" disabled={canBuy} >buy {purchaseCount}</button></span>
  } else {
    purchaseCountButton = <span className="purchase-button-container"><button onClick={purchaseReligiousItem} className="purchase-button" disabled={canBuy} >{purchaseCount}</button></span>

  }
  return (
  <div className="inspiration-list-item">
    <span>
      <img className="inspiration-list-image" src={imageURL}/>
    </span>
    <span className="text-container">
      <div><a onClick={purchaseReligiousItem}><b>{name}</b></a></div>
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
