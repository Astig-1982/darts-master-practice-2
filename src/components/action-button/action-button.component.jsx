import React from 'react';

import './action-button.styles.css';

const ActionButton = ({ children, chooseTargetButton, finishButton, ...otherProps }) => {
    return(
        <button className={`${chooseTargetButton ? 'choose-target-button' : ''} ${finishButton ? 'finish-button' : ''} 
            action-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default ActionButton;