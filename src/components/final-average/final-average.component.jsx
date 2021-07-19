import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showFinalStats } from '../../redux/final-stats/final-stats.selectors';

import './final-average.styles.css';

const FinalAverage = ({finalStat}) => {
    return(
        <div className='final-average'>
            <div><strong>The Set Number:</strong><span className='stats-spans'>{finalStat.theGameSet}</span></div>
            <div><strong>The Target:</strong><span className='stats-spans'>{finalStat.theTarget}</span></div>
            <div><strong>The Points Average:</strong><span className='stats-spans'>{finalStat.theStatsAverage}</span></div>
        </div>
    );
};

export default FinalAverage