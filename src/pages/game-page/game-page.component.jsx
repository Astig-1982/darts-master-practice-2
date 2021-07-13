import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './game-page.styles.css';

import SquaresGame from '../../components/squares-game/squares-game.component';
import GameFinishStats from '../../components/game-finished-stats/game-finish-stats.component';

import { selectCurrentTarget } from '../../redux/target/target.selectors';
import { selectTheName } from '../../redux/name/name.selectors';
import { getAverage, getTheResults, getTheSquares } from '../../redux/stats/stats.selectors';

import { finishTheGame } from '../../redux/final-stats/final-stats.actions';
import { startAnewGame } from '../../redux/stats/stats.actions';

class GamePage extends React.Component {

    constructor() {
        super();

        this.state = {
            avalue: 9
        };
    };

    componentDidMount() { 
        if (this.props.currentTarget == null) {
            alert('Please select a target');
            this.props.history.push('/choose-target')
        }
    }

    emptyValue = () => {
        {this.props.allSquares.map((square) => (
            document.querySelector(`.${square.class}`).value=''
        ))};
    };

    newGame = () => {
        this.props.startAnewGame()
        this.emptyValue()
        console.log('this is a new game')
    }

    render() {
    console.log(this.props.theResults)
    return(
        <div>
            <div className='game-details-div'>
                <h2>Game On {this.props.theName}</h2>
                <h2>Target {this.props.currentTarget}</h2>
            </div>
            <div className='game-results'>
                <SquaresGame />
            </div>
            <div className='the-average-square'>
                <span className='the-averge-span'>{this.props.theAverage}</span>
            </div>
            <div className='finish'>
            <button onClick={() => {
                this.props.finishTheGame(this.props.theAverage)
                this.newGame()
                }}>
                    Finish
                </button>
            </div>
            <div>
                <GameFinishStats />
            </div>
        </div>
    );
}};

const mapStateToProps = createStructuredSelector({
   currentTarget: selectCurrentTarget,
   theName: selectTheName,
   theResults: getTheResults,
   theAverage: getAverage,
   allSquares: getTheSquares
});

const mapDispatchToProps = dispatch => ({
    finishTheGame: finalAverage => dispatch(finishTheGame(finalAverage)),
    startAnewGame: () => dispatch(startAnewGame())  
});

export default connect(mapStateToProps,mapDispatchToProps)(GamePage);