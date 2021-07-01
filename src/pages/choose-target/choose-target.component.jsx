import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './choose-target.styles.css';

import { allTargets } from '../../redux/target/target.selectors';
import { setCurrentTarget } from '../../redux/target/target.actions';
import { selectCurrentTarget } from '../../redux/target/target.selectors';
import TheTarget from '../../components/theTarget/the-target.component';



const chooseTarget = ({ allTargets, currentTarget }) => {
    return(
        <div className='choose-target-div'>
            <h2>Choose Target</h2>
            <div className='targets'>
                {allTargets.map((theTarget) => (
                    <TheTarget key={theTarget} theTarget={theTarget} />
                ))}
            </div>
            <div className='current-target'>Target Chosen: {currentTarget}</div>
            <Link to='/game-page'>
                <button>Start the game</button>
            </Link>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    allTargets: allTargets,
    currentTarget: selectCurrentTarget
 });

const mapDispatchToProps = dispatch => ({
    setCurrentTarget: target => dispatch(setCurrentTarget(target))  
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(chooseTarget);

