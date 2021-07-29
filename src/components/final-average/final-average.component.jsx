import React from 'react';

import './final-average.styles.css';

const FinalAverage = ({finalStat}) => {
    // this will display all the stats
    return(
        <div className='final-average'>
            <div><strong>The Set Number:</strong><span className='stats-spans'>{finalStat.theGameSet}</span></div>
            <div><strong>The Target:</strong><span className='stats-spans'>{finalStat.theTarget}</span></div>
            <div><strong>The Points Average:</strong><span className='stats-spans'>{finalStat.theStatsAverage}</span></div>
        </div>
    );
};

export default FinalAverage