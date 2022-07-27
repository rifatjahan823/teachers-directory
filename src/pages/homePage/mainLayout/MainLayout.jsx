import React from 'react';
import HeroSection from '../heroSection/HeroSection';
import Support from '../support/Support';
import Testimonial from '../testimonial/Testimonial';
import Workflow from '../workflow/Workflow';
 

const MainLayout = () => {
  return (
    <div>
       <HeroSection></HeroSection>
       <Workflow></Workflow>
       <Testimonial></Testimonial>
       <Support></Support>
    </div>
  )
}

export default MainLayout