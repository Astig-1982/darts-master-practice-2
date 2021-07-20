import React from 'react';
import { connect } from 'react-redux';

import './the-target.styles.css';

import { setCurrentTarget } from '../../redux/target/target.actions';

const TheTarget = ({ theTarget, setCurrentTarget }) => {
    return(
        <div className={`${isNaN(parseInt(theTarget)) ? 'red' : ''} ${parseInt(theTarget) % 2 ? 'black' : 'yellow'}
        target-holder`} onClick={() => setCurrentTarget(theTarget)}><span className='target'>{theTarget}</span></div>
    );
};

const mapDispatchToProps = dispatch => ({
    setCurrentTarget: target => dispatch(setCurrentTarget(target))  
});

export default connect(
    null,
    mapDispatchToProps
    )(TheTarget);
