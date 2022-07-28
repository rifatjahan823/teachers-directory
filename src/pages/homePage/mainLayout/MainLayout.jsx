import React from 'react';
import About from '../about/About';
import HeroSection from '../heroSection/HeroSection';
import Testimonial from '../testimonial/Testimonial';
import Workflow from '../workflow/Workflow';
 
const MainLayout = () => {
  return (
    <div>
       <HeroSection></HeroSection>
       <About></About>
       <Workflow></Workflow>
       <Testimonial></Testimonial>      
    </div>
  )
}

export default MainLayout;