import React from 'react';
import {IoInformationCircleOutline} from "react-icons/io5";
import { BsDot } from "react-icons/bs";
import './SignUp.css'
import SignUpHero from '../shared/signUpHero/SignUpHero';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='sign-up text-center py-5'>
            <SignUpHero></SignUpHero>
            <div className="container pt-5 mt-3">
                <h6>Sign Up</h6>
                <p>Please choose one of these options</p>
                <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center mt-3">
                    <div className="col">
                       <div className="card signup-content bg-white">
                            <h5>I am a <span style={{color:'#2697FF'}}> Teacher/Support staff</span></h5>
                            <div className='border-top my-2'></div>
                            <h6  style={{color:'#2697FF'}}className="fw-bold"><IoInformationCircleOutline/> Requires:</h6>
                           <div className="d-flex justify-content-center">
                           <ul className='login_ul'>
                                <li className='li_style'><span>teaching qualification (QTS)</span></li>
                                <li className='li_style my-2'><span>years of teaching experience</span></li>
                                <li className='li_style'><span>UK citizenship</span></li>
                            </ul>
                           </div>
                             
                           <Link to="/signupschool"> <button className='get-btn signup-btn '>Register as a Teacher/Staff</button></Link>
                        </div> 
                    </div>
                    <div className="col">
                        <div className="card signup-content bg-white">
                            <h5>I represent a <span style={{color:'#2697FF'}}> School/Organisation</span></h5>
                            <div className='border-top my-2'></div>
                            <h6 style={{color:'#2697FF'}}className="fw-bold"><IoInformationCircleOutline/> Requires:</h6>
                            <div className="d-flex justify-content-center">
                             <ul className='login_ul'>
                                <li className='li_style'><span>UK citizenship</span></li>                            
                               </ul>
                            </div>
                              

 
                            <Link to="/signupteacher"><button className='get-btn signup-btn'>Register as a Teacher/Staff</button></Link>
                        </div>
                    </div>
                </div>
                <p className='login-here mt-4'>Already have an account? <Link to="">Log in here</Link> </p>
            </div>
        </div>
    );
};

export default SignUp;