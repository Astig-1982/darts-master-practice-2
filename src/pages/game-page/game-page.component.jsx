import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectCurrentTarget } from '../../redux/target/target.selectors';
import { selectTheName } from '../../redux/name/name.selectors';

const gamePage = ({ currentTarget, theName }) => {
    console.log(currentTarget)
    return(
        <div>
            <h2>Name: {theName}</h2>
            <h2>Target {currentTarget}</h2>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
   currentTarget: selectCurrentTarget,
   theName: selectTheName
});

export default connect(mapStateToProps)(gamePage);