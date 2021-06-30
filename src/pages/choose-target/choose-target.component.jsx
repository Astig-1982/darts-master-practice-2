import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


import './choose-target.styles.css';
import { setCurrentTarget } from '../../redux/target/target.actions';

const chooseTarget = () => {
    return(
        <div>
            <h2>Choose Target</h2>
            <div className='targets'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setCurrentTarget: target => dispatch(setCurrentTarget(target))  
});

export default connect(
    null, 
    mapDispatchToProps
    )(chooseTarget);

