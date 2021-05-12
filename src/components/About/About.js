import React, { useEffect } from 'react';
import './About.css'
import me from '../../images/me.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
          duration :2000
        });
      }, []);

    return (
        <section className='about  font' data-aos ='fade-right'>
            <h1 className='text-center mt-5 mb-5'>About Me</h1>
            <div className=''>
                <div className=" about-sec ">
                    <div className="row justify-content-center">
                        <div className="col-md-4 mr-2">
                            <img src={me} alt="" className='w-75 mt-4 ml-md-5 ml-5 mb-md-0 mb-3 rounded' />
                        </div>
                        <div className="col-md-5 about-description">
                            <h2 className='mt-3 mb-4 about-main'>Hello This is <span className='name ml-md-2 ml-0'>Rimon</span></h2>
                            <p className='description-color mt-3 mb-3'>A young dynamic person seeking challenging positions in the field of Full Stack Web Developer where I can learn and grow my skills .Strong in Design with intuitive problem solving. Profficiant in Javascript and React Js.Ability to translate business requirements into technical solutions.</p>
                            
                            <div className='details mt-4 mb-4'>
                                <h6>Birthday: <p>21st March 1999</p></h6>
                                <h6>Age: <p>22</p></h6>
                                <h6>Address: <p>Tongi,Gazipur</p></h6>
                                <h6>Phone: <p>+8801312595204</p></h6>
                                <h6>Email: <p>nazmulhuda0327@gmail.com</p></h6>
                                <h6>Study: <p>BSc in CSE</p></h6>
                                <h6>Freelance: <p>Available</p></h6>
                            </div>
                            <button className='learnMoreBtn mb-3'>Learn More</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;