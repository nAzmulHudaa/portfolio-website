import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './HomeContent.css'

const HomeContent = () => {

    return (
        <div className="col-md-6 m-auto text-center home-content justify-content-center">
           <div className="home-inner">
           <h1>Md Nazmul Huda <span>Rimon</span></h1>
            <span className='line'></span>
            <p>A young dynamic person seeking challenging positions in the field of Full Stack Web Developer where I can
            learn and grow my skills .Strong in Design with intuitive problem solving. Profficiant in Javascript and React Js.Ability to translate business requirements into technical solutions.</p>
            <button className='button'>Download Resume  <FontAwesomeIcon  icon={faDownload}></FontAwesomeIcon></button>
           </div>
        </div>
    );
};

export default HomeContent;