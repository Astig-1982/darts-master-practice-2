import React from 'react';
import { Link } from 'react-router-dom';

import './home-page.styles.css';

const HomePage = () => {
    return(
        <div className='home-page'>
            <h1>DARTS MASTER PRACTICE II</h1>
            <div className='action-buttons'>
                <Link to='/choose-target'>
                    <button className='start-button'>START</button>
                </Link>
                <Link to='/about'>
                    <button className='start-button'>ABOUT</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;