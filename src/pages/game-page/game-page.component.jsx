import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { selectCurrentTarget } from '../../redux/target/target.selectors';

const gamePage = ({ currentTarget }) => {
    console.log(currentTarget)
    return(
        <div>
            <h2>Target {currentTarget}</h2>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
   currentTarget: selectCurrentTarget
});

export default connect(mapStateToProps)(gamePage);