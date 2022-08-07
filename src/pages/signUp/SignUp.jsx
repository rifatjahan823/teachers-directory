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
                       <div className="card signup-content ">
                            <h5>I am a <span style={{color:'#2697FF'}}> Teacher/Support staff</span></h5>
                            <div className='border-top my-2'></div>
                            <h6><IoInformationCircleOutline/> Requires:</h6>
                            <p><BsDot className='dot-top' /> A teaching qualification (QTS)</p>
                            <p><BsDot className='dot-top' /> 2 years of teaching experience</p>
                            <p><BsDot className='dot-top' /> UK citizenship</p>
                           <Link to="/signupschool"> <button className='get-btn signup-btn '>Register as a Teacher/Staff</button></Link>
                        </div> 
                    </div>
                    <div className="col">
                        <div className="card signup-content">
                            <h5>I represent a <span style={{color:'#2697FF'}}> School/Organisation</span></h5>
                            <div className='border-top my-2'></div>
                            <h6><IoInformationCircleOutline/> Requires:</h6>
                            <p><BsDot className='dot-top' /> UK citizenship</p>
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