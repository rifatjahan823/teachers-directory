import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./About.css";
import image1 from "../../../assets/about/Rectangle 193.png";
import image2 from "../../../assets/about/Rectangle 193 (1).png";
import image3 from "../../../assets/about/Rectangle 193 (2).png";
import image4 from "../../../assets/about/Rectangle 193 (3).png";
import image5 from "../../../assets/about/Rectangle 193 (4).png";
import image6 from "../../../assets/about/Rectangle 193 (5).png";
import image7 from "../../../assets/about/Rectangle 193 (6).png";
import image8 from "../../../assets/about/Rectangle 193 (7).png";
import image9 from "../../../assets/about/Rectangle 193 (8).png";
import image10 from "../../../assets/about/Rectangle 193 (9).png";
import shapebackground from '../../../assets/home/shape-Background.png';
import { BsDot} from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section mt-5 pt-5'>
    <div className="container">
        <div  className='row g-4  align-items-center justify-content-center'>
        <div className='col-lg-5 order-2 order-lg-1 col-12'>
                <div>
                 <h1 className='common_title mb-3'>Who we are</h1>
                 <p  className='text-start common_paragraph'>               
                  In diam erat, malesuada sit amet sagittis vel, varius eu ante. Sed rutrum pretium magna sit amet dapibus. Pellentesque vitae diam sit amet nulla ultricies blandit vitae quis dui. Donec arcu massa, varius id ipsum a, lobortis lobortis nulla. Vestibulum hendrerit ex non <Link to="/">cursus lacinia</Link>
                 </p>
                 <button className="px-5 mt-3 common-btn">Learn more</button>
                </div>
        </div>
        <div className='col-lg-7 order-1 order-lg-2 col-12'>
          <h4 className="common_h4">Featured teachers</h4>
          <div className='feaured_teachers'>
           <div>
             <img src={image1} alt="feaured_teachers" className='img-fluid'/>
             <h6 className='fw-bold'>James Doe</h6>
              <p><BsDot className='dot-top'/> London</p>
               <p><BsDot className='dot-top dots'/> Engineering</p>                           
           </div>
           <div>
           <img src={image2} alt="feaured_teachers" className='img-fluid'/>
              <h6 className='fw-bold'>Martin R.</h6>            
               <p><BsDot className='dot-top'/> Exeter</p>
               <p><BsDot className='dot-top dots'/> Biology, Chemistry</p>
           </div>
           <div>
           <img src={image3} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Jonathan Doe</h6>            
           <p><BsDot className='dot-top'/> London</p>
           <p><BsDot className='dot-top dots'/> Art,Painting</p>
           </div>
           <div>
           <img src={image4} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Jane Doe</h6>            
           <p><BsDot className='dot-top'/> Brighton & Hove</p>
           <p><BsDot className='dot-top dots'/> Music,singing</p>
           </div>
           <div>
           <img src={image5} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Martin R.</h6>            
            <p><BsDot className='dot-top'/> London</p>
            <p><BsDot className='dot-top dots'/> Math, Science</p>
           </div>
           <div>
           <img src={image6} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Janet Doe</h6>            
            <p><BsDot className='dot-top'/> Menchester</p>
            <p><BsDot className='dot-top dots'/> Accounting</p>
           </div>
           <div>
           <img src={image7} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>James Doe</h6>            
            <p><BsDot className='dot-top'/> Cambridge</p>
            <p><BsDot className='dot-top dots'/> Music</p>
           </div>
           <div>
           <img src={image8} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Julia Doe</h6>
           
            <p><BsDot className='dot-top'/> Leeds</p>
            <p><BsDot className='dot-top dots'/> Coding,web design</p>
           </div>
           <div>
           <img src={image9} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Martin R.</h6>            
            <p><BsDot className='dot-top'/> London</p>
            <p><BsDot className='dot-top dots'/> Math,Science</p>
           </div>
           <div>
           <img src={image10} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Jane Doe</h6>            
           <p><BsDot className='dot-top'/> Brighton & Hove</p>
           <p><BsDot  className='dot-top dots'/> Music,singing</p>
           </div>                  
          </div>    
        </div>        
    </div>
    </div>
    <div className='shape-img'>
    <img className='img-fluid' src={shapebackground} alt="" />
    </div>
    </div>
  )
}

export default About;