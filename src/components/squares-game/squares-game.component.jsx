import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './squares-game.styles.css';

import TheSquare from '../the-square/the-square.component';

class SquaresGame extends React.Component {
    constructor() {
        super();

        this.state = {
            allSquares: [1, 2, 3, 4, 5]
        };
    };
    
    render() {
        return(
            <div className='all-squares'>
                {this.state.allSquares.map((square) => (
                    <TheSquare key={square} />
                ))}
            </div>
        )
    }
};

export default SquaresGame;
