import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showFinalStats } from '../../redux/final-stats/final-stats.selectors';

import FinalAverage from '../final-average/final-average.component';

import './game-finish-stats.styles.css';

const GameFinishStats = ({finalAverages}) => {
    console.log(finalAverages)
    return(
        <div className='game-finish-stats'>
            {finalAverages.map((finalAverage) => (
                    <FinalAverage key={finalAverage} finalAverage={finalAverage}/>
                ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    finalAverages: showFinalStats
 });

//const mapDispatchToProps = dispatch => ({
//    setName: theName => dispatch(setName(theName))  
//});

export default connect(
    mapStateToProps
    )(GameFinishStats);