import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './squares-game.styles.css';

import TheSquare from '../the-square/the-square.component';
import { getTheSquares } from '../../redux/stats/stats.selectors';

class SquaresGame extends React.Component {
    constructor() {
        super();

        
    };
    
    render() {
        return(
            <div className='all-squares'>
                {this.props.allSquares.map((square) => (
                    <TheSquare key={square.id} theClass={square.class}/>
                ))}
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    allSquares: getTheSquares
 });

//const mapDispatchToProps = dispatch => ({
//    setCurrentTarget: target => dispatch(setCurrentTarget(target))  
//});

export default connect(
    mapStateToProps
    )(SquaresGame);
