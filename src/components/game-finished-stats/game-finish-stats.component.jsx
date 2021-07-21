import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showFinalStats } from '../../redux/final-stats/final-stats.selectors';

import FinalAverage from '../final-average/final-average.component';

import './game-finish-stats.styles.css';

const GameFinishStats = ({finalStats}) => {
    return(
        <div className='game-finish-stats'>
           {finalStats.map((finalStat, index) => (
                    <FinalAverage key={index} finalStat={finalStat}/>
                ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    // final stats is the array pulled from final-stats.reducer and it contains all the stats
    finalStats: showFinalStats
 });

export default connect(
    mapStateToProps
    )(GameFinishStats);