import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setSquareResults } from '../../redux/stats/stats.actions';

import './the-square.styles.css';

const TheSquare = ({setSquareResults}) => {
    return(
        <input 
            className='the-square'
            onBlur={e => {{setSquareResults(parseInt(e.target.value))}}}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    setSquareResults: theResult => dispatch(setSquareResults(theResult))  
});

export default connect(
    null,
    mapDispatchToProps
    )(TheSquare);