import React from 'react';
import {Link} from "react-router-dom";
import "./ProfileLayout.css";
import {Table} from "react-bootstrap";
import { BsDot,BsSquare,BsCheckSquareFill,BsCheckCircle,BsArrowLeft,BsArrowRight} from "react-icons/bs";
import profile from ".././../../assets/search-teacher/teachers-1.png";
import twitter from ".././../../assets/search-teacher/Path 298 (2).png";
import linkedin from ".././../../assets/search-teacher/Path 298 (1).png";
import facebook from ".././../../assets/search-teacher/Path 298 (3).png";
import cursor from ".././../../assets/search-teacher/Path 298.png";
import pdf from ".././../../assets/search-teacher/pdf.png";
import doc from ".././../../assets/search-teacher/doc.png";
import ppt from ".././../../assets/search-teacher/ppt.png";
import {FaRegHeart,FaMousePointer,FaFacebookF,FaLinkedinIn,FaTwitter} from "react-icons/fa";
import TeachersSearchBar from '../../shared/teachersSearchBar/TeachersSearchBar';
  
const ProfileLayout = () => {
  return (
    <>
     <TeachersSearchBar></TeachersSearchBar>

    <div className="container-fluid  profile-section px-4">
        <div className='d-flex justify-content-between align-items-center'>
         <Link  className='text-decoration-none back_btn' to="/search_teacher"><BsArrowLeft/> Previous teacher</Link>
         <Link  className='text-decoration-none back_btn' to="">Next teacher <BsArrowRight/></Link>
        </div>
    <div className="row mb-3">
      <div className=' col-md-8 col-12 mb-3'>
        <div className="info_section card">
        <div className="d-flex profile_intro">
           <div className="profile_image">
            <img src={profile} alt="profile_image" className=""/>
           </div>
           <div className="profile_content">
           <h3 className='mt-2 profile_name'>Jhon D. <span style={{color:'#2697FF'}}>Math Teacher</span></h3>
           <p className='profile_name '><BsDot className='dot-1'/><span> Soho, London</span> <BsDot className='dot-2'/><span> Full-Time</span> <FaRegHeart style={{color:'#E882A5'}}/></p>
           <hr/>
            <button className="common-btn m-1 common color">15 year's experience</button>
            <button className="common-btn m-1 common color">Primary teacher HoD</button>
            <br/>
            <button className="common-btn dbs-btn m-1 common"><BsCheckCircle className='fs-5'/> DBS checked</button>
            <button className="common-btn m-1 replies-btn common color">Replies in 3 hours</button>
            <button className="common-btn full-btn m-1 common ">Full time</button>
             <br/>
            <button className="common-btn m-1 common color ">Head of department</button>
           </div>
        </div>
    
        </div>      
      </div>
      <div className='col-md-4 col-12 mb-3'>
      <div className="info_section card h-100">
      <h4>Schedule</h4>
      <hr/>
      <div>
        
        {/* body  */}
        <div  className='table_body'>
        <div className="first-div "></div>
         <div className=''>Mon</div>
         <div className=''>Tue</div>
         <div className=''>Wed</div>
         <div className=''>Thu</div>
         <div className=''>Fri</div>
         <div className=''>Sat</div>
         <div className=''>Sun</div>
        <div className="first-div ">Morning pre 12pm</div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsSquare className=' check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsCheckSquareFill className='check_mark'/></div>
        <div><BsSquare className=' check_mark'/></div>
        <div className="first-div ">Afternoon 1-5pm</div>
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
    <div className="row my-3">
      <div className='col-md-8 my-3'>
        <div className="info_section card h-100">
        <h4>About me</h4>
         <hr/>
         <p className="m-2 text-start common_paragraph">
         Maecenas tempus, ligula eget dapibus viverra, tellus risus fringilla lacus, a pellentesque lorem quam vitae dolor. Ut ut sapien quis tortor fringilla interdum. Nam at gravida sem. In ultricies ante non enim rhoncus, gravida tempor dolor varius. Cras vitae sapien et neque tristique vehicula volutpat vitae ante. Ut convallis id dui nec vestibulum. Sed fringilla accumsan est, ac auctor tortor interdum sit amet.In nibh odio, pellentesque ut eros velPraesent at justo nulla. Aenean sagittis posuere nibh eget fermentum. Mauris vulputate ultrices diam ac fringilla. Curabitur ac nunc vitae neque ultricies ornare.Donec turpis arcu, imperdiet sed diam quis, malesuada tincidunt metus. Maecenas lacinia laoreet ipsum, in ornare est congue sed. Aenean quis ligula nec quam molestie venenatis ut at felis. Nunc eleifend egestas...<Link to="/" className="text-decoration-none"> Read more</Link>         
         </p>
        </div>      
      </div>
      <div className='col-md-4 my-3'>
      <div className="info_section card h-100">
      <h4>Message Jhon</h4>
      <hr/>
      <p className=''>Write a message <span className="text-secondary">(Usually replies in 3 hours)</span></p>
       <form className="form">
        <textarea name="" placeholder='Hi, Jhon!'/>
        <button className="message-btn mt-2" type='submit'>Send message</button>
       </form>
      </div>       
      </div>
    </div>
    <div className="row my-3">
      <div className='col-md-8 my-3'>
        <div className="info_section card h-100">
        <h4>Subjects</h4>
         <hr/>
         <Table bordered className="mt-3">
      <thead>
        <tr>           
          <th className="py-3  text-secondary ps-3">Subject</th>
          <th className="py-3 text-secondary ps-3">Level taught</th>          
        </tr>
      </thead>
      <tbody>
        <tr>          
          <td className="py-3 ps-3">Math</td>
          <td className="py-3 ps-3">primary,secondary,GCSE</td>
        </tr>
        <tr>
          <td className="py-3 ps-3">Science</td>
          <td className="py-3 ps-3">secondary, Further education</td>           
        </tr>
        <tr>
          <td className="py-3 ps-3">Computing</td>
          <td className="py-3 ps-3">Further education</td>           
        </tr>
      </tbody>
    </Table>
      </div>
       
      </div>
      <div className='col-md-4 my-3'>
      <div className="info_section card h-100">
      <h4>Jhon's social Links</h4>
      <hr/>
      <div className="social_link ">
      <img src={cursor} alt="social_links" className='image_icon'/>
        <FaMousePointer className='social_icon cursor'/>
        <Link to="">teacherjohndoe.co.uk</Link>
      </div>
      <div className="social_link ">
      <img src={linkedin} alt="social_links" className='image_icon'/>
        <FaLinkedinIn className='social_icon linkedin'/>
        <Link to="">www.linkedin.com/in/johndoe/</Link>
      </div>
      <div className="social_link ">
        <img src={twitter} alt="social_links" className='image_icon'/>
        <FaTwitter className='social_icon twitter'/>
        <Link to="">twitter.com/teacherjohndoe</Link>
      </div>     
      <div className="social_link ">
      <img src={facebook} alt="social_links" className='image_icon'/>
        <FaFacebookF className='social_icon facebook'/>
        <Link to="">www.facebook.com/john.doe/</Link>
      </div>
      
      </div>       
      </div>
    </div>
    <div className="row my-3">
      <div className='col-md-8 my-3'>
        <div className="info_section card h-100">
        <h4>Educational achievements</h4>
         <hr/>
         <Table bordered>
      <thead>
        <tr>           
          <th className='text-secondary ps-3'>Awards</th>
          <th className='text-secondary ps-3'>Sponsor</th>          
          <th className='text-secondary ps-3'>Year</th>          
        </tr>
      </thead>
      <tbody>
        <tr>          
          <td className='py-3 ps-3'>Global Teacher Prize</td>
          <td className='py-3 ps-3'>Varkey foundation</td>
          <td className='py-3 ps-3'>2016</td>
        </tr>
        <tr>
          <td className='py-3 ps-3'>Internationa School Awards</td>
          <td className='py-3 ps-3'>British council</td>           
          <td className='py-3 ps-3'>2013</td>           
        </tr>
        <tr>
          <td className='py-3 ps-3'>AoC Becon Awards</td>
          <td className='py-3 ps-3'>Association of colleges</td>           
          <td className='py-3 ps-3'>2001</td>           
        </tr>
      </tbody>
      </Table>
      <h5 className='text-secondary'>Files</h5>
     <div className='files_grid'>
     <div>
      <img src={pdf} alt="pdf" className='img-fluid'/>
        <span className='file_span'> Academic paper on a specific subject</span>
      </div>
      <div>
       <img src={doc} alt="pdf" className='img-fluid'/>
        <span className='file_span'> College research on subject</span>
      </div>
      
      <div>
      <img src={ppt} alt="ppt" className='img-fluid'/>
        <span className='file_span'> Presentation on subject</span>
      </div>
       
     </div>
      </div>      
      </div>     
    </div>
    {/* qualification section  */}
    <div className="row my-3">
      <div className='col-md-8 my-3'>
        <div className="info_section card h-100">
        <h4>Qualifications</h4>
         <hr/>
         {/* first table  */}
         <Table bordered>
      <thead>
        <tr>           
          <th className='text-secondary  py-3 table_30 ps-3'>University</th>
          <th  className='text-secondary  py-3 table_80 ps-3'>Subject</th>          
          <th className='text-secondary  py-3 table_20 ps-3'>Level</th>          
        </tr>
      </thead>
      <tbody>
        <tr>          
           <td className='py-3 table_30 ps-3'>Brunel University London</td>
           <td className='py-3 table_80 ps-3'> BSc(Hons) Mathematics and   Statistics with Management             
           </td>
          <td className='py-3 table_20 ps-3'>Degree</td>
        </tr>
        <tr className="mt-3">
          <td className='py-3 table_30 ps-3'>London University</td>
          <td className='py-3 table_80 ps-3'>Advanced Sciences</td>           
          <td className='py-3 table_20 ps-3'>B</td>           
        </tr>     
      </tbody>
      {/* second table  */}
    </Table>
         <Table bordered>
      <thead>
        <tr>           
          <th className='text-secondary  py-3 table_30 ps-3'>School</th>
          <th className='text-secondary  py-3 table_80 ps-3'>Subject</th>          
          <th className='text-secondary  py-3 table_20 ps-3'>Level</th>          
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td className='py-3 table_30 ps-3'>Alleyn's School </td>
          <td className='py-3 table_80 ps-3' >Physics and Maths A-Levels</td>           
          <td className='py-3 table_20 ps-3'>A</td>           
        </tr>       
      </tbody>
    </Table>
    <h5 className='text-secondary'>Files</h5>
     <div className='files_grid'>
      <div>
       <img src={doc} alt="pdf" className='img-fluid'/>
        <span className='file_span'> College research on subject</span>
      </div>
      <div>
      <img src={pdf} alt="pdf" className='img-fluid'/>
        <span className='file_span'> Academic paper on a specific subject</span>
      </div>
      <div>
      <img src={ppt} alt="ppt" className='img-fluid'/>
        <span className='file_span'> Presentation on subject</span>
      </div>
      <div>
      <img src={doc} alt="doc" className='img-fluid'/>
        <span className='file_span'> Teachers' Day speech notes</span>
      </div>
     </div>
        </div>      
      </div>     
    </div>
    <div className="row my-3">
      <div className='col-md-8 mb-5 mt-3'>
        <div className="info_section card h-100">
        <h4>Resume</h4>
         <hr/>
         <div className="files_grid">
          <div>
            <img src={pdf} alt="pdf" className='img-fluid'/>
            <span className='file_span'> 2022 Curriculam Vitae</span>
          </div>
          <div>
          <img src={doc} alt="pdf" className='img-fluid'/>
            <span className='file_span'> Cover letter for maths teacher application</span>
          </div>
           
         </div>
        </div>      
      </div>     
    </div>
    </div>
    </>
  )
}

export default ProfileLayout;

 