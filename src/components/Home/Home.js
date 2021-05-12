import React from 'react';
import ParticleBackground from '../../ParticleBackground';
import About from '../About/About';
import Header from '../Header/Header';
import HomeContent from '../HomeContent/HomeContent';
import KeyDetails from '../KeyDetails/KeyDetails';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import './Home.css'
const Home = () => {
    return (
        
        <div className='home '>
            <div className="header-banner">
                <Header></Header>
            </div>
            <div className="sections">
                <About></About>
                <KeyDetails></KeyDetails>
                <Portfolio></Portfolio>
            </div>
        </div>
    );
};

export default Home;