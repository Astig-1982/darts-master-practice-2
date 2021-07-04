import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import chooseTarget from './pages/choose-target/choose-target.component';
import GamePage from './pages/game-page/game-page.component';
import HomePage from './pages/home-page/home-page.component';

import { selectCurrentTarget } from './redux/target/target.selectors';

class App extends React.Component {

  render() {
  return (
      <div>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/choose-target' component={ chooseTarget } />
        <Route exact path='/game-page' component={ GamePage } />
      </div>
    );
  };
};

const mapStateToProps = createStructuredSelector({
  currentTarget: selectCurrentTarget,
});

// <Redirect to='/choose-target' />

// <Route exact path='/game-page' component={ GamePage } />

//<Route 
//            exact 
//            path='/game-page' 
//            render={() => this.props.currentTarget ? (
//              <GamePage />) : (
//                <Redirect hello='hello' to='/choose-target' />
//              )
//            } 
//          />

export default connect(
  mapStateToProps
  )(App);