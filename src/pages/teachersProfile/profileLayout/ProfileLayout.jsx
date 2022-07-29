import React from 'react';
import {Link} from "react-router-dom";
import "./ProfileLayout.css";
import {Table} from "react-bootstrap";
import { BsDot,BsSquare,BsCheckSquareFill} from "react-icons/bs";
 import profile from ".././../../assets/search-teacher/teachers-1.png";
 import twitter from ".././../../assets/search-teacher/Path 298 (2).png";
 import linkedin from ".././../../assets/search-teacher/Path 298 (1).png";
 import facebook from ".././../../assets/search-teacher/Path 298 (3).png";
 import cursor from ".././../../assets/search-teacher/Path 298.png";
 import pdf from ".././../../assets/search-teacher/pdf.png";
 import doc from ".././../../assets/search-teacher/doc.png";
 import ppt from ".././../../assets/search-teacher/ppt.png";
 import {FaRegHeart,FaMousePointer,FaFacebookF,FaLinkedinIn,FaTwitter} from "react-icons/fa";


const ProfileLayout = () => {
  return (
    <div className="container-fluid px-4 profile-section">
      <div className="row">
      <div className=' col-lg-8 col-12'>
        <div className="info_section card h-100">
        <div className="d-flex justify-content-between profile_intro">
           <div className="profile_image">
            <img src={profile} alt="profile_image" className=""/>
           </div>
           <div className="profile_content">
           <h4>Jhon D. <span className="text-info">Math Teacher</span></h4>
           <p><BsDot className='dot-top'/><span> Soho, London</span> <BsDot className='dot-top dots'/><span> Full-Time</span> <FaRegHeart style={{color:'pink'}}/></p>
           <hr/>
            <button className="common-btn m-1">15 year's experience</button>
            <button className="common-btn m-1">Primary teacher HoD</button>
            <br/>
            <button className="common-btn dbs-btn m-1">DBS checked</button>
            <button className="common-btn m-1">Replies in 3 hours</button>
            <button className="common-btn full-btn m-1">Full time</button>
             <br/>
            <button className="common-btn m-1">Head of department</button>
           </div>
        </div>
    
        </div>      
      </div>
      <div className='col-lg-4 col-12 '>
      <div className="info_section card h-100">
      <h4>Schedule</h4>
      <hr/>
      <div>
        
        {/* body  */}
        <div  className='table_body'>
        <div className="first-div"></div>
         <div>Mon</div>
         <div>Tue</div>
         <div>Wed</div>
         <div>Thu</div>
         <div>Fri</div>
         <div>Sat</div>
         <div>Sun</div>
        <div className="first-div">Morning pre 12pm</div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsSquare className=' check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsSquare className=' check_mark'/></div>
        <div className="first-div">Afternoon 1-5pm</div>
        <div><BsSquare className=' check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsSquare className=' check_mark'/></div>        
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsSquare className=' check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>           
        </div>
        
      </div>
       
      </div>       
      </div>
    </div>
    <div className="row">
      <div className='col-md-8'>
        <div className="info_section card h-100">
        <h4>About me</h4>
         <hr/>
         <p className="m-2 text-start">
         Maecenas tempus, ligula eget dapibus viverra, tellus risus fringilla lacus, a pellentesque lorem quam vitae dolor. Ut ut sapien quis tortor fringilla interdum. Nam at gravida sem. In ultricies ante non enim rhoncus, gravida tempor dolor varius. Cras vitae sapien et neque tristique vehicula volutpat vitae ante. Ut convallis id dui nec vestibulum. Sed fringilla accumsan est, ac auctor tortor interdum sit amet.In nibh odio, pellentesque ut eros velPraesent at justo nulla. Aenean sagittis posuere nibh eget fermentum. Mauris vulputate ultrices diam ac fringilla. Curabitur ac nunc vitae neque ultricies ornare.Donec turpis arcu, imperdiet sed diam quis, malesuada tincidunt metus. Maecenas lacinia laoreet ipsum, in ornare est congue sed. Aenean quis ligula nec quam molestie venenatis ut at felis. Nunc eleifend egestas...<Link to="/">Read more</Link>         
         </p>
        </div>      
      </div>
      <div className='col-md-4'>
      <div className="info_section card h-100">
      <h4>Message Jhon</h4>
      <hr/>
      <p className=''>Write a message <span className="text-secondary">(Usually replies in 3 hours)</span></p>
       <form className="form">
        <textarea name="" placeholder='Hi, Jhon!'/>
        <button className="common-btn mt-2" type='submit'>Send message</button>
       </form>
      </div>       
      </div>
    </div>
    <div className="row">
      <div className='col-md-8'>
        <div className="info_section card h-100">
        <h4>Subjects</h4>
         <hr/>
         <Table bordered>
      <thead>
        <tr>           
          <th>Subject</th>
          <th>Level taught</th>          
        </tr>
      </thead>
      <tbody>
        <tr>          
          <td>Math</td>
          <td>primary,secondary,GCSE</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>secondary, Further education</td>           
        </tr>
        <tr>
          <td>Computing</td>
          <td>Further education</td>           
        </tr>
      </tbody>
    </Table>
      </div>
       
      </div>
      <div className='col-md-4'>
      <div className="info_section card h-100">
      <h4>Jhon's social Links</h4>
      <hr/>
      <div className="social_link">
      <img src={cursor} alt="social_links" className='image_icon'/>
        <FaMousePointer className='social_icon cursor'/>
        <Link to="">teacherjohndoe.co.uk</Link>
      </div>
      <div className="social_link">
      <img src={linkedin} alt="social_links" className='image_icon'/>
        <FaLinkedinIn className='social_icon linkedin'/>
        <Link to="">www.linkedin.com/in/johndoe/</Link>
      </div>
      <div className="social_link">
        <img src={twitter} alt="social_links" className='image_icon'/>
        <FaTwitter className='social_icon twitter'/>
        <Link to="">twitter.com/teacherjohndoe</Link>
      </div>     
      <div className="social_link">
      <img src={facebook} alt="social_links" className='image_icon'/>
        <FaFacebookF className='social_icon facebook'/>
        <Link to="">www.facebook.com/john.doe/</Link>
      </div>
      
      </div>       
      </div>
    </div>
    <div className="row">
      <div className='col-md-8'>
        <div className="info_section card h-100">
        <h4>Educational achievements</h4>
         <hr/>
         <Table bordered>
      <thead>
        <tr>           
          <th>Awards</th>
          <th>Sponsor</th>          
          <th>Year</th>          
        </tr>
      </thead>
      <tbody>
        <tr>          
          <td>Global Teacher Prize</td>
          <td>Varkey foundation</td>
          <td>2016</td>
        </tr>
        <tr>
          <td>Internationa School Awards</td>
          <td>British council</td>           
          <td>2013</td>           
        </tr>
        <tr>
          <td>AoC Becon Awards</td>
          <td>Association of colleges</td>           
          <td>2001</td>           
        </tr>
      </tbody>
      </Table>
      <h5 className='text-secondary'>Files</h5>
     <div className='files_grid'>
     <div>
      <img src={pdf} alt="pdf" className='img-fluid'/>
        <span> Academic paper on a specific subject</span>
      </div>
      <div>
       <img src={doc} alt="pdf" className='img-fluid'/>
        <span> College research on subject</span>
      </div>
      
      <div>
      <img src={ppt} alt="ppt" className='img-fluid'/>
        <span> Presentation on subject</span>
      </div>
       
     </div>
      </div>      
      </div>     
    </div>
    <div className="row">
      <div className='col-md-8'>
        <div className="info_section card h-100">
        <h4>Qualifications</h4>
         <hr/>
         <Table bordered>
      <thead>
        <tr>           
          <th>University</th>
          <th>Subject</th>          
          <th>Level</th>          
        </tr>
      </thead>
      <tbody>
        <tr>          
          <td>Brunel University London</td>
          <td>BSc (Hons) Mathematics and Statistics with
              Management
           </td>
          <td>Degree</td>
        </tr>
        <tr>
          <td>London University</td>
          <td>Advanced Sciences</td>           
          <td>B</td>           
        </tr>
        
      </tbody>
    </Table>
         <Table bordered>
      <thead>
        <tr>           
          <th>School</th>
          <th>Subject</th>          
          <th>Level</th>          
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>Alleyn's School</td>
          <td>Physics and Maths A-Levels</td>           
          <td>A</td>           
        </tr>       
      </tbody>
    </Table>
    <h5 className='text-secondary'>Files</h5>
     <div className='files_grid'>
      <div>
       <img src={doc} alt="pdf" className='img-fluid'/>
        <span> College research on subject</span>
      </div>
      <div>
      <img src={pdf} alt="pdf" className='img-fluid'/>
        <span> Academic paper on a specific subject</span>
      </div>
      <div>
      <img src={ppt} alt="ppt" className='img-fluid'/>
        <span> Presentation on subject</span>
      </div>
      <div>
      <img src={doc} alt="doc" className='img-fluid'/>
        <span> Teachers' Day speech notes</span>
      </div>
     </div>
        </div>      
      </div>     
    </div>
    <div className="row">
      <div className='col-md-8'>
        <div className="info_section card h-100">
        <h4>Resume</h4>
         <hr/>
         <div className="d-flex justify-content-between align-items-center">
          <div>
            <img src={pdf} alt="pdf" className='img-fluid'/>
            <span> 2022 Curriculam Vitae</span>
          </div>
          <div>
          <img src={doc} alt="pdf" className='img-fluid'/>
            <span> Cover letter for maths teacher application</span>
          </div>
           
         </div>
        </div>      
      </div>     
    </div>
    </div>
  )
}

export default ProfileLayout;

 