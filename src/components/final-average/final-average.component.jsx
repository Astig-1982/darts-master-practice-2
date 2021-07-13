import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showFinalStats } from '../../redux/final-stats/final-stats.selectors';

import './final-average.styles.css';

const FinalAverage = ({finalAverage}) => {
    return(
        <div className='final-average'>
            {finalAverage}
        </div>
    );
};

export default FinalAverage