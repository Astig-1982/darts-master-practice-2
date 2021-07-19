import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './game-page.styles.css';

import SquaresGame from '../../components/squares-game/squares-game.component';
import GameFinishStats from '../../components/game-finished-stats/game-finish-stats.component';

import { selectCurrentTarget } from '../../redux/target/target.selectors';
import { selectTheName } from '../../redux/name/name.selectors';
import { getAverage, getTheResults, getTheSquares } from '../../redux/stats/stats.selectors';

import { finishTheGame, getTheTarget, setTheAverage } from '../../redux/final-stats/final-stats.actions';
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

    getAllTheStats =() => {
        this.props.getTheTarget(this.props.currentTarget)
        this.props.setTheAverage(this.props.theAverage)
        this.props.finishTheGame()
        console.log('setting up the stats')
    }

    newGame = () => {
        this.props.startAnewGame()
        this.emptyValue()
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
                <button className='finish-button' onClick={() => {
                    this.getAllTheStats()
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
    finishTheGame: () => dispatch(finishTheGame()),
    getTheTarget: theTarget => dispatch(getTheTarget(theTarget)),
    setTheAverage: finalAverage => dispatch(setTheAverage(finalAverage)),
    startAnewGame: () => dispatch(startAnewGame())  
});

export default connect(mapStateToProps,mapDispatchToProps)(GamePage);