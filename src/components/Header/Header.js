import React from 'react';
import HomeContent from '../HomeContent/HomeContent';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeContent></HomeContent>
        </div>
    );
};

export default Header;