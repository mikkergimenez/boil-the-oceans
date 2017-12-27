// import ReactDOM from 'react-dom';
import App from './components/App';
import PropTypes from 'prop-types'
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import Coal from './components/Histories/Coal';
import Lumber from './components/Histories/Lumber';
import Header from './components/Header';

const Root = ({ store, persistor  }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Header}/>
        <Route exact path="/" component={App}/>
        <Route path="/lumber" component={Lumber}/>
        <Route path="/coal" component={Coal}/>
      </div>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
