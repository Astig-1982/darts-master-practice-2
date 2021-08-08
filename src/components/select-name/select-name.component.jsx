import React from 'react';
import { connect } from 'react-redux';

import './select-name.styles.css';

import { setName } from '../../redux/name/name-action';

const SelectName = ({ setName }) => {
    return(
        <input
            className='select-name'
            placeholder='Enter your name'
            onChange={e => {{setName(e.target.value)}}}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    // this action takes the name inputed in the input field and takes it to name.reducer
    setName: theName => dispatch(setName(theName))  
});

export default connect(
    null,
    mapDispatchToProps
    )(SelectName);