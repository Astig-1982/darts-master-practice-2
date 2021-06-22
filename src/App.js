import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home-page/home-page.component';

class App extends React.Component {

  render() {
  return (
      <div>
        <Route exact path='/' component={ HomePage } />
      </div>
    );
  };
};

// <Route exact path='/' component={ HomePage } />

export default App;
