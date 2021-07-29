import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isTheValueNaN, setSquareResults } from '../../redux/stats/stats.actions';

import './the-square.styles.css';

const TheSquare = ({setSquareResults, valueIsNaN, theClass}) => {
    return(
        <input 
            className={`the-square ${theClass}`}
            onBlur={(e) => {isNaN(parseInt(e.target.value)) ? valueIsNaN() :  setSquareResults(theClass)}}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    // this action is being pulled from stats.actions and it takes the class of each square
    // the class is taken to stats.reducer, which will call addToResults() function with the class as as argument
    // addToResult() will take the class and based on it, it will get the element's value
    setSquareResults: theClass => dispatch(setSquareResults(theClass)),
    valueIsNaN: () => dispatch(isTheValueNaN()) 
});

export default connect(
    null,
    mapDispatchToProps
    )(TheSquare);
