import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './the-square.styles.css';

const TheSquare = () => {
    return(
        <input 
            className='the-square'
        />
    );
};

export default TheSquare;