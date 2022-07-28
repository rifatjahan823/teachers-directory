import React from 'react';
import './Workflow.css';
import circle1 from '../../../assets/home/circle-1.png'
import circle2 from '../../../assets/home/circle-2.png'
import circle3 from '../../../assets/home/circle-3.png';
import one from '.././../../assets/home/1.png';
import two from '.././../../assets/home/2.png';
import three from '.././../../assets/home/3.png';

const Workflow = () => {
  return (
    <div className='workflow-section'>
      <div className='container'>
        <h2 className='common-title'>How it works</h2>
        <div className='row g-4 align-items-center justify-content-center'>
          <div className='col-lg-4 col-md-6 col-12'>
              <div className='circle'>
              <img className='img-fluid d-block m-auto' src={circle1} alt="" />
                <div className='circle-1'>
                  <h5>Nam ornare leo eu turpis</h5>
                <p>Nulla suscipit fermentum diam nec interdum. Nullam erat sapien, pulvinar vel felis eu, ultrices mattis eros. Suspendisse consequat, elit convallis vulputate pellentesque.</p>
                </div>
                <div className='inner-content'>
                  <img src={one} alt="" />
                </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <div className='circle'>
            <img className='img-fluid d-block m-auto' src={circle2} alt="" />
            <div className='circle-2 '>
                 <h5>Praesent diam ex</h5>
                <p>In eget aliquam urna. Ut viverra erat nec ante dictum, ut rhoncus erat imperdiet. Praesent vel pretium neque.</p>
            </div>
            <div className='inner-content'>
              <img   src={two} alt="" />
            </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-12'>
            <div className=' circle'>
               <img className='img-fluid d-block m-auto' src={circle3} alt="" />
                <div className='circle-3'>
                <h5>Maecenas tempor vulputate tellus id</h5>
                <p>Fusce non euismod risus. Praesent velit erat, convallisamet rutrum ut, pulvinar molestie libero. Morbi tempus quam vel pretium viverra.</p>
                </div>
                <div className='inner-content'>
                  <img src={three} alt="" />
                </div>
            </div>
          </div>
        </div>
        <button className='common-btn d-block m-auto mt-5 '>Find a teacher </button>
      </div>
    </div>
  )
}

export default Workflow