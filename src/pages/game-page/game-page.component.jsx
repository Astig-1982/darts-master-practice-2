import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './game-page.styles.css';

import SquaresGame from '../../components/squares-game/squares-game.component';
import GameFinishStats from '../../components/game-finished-stats/game-finish-stats.component';

import { selectCurrentTarget } from '../../redux/target/target.selectors';
import { selectTheName } from '../../redux/name/name.selectors';
import { getAverage, getTheResults, getTheSquares } from '../../redux/stats/stats.selectors';

import { finishTheGame, getTheSetNumber, getTheTarget, pushAllSquareResults, pushSumAllSquareResults, setTheAverage } from '../../redux/final-stats/final-stats.actions';
import { startAnewGame } from '../../redux/stats/stats.actions';
import ActionButton from '../../components/action-button/action-button.component';
import { allSquareResults, allSumResults, theHeighestArray } from '../../redux/final-stats/final-stats.selectors';

class GamePage extends React.Component {

    constructor() {
        super();

        this.state = {
            gameSet: 1
        };
    };

    componentDidMount() {
        // this function redirects you to choose-target page 
        // if no target is selected when the component mounts 
        if (this.props.currentTarget == null) {
            alert('Please select a target');
            this.props.history.push('/choose-target')
        }
    }

    incrementSet = () => {
        // this function increments the game number
        // it is executed in newGame function
        const gameSet = this.state.gameSet;
        const newSet = gameSet + 1;
        this.setState({ gameSet: newSet });
    };

    emptyValue = () => {
        // this function sets the value of each square to null
        {this.props.allSquares.map((square) => (
            document.querySelector(`.${square.class}`).value=''
        ))};
    };

    getAllTheStats =() => {
        // this function executes the actions created in final-stats.actions
        // it is called when the 'finish' action button is clicked
        this.props.getTheTarget(this.props.currentTarget)
        this.props.getTheSetNumber(this.state.gameSet)
        this.props.setTheAverage(this.props.theAverage)
        this.props.pushAllSquares(this.props.theResults) // this action pushes squareResults pulled from stats.reducer into allSquareResults from final-stats reducer
        this.props.pushSumAllSquareResults()
        this.props.finishTheGame()
    }

    newGame = () => {
        // this function is called when the 'finish' action button is clicked
        this.props.startAnewGame() // this action is created in stats.actions and sets the squareResults array to an empty array
        this.emptyValue()
        this.incrementSet()
    }

    render() {
        console.log(this.props.allTheSquareResults)
        console.log(this.props.allSumResults)
        console.log(this.props.heighestArray)
    return(
        <div>
            <div className='game-details-div'>
                <h2>Game On {this.props.theName}</h2>
                <h2>Set {this.state.gameSet}</h2>
                <h2>Target {this.props.currentTarget}</h2>
            </div>
            <div className='game-results'>
                <SquaresGame />
            </div>
            <div className='the-average-square'>
                <span className='the-average-span'>{this.props.theAverage}</span>
            </div>
            <div className='finish'>
                <ActionButton 
                    finishButton
                    onClick={() => {
                        this.getAllTheStats()
                        this.newGame()
                        }}
                >
                    Finish
                </ActionButton>
            </div>
            <div className='the-heighest-array'>
                {this.props.heighestArray.map((eachHeighestResult) => (
                    <span className='eachHeighesResult'>{eachHeighestResult}</span>
                ))}
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
   allSquares: getTheSquares,
   allTheSquareResults: allSquareResults,
   allSumResults: allSumResults,
   heighestArray: theHeighestArray
});

const mapDispatchToProps = dispatch => ({
    finishTheGame: () => dispatch(finishTheGame()),
    getTheTarget: theTarget => dispatch(getTheTarget(theTarget)),
    setTheAverage: finalAverage => dispatch(setTheAverage(finalAverage)),
    getTheSetNumber: gameSet => dispatch(getTheSetNumber(gameSet)),
    startAnewGame: () => dispatch(startAnewGame()),
    pushAllSquares: squareResults => dispatch(pushAllSquareResults(squareResults)),
    pushSumAllSquareResults: () => dispatch(pushSumAllSquareResults()) 
});

export default connect(mapStateToProps,mapDispatchToProps)(GamePage);