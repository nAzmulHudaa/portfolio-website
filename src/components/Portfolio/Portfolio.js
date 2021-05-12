import React from 'react';
import './Portfolio.css';
import website from '../../images/website.png';
import football from '../../images/football.png';
import rock from '../../images/rock.png';
import slider from '../../images/slider.png';
import home from '../../images/home.png';
import { Button, Card } from 'react-bootstrap';
import night from '../../images/night.png';



const Portfolio = () => {
    return (
        <div className="portfolio font">
            <h2 className='spacing text-center text-white mb-5'>MY <span className='name'>PORTFOLIO</span></h2>
            <div className="row container m-auto text-center portfolio-display">
                  <div className="col-md-4 portfolio-box">
                     <img src={website} alt="" className='w-100' />
                     <h4 className='primary-color mt-4'>Home Cleaning Website</h4>
                     <p>Developed a service providing dynamic website using MERN stack. Created UI using React.js, HTML5, CSS3 and Bootstrap. Admin Panel, Login system and CRUD operation has been implemented</p>
                     <button className='learnMoreBtn webBtn'>Live Website</button>
                  </div>      
                  <div className="col-md-4 portfolio-box">
                     <img src={rock} alt=""  className='w-100 '/>
                     <h4 className='primary-color mt-4'>Hard Rock Website</h4>
                     <p>Developed a dynamic website using Javascript and Rest API. Created UI using Javascript, HTML and CSS. Functionality applied using Javascript. Users can search their favourite songs and they can listen it for 30 seconds.</p>
                     <button className='learnMoreBtn rockBtn'>Live Website</button>
                  </div>      
                  <div className="col-md-4 portfolio-box">
                      <img src={football} alt="" className='w-100 ' />
                      <h4 className ='primary-color mt-4'>Team Tracker</h4>
                      <p className="primary-color">Developed a dynamic website using React.js and React Router.Created UI designs using HTML css and React js. This project is based on React Router. I have made this dynamic website using React Router</p>
                      <button className='learnMoreBtn footballBtn'>Live Website</button>
                  </div>      
            </div>
            <div className="row container m-auto text-center portfolio-display">
                  <div className="col-md-4 portfolio-box">
                     <img src={slider} alt="" className='w-100' />
                     <h4 className='primary-color mt-4'>Slider Creating Website</h4>
                     <p>Developed a  dynamic website using React js. Created UI using React.js, HTML5, CSS3 and Bootstrap.</p>
                     <button className='learnMoreBtn webBtn'>Live Website</button>
                  </div>      
                  <div className="col-md-4 portfolio-box">
                     <img src={home} alt=""  className='w-100 '/>
                     <h4 className='primary-color mt-4'>Home Decor Website</h4>
                     <p>Developed a static website using HTML,CSS and Bootstrap. Created UI using HTML , CSS & Bootstrap.</p>
                     <button className='learnMoreBtn rockBtn'>Live Website</button>
                  </div>      
                  <div className="col-md-4 portfolio-box">
                      <img src={night} alt="" className='w-100 ' />
                      <h4 className ='primary-color mt-4'> Nightwatch Website</h4>
                      <p>Developed a static website using HTML,CSS and Bootstrap. Created UI using HTML , CSS & Bootstrap.</p>
                      <button className='learnMoreBtn footballBtn'>Live Website</button>
                  </div>      
            </div>
        </div>

    );
};

export default Portfolio;