import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import SquaresGame from '../../components/squares-game/squares-game.component';

import { selectCurrentTarget } from '../../redux/target/target.selectors';
import { selectTheName } from '../../redux/name/name.selectors';

class GamePage extends React.Component {

    componentDidMount() { 
        if (this.props.currentTarget == null) {
            alert('Please select a target');
            this.props.history.push('/choose-target')
        }
    }

    render() {
    return(
        <div>
            <div className='game-details-div'>
                <h2>Game On {this.props.theName}</h2>
                <h2>Target {this.props.currentTarget}</h2>
            </div>
            <div className='game-results'>
                <SquaresGame />
            </div>
        </div>
    );
}};

const mapStateToProps = createStructuredSelector({
   currentTarget: selectCurrentTarget,
   theName: selectTheName
});

export default connect(mapStateToProps)(GamePage);