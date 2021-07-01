import React from 'react';
import { connect } from 'react-redux';

import { setCurrentTarget } from '../../redux/target/target.actions';

const TheTarget = ({ theTarget, setCurrentTarget }) => {
    console.log(theTarget)
    return(
        <div className='target' onClick={() => setCurrentTarget(theTarget)}>{theTarget}</div>
    );
};

const mapDispatchToProps = dispatch => ({
    setCurrentTarget: target => dispatch(setCurrentTarget(target))  
});

export default connect(
    null,
    mapDispatchToProps
    )(TheTarget);