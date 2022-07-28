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

const About = () => {
  return (
    <div className="container overflow-hidden">
        <div  className='row'>
        <div className='col-md-5 d-flex align-items-center justify-content-center'>
                <div >
                 <h1 className="fw-bold my-4">Who we are</h1>
                 <p  className='text-start'>               
                  In diam erat, malesuada sit amet sagittis vel, varius eu ante. Sed rutrum pretium magna sit amet dapibus. Pellentesque vitae diam sit nulla ultricies blandit vitae quis dui. Donec arcu, varius id ipsum a, lobortis lobortis nulla. Vestibulum hendrerit ex non <Link to="/">cursus lacinia</Link>
                 </p>
                 <Button className="px-5 mt-3">Learn more</Button>
                </div>
        </div>
        <div className='col-md-7'>
          <h4>Featured teachers</h4>
          <div className='feaured_teachers'>
           <div>
             <img src={image1} alt="feaured_teachers" className='img-fluid'/>
             <h6 className='fw-bold'>James Doe</h6>
              <p>London</p>
               <p>Engineering</p>                           
           </div>
           <div>
           <img src={image2} alt="feaured_teachers" className='img-fluid'/>
              <h6 className='fw-bold'>Martin R.</h6>            
               <p>Exeter</p>
               <p>Biology,Chemistry</p>
           </div>
           <div>
           <img src={image3} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Jonathan Doe</h6>            
           <p>London</p>
           <p>Art,Painting</p>
           </div>
           <div>
           <img src={image4} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Jane Doe</h6>            
           <p>Brighton & Hove</p>
           <p>Music,singing</p>
           </div>
           <div>
           <img src={image5} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Martin R.</h6>            
            <p>London</p>
            <p>Math, Science</p>
           </div>
           <div>
           <img src={image6} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Janet Doe</h6>            
            <p>Menchester</p>
            <p>Accounting</p>
           </div>
           <div>
           <img src={image7} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>James Doe</h6>            
            <p>Cambridge</p>
            <p>Music</p>
           </div>
           <div>
           <img src={image8} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Julia Doe</h6>
           
            <p>Leeds</p>
            <p>Coding,web design</p>
           </div>
           <div>
           <img src={image9} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Martin R.</h6>            
            <p>London</p>
            <p>Math,Science</p>
           </div>
           <div>
           <img src={image10} alt="feaured_teachers" className='img-fluid'/>
           <h6 className='fw-bold'>Jane Doe</h6>            
           <p>Brighton & Hove</p>
           <p>Music,singing</p>
           </div>                  
          </div>    
        </div>        
    </div>
    </div>
  )
}

export default About;