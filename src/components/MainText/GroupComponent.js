import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './GroupComponent.css'

import UnlockedBuilding from './UnlockedBuilding';

const GroupComponent = ({ name, buildings }) => (
  <p>
    {Object.keys(buildings).map(function(i) {
      return (<UnlockedBuilding key={buildings[i].id} building={buildings[i]} />);
    })}
  </p>
);

export default GroupComponent;
//
// const GroupComponent = ({ name, buildings }) => (
//   <p>
//     <TransitionGroup>
//       {Object.keys(buildings).map(function(i) {
//         return (
//           <CSSTransition
//             classNames="buildingsList"
//             key={buildings[i].id}
//             timeout={{ enter: 500, exit: 300 }}>
//             <UnlockedBuilding key={buildings[i].id} building={buildings[i]} />
//           </CSSTransition>
//         );
//       })}
//     </TransitionGroup>
//   </p>
// );
