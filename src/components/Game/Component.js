import React, { Component } from 'react';
import './Game.css';

import Date from '../Date';
import NumberPeople from '../NumberPeople';
import InspireOthers from '../InspireOthers';

import { CSSTransition } from 'react-transition-group'

import MainText from '../MainText';
import UnlockedTechnology from '../Technology/Unlocked';

const Game = ({ flashMessage }) => (
      <span className="Game container">
        <div className="Game blog-header">
          <h1>Boil the Oceans</h1>
          <Date />
        </div>
        <p><NumberPeople/></p>
        <MainText />
        <InspireOthers />&nbsp;
        <CSSTransition
          classNames="fadeOutOnly"
          timeout={{ enter: 1000, leave: 1000 }}>
          {flashMessage}
        </CSSTransition>
        <br /><br />
        <UnlockedTechnology />&nbsp;
        <br /><br /><br />
      </span>
);

export default Game;


// const Game = ({ flashMessage }) => (
//       <span className="Game container">
//         <div className="Game blog-header">
//           <h1>Boil the Oceans</h1>
//           <Date />
//         </div>
//         <p><NumberPeople/></p>
//         <MainText />
//         <InspireOthers />&nbsp;
//         <CSSTransition
//           classNames="fadeOutOnly"
//           timeout={{ enter: 1000, leave: 1000 }}>
//           <div>
//             {flashMessage}
//           </div>
//         </CSSTransition>
//         <br /><br />
//         <UnlockedTechnology />&nbsp;
//         <br /><br /><br />
//       </span>
// );
