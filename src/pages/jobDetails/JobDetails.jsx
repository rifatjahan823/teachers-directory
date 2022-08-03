import React from 'react';
import { Link } from 'react-router-dom';
import TeachersSearchBar from '../shared/teachersSearchBar/TeachersSearchBar';
import { BsArrowLeft,BsArrowRight,BsDot} from "react-icons/bs";
import { AiOutlineBell} from "react-icons/ai";
import {FaMapMarkerAlt } from "react-icons/fa";
import {FaRegHeart,FaArrowRight,FaRegEnvelopeOpen} from "react-icons/fa";
import pdf from ".././../assets/search-teacher/pdf.png";
import doc from ".././../assets/search-teacher/doc.png";
import ppt from ".././../assets/search-teacher/ppt.png";
import "./JobDetails.css";
import detailsImage from ".././../assets/job-search/photo.png";
import { TiSocialFacebook,TiSocialTwitter,TiSocialLinkedin} from "react-icons/ti";
 
 

const JobDetails = () => {
  return (
         <>
         {/* serach bar */}
          <TeachersSearchBar></TeachersSearchBar>
          <div className="container-fluid  profile-section px-4">
            {/* left right arrow section  */}
           <div className='d-flex justify-content-between align-items-center'>
           <Link className='text-decoration-none fw-bold my-5' to=""><BsArrowLeft/> Previous teacher</Link>
           <Link className='text-decoration-none fw-bold my-5' to="">Next teacher <BsArrowRight/></Link>
           </div>
           {/* main content  */}
            <div className="row mb-3">
             <div className=' col-lg-8 col-12 mb-3'>
             <div className="info_section card">
              <div className='d-flex justify-content-between profile_intro'>
               <div className='job_image mx-1'>
                <img  src={detailsImage} alt="job_details" />
               </div>
               <div className="profile_content">
               <h3 className='profile_name'>Math Teacher <span className="text-info">London Business School</span></h3>
              <p className='profile_name text-secondary job_location'><BsDot className='dot-1'/> Regent's ParkLondonNW1 4SA <FaRegHeart style={{color:'#E882A5',marginLeft:'15px'}}/></p>
              <hr/>
              <p className='px-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fringilla lectus nec elementum. Suspendisse lobortis ultrices turpis at fermentum. Aliquam finibus consectetur sem, vitae efficitur sapien hendrerit a. Mauris nec lectus blandit, dictum metus ac, egestas nibh. Nam eu dolor eu felis pharetra semper sit amet ac arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis dolor ut nisl suscipit ullamcorper.  Pellentesque tristique sollicitudin semper. Aenean auctor facilisis quam, sit amet rhoncus nisi pharetra et. Donec elementum erat justo, sed cursus velit ullamcorper sed. Curabitur ullamcorper mi augue, non tincidunt purus ultricies in. Proin malesuada ultricies pretium.
              </p>
              <ul className='ul'>
                <li> <span className='span_paragraph'>Nullam lorem magna, pretium eget semper sed,  Nam et aliquam lorem. Vivamus commodo urna purus, a gravida nibh ultricies in.</span></li>
                <li><span className='span_paragraph'>
                Sed ultrices elit mi, id fermentum neque volutpat a. Aliquam commodo faucibus aliquam.</span></li>
                <li><span className='span_paragraph'>
                Nulla ut pretium turpis. Nunc suscipit urna et nibh  gravida molestie. In condimentum mollis hendrerit.</span></li>
              </ul>
              
            <p className='px-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fringilla lectus nec elementum. Suspendisse lobortis ultrices turpis at fermentum. Aliquam finibus consectetur sem, vitae efficitur sapien hendrerit a. Mauris nec lectus blandit, dictum metus ac, egestas nibh. Nam eu dolor eu felis pharetra semper sit amet ac arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla quis dolor ut nisl suscipit ullamcorper. Aenean hendrerit ex neque, pretium tincidunt risus porttitor ac. Ut tellus quam, ornare at lobortis nec, laoreet at tellus. Aliquam nec quam diam. Aenean tincidunt neque magna, non congue tellus viverra id. Pellentesque tristique sollicitudin semper.  
            </p>
           </div>
              </div>        
             </div>      
             </div>
             {/* about job section  */}
           <div className='col-lg-4 col-12 mb-3'>
           <div className="info_section card">
            <h4>About the job</h4>        
           </div>
           <div className='d-flex justify-content-around my-4'>
            <div className="arrow_content">
              <p className='text-secondary fs-5'>Posted</p>
              <p>01/07/2022</p>
            </div>
            <div><FaArrowRight className='text-info fs-3'/></div>
            <div className="arrow_content">
            <p className='text-secondary fs-5'>Clossing</p>
            <p>15/07/2022</p>
            </div>
            <div><FaArrowRight className='text-info fs-3'/></div>
            <div className="arrow_content">
            <p className='text-secondary fs-5'>Starts</p>
            <p>01/08/2022</p>
            </div>
            </div>
            <div className='card p-4 mt-2'>
              <p className='fw-bold text-secondary'>Salary </p>
              <p>£28,290 - £34,850 per annum </p>
               
              <p className='fw-bold text-secondary'>Hours</p>
              <p>Full-Time</p>
            
              <p className='fw-bold text-secondary'>Contract type</p>
              <p>Permanent</p>
              <hr/>
                <button className='save_btn py-3 my-4'>
                  <FaRegHeart/>  save to my job
                </button>
                <p className='fw-bold text-secondary text-center fs-5'>or</p>
                <Link to="" className='text-center mb-3'>
                https://www.london.edu/jobs-at-lbs
                </Link>
                <hr className='mt-4'/>
                <button className='alert_btn py-3 my-4'>
                <AiOutlineBell className='fs-4'/> Alert me when similar jobs are posted
                </button>
                <p className='fw-bold text-center my-4 text-secondary'>Share 
                 <FaRegEnvelopeOpen className='footer-top-icon '/> 
                <TiSocialTwitter className='footer-top-icon fs-3'/> <TiSocialLinkedin className='footer-top-icon fs-3'/> <TiSocialFacebook className='footer-top-icon fs-3'/></p>
            </div>           
           </div>          
            </div>
          {/* document section  */}
            <div className="row mb-3">
             <div className=' col-lg-8 col-md-12 col-12 mb-3'>
            <div className="p-4 card ">
              <h4>Further documents</h4>
              <hr/>
              <div className='files_grid'>
      <div  className='d-flex justify-content-between align-items-center px-3 files_content'>
       <div>
       <img src={doc} alt="pdf" className='img-fluid'/>
        <span> Cover letter example</span>
       </div>
       <div>
        <small className='file_size'>DOC 48.1KB</small>
       
       </div>
      </div>
      <div  className='d-flex justify-content-between align-items-center px-3 files_content'>
      <div>
      <img src={pdf} alt="pdf" className='img-fluid '/>
        <span> Academic paper on a specific...</span>
       </div>
       <div>
        <small className='file_size'>PDF 126.9KB</small>
       </div>
      </div>
      <div  className='d-flex justify-content-between align-items-center px-3 files_content'>
      <div>
      <img src={ppt} alt="ppt" className='img-fluid'/>
        <span> School introduction</span>
       </div>
       <div>
        <small className='file_size'>PDF 1.5MB</small>
       </div>  
      </div>
      <div  className='d-flex justify-content-between align-items-center px-3 files_content'>
      <div>
      <img src={doc} alt="doc" className='img-fluid'/>
        <span> Job description</span>
       </div>
       <div>
        <small className='file_size'>DOC 87.2KB</small>
       </div>
      
      </div>
      <div  className='d-flex justify-content-between align-items-center px-3 files_content'>
      <div>
      <img src={pdf} alt="pdf" className='img-fluid '/>
        <span> Academic paper on a specific...</span>
       </div>
       <div>
        <small className='file_size'>PDF 126.9KB</small>
       </div>
      </div>
     </div>
   </div>      
             </div>
             {/* apply section  */}
             <div className='col-lg-4 col-12 mb-3'>
          <div className="info_section card">
          <h4>How to apply</h4>
          <hr/>
          <button className='register_btn py-3'>Quick apply</button>
          <br/>
          <button className='login_btn py-3 my-2'>Recruiter's website</button>
          <br/>
          <button className='login_btn py-3'>Recruiter's application form</button>
         </div>       
             </div>
             </div>
             {/* other job vaccancy  */}
             <div className="row mb-3">
             <div className='marginTop col-lg-8 col-md-12 col-12 mb-5'>
             <div className="card p-3">
               <h4>
                Other job vacancies from <span style={{color:'#2697FF'}}>London Business School</span>
               </h4>
             </div>
               <div className='d-flex mt-3  justify-content-between job_details_card'>
                <div>
                <div className='px-5 card my-3'>
                 <h5 className='my-3'>Head of Department</h5>
                 <div className='d-flex justify-content-between features_card'>
                 <div className='text-secondary'>
                 <p className='fw-bold'>Salary </p>
                 <p className='fw-bold'>Hours</p>
                 <p className='fw-bold'>Contract type</p>
                 </div>
                 <div className='text-secondary px-2'>
                 <p>£28,290 - £34,850 per annum </p>
                 <p>Full-Time</p>
                 <p>Permanent</p>
                 </div>                        
                 </div>
                 
                </div>
                <p className='text-center mt-2 deadline'><span className='text-info'>Clossing</span> 15/07/2022 <span className='mx-5'><span className='text-info'>Starts</span> <span>01/08/2022</span></span></p>

                <div className='card py-4'>
                <button className='login_btn mx-3 py-3'>
                 Veiw job details
                </button>
                </div>
                </div>

                <div>
                <div  className='px-5 card my-3'>
                <h5 className='my-3'>Supply Eanglish teacher</h5>
                <div className='d-flex justify-content-between features_card'>
                 <div className='text-secondary'>
                 <p className='fw-bold'>Salary </p>
                 <p className='fw-bold'>Hours</p>
                 <p className='fw-bold'>Contract type</p>
                 </div>
                 <div className='text-secondary px-2'>
                 <p>£28,290 - £34,850 per annum </p>
                 <p>Full-Time</p>
                 <p>Supply</p>
                 </div>                        
                 </div>
                </div>
                <p className='text-center mt-2 deadline'><span className='text-info'>Clossing</span> 07/08/2022 <span className='mx-5'><span className='text-info'>Starts </span><span>01/09/2022</span></span></p>

                <div className='card py-4'>
                <button className='login_btn mx-3 py-3'>
                 Veiw job details
                </button>
                </div>
                </div>
            
                </div>
                <div className='my-3'>
                <div className='location_grid'>
                <div>
                <div className='px-5 py-2 card'>
                  <h5>Science teacher</h5>
                  <div className='d-flex justify-content-between features_card'>
                 <div className='text-secondary'>
                 <p className='fw-bold'>Salary </p>
                 <p className='fw-bold'>Hours</p>
                 <p className='fw-bold'>Contract type</p>
                 </div>
                 <div className='text-secondary'>
                 <p>TBC</p>
                 <p>Supply</p>
                 <p>Meternity cover</p>
                 </div>                        
                 </div>               
                 </div>
                 <p className='text-center mt-2 deadline'><span className='text-info'>Clossing</span> 07/08/2022 <span className='mx-5'><span className='text-info'>Starts </span><span>01/09/2022</span></span></p>
                 <div className='card py-4'>
                <button className='login_btn mx-3 py-3'>
                 Veiw job details
                </button>
                </div>
                </div>
                  <div className='border_box p-2'>
                    <div className='d-flex justify-content-center align-items-center h-100 text-center fw-bold text-secondary'>
                     <div>
                     <FaMapMarkerAlt style={{color:'gainsboro'}} className='fs-1 my-4'/>
                      <p>Find more jobs in <span className="text-info"> London</span></p>
                     </div>
                      </div>
                  </div>
                </div>
                </div>               
             </div>
           {/* about the school section  */}
             <div className='col-lg-4 col-12 mb-3'>
             <div className="info_section card">
             <h4 >About the school</h4>
             <hr/>
            <div className='map_content'>
            <h5 className="text-secondary mb-3">London Business School</h5>
            <p>Regent's park</p>
            <p>London</p>
            <p>NW1 4SA</p>
            </div>
           <Link to="">
          https://www.london.edu/        
          </Link>
         <Link to="">
         +44 (0)20 7000 7000
         </Link>
         {/* google map  */}
         <div className="mapouter pt-2">
            <div className="gmap_canvas"><iframe width="100%"   height="400" id="gmap_canvas"
            src="https://maps.google.com/maps?q=%209/A,%20Dhanmondi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
            href="https://2piratebay.org"></a><br/>
            <style>
              {/* styles included in JobDetails.css file*/}
            </style><a href="https://www.embedgooglemap.net">make google map responsive</a>                
            </div>
            </div>
             </div> 
          {/* <Map></Map>       */}
           
           
          </div>
          </div>
          </div>
         </> 
    
   )
}

export default JobDetails;