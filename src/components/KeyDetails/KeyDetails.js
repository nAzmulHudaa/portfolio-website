import React, { useEffect } from 'react';
import './KeyDetails.css';
import react from '../../images/react.svg';
import js from '../../images/js.svg';
import node from '../../images/node.svg';
import mongo from '../../images/mongoDB.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const KeyDetails = () => {
    useEffect(() => {
        AOS.init({
          duration :3000
        });
      }, []);
    return (
       <div  className="KeyDetails container-fluid font spacing">
           <h2 className='primary-color text-center spacing heading'>KEYDETAILS ABOUT <span className='name spacing'>ME</span></h2>
           <div className="row justify-content-center text-center " data-aos = 'fade-up'>
               <div className="col-md-3">
                   <img src={js} alt="" className='w-25 rounded'/>
                   <h3 className='primary-color'><span className='js spacing'>Javascript</span> Lover</h3>
               </div>
               <div className="col-md-3">
                   <img src={react} alt=""className='w-25 rounded'/>
                   <h3 className='primary-color'><span className='react spacing'>React</span> Addicted</h3>
               </div>
               <div className="col-md-3">
                   <img src={node} alt="" className='w-25 rounded' />
                   <h3 className='primary-color '><span className='node spacing'>Database</span> in Blood</h3>
               </div>
               <div className="col-md-3">
                   <img src={mongo} alt="" className='w-25 rounded' />
                   <h3 className='primary-color '><span className='mongo spacing'>NoSQL</span> is Love</h3>
               </div>
           </div>
       </div>
    );
}

export default KeyDetails;