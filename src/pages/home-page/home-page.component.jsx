import React from 'react';
import { Link } from 'react-router-dom';
import ActionButton from '../../components/action-button/action-button.component';

import './home-page.styles.css';

const HomePage = () => {
    return(
        <div className='home-page'>
            <h1 className='home-title'>DARTS MASTER PRACTICE II</h1>
            <div className='action-buttons'>
                <Link to='/choose-target'>
                    <ActionButton homeButtons>START</ActionButton>
                </Link>
                <Link to='/about'>
                    <ActionButton homeButtons>ABOUT</ActionButton>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;