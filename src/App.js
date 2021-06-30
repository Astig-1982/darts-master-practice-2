import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import chooseTarget from './pages/choose-target/choose-target.component';
import gamePage from './pages/game-page/game-page.component';
import HomePage from './pages/home-page/home-page.component';

class App extends React.Component {

  render() {
  return (
      <div>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/choose-target' component={ chooseTarget } />
        <Route exact path='/game-page' component={ gamePage } />
      </div>
    );
  };
};

export default App;
