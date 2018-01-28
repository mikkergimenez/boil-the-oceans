// import ReactDOM from 'react-dom';
import App from './components/App';
import PropTypes from 'prop-types'
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

// import Axe from './components/Histories/Axe';
// import Coal from './components/Histories/Coal';
// import Lumber from './components/Histories/Lumber';
import Histories from './components/Histories'
import Header from './components/Header';


import UnlockedTechnologies from './components/Helpers/UnlockedTechnologies'

const Root = ({ store, persistor  }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/unlocked_technologies" component={UnlockedTechnologies}/>
        <Route path="/:history" component={Header}/>
        <Route path="/:history" component={Histories}/>
        <Route exact path="/" component={App}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
