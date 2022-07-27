import React from 'react';
import { TiSocialFacebook,TiSocialTwitter,TiSocialLinkedin,TiSocialYoutube } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import './Footer.css';
import { Link } from 'react-router-dom';
import footerlogo from '../../../assets/home/footer-logo.png'


const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='container'>
          {/* ------------footer-top--------- */}
            <div className='row align-items-center justify-content-center gy-4 mb-5'>
                <div className='col-md-6 col-12'>
                   <img src={footerlogo } alt="" />
                </div>
                <div className='col-md-6 col-12'>
                  {/* -------------icon-area------- */}
                    <div className='d-flex justify-content-md-end justify-content-start align-items-center'>
                        <p>follow us</p>
                        <TiSocialTwitter className='footer-top-icon'/>
                        <IoLogoInstagram className='footer-top-icon'/>
                        <TiSocialLinkedin className='footer-top-icon'/>
                        <TiSocialFacebook className='footer-top-icon'/>
                        <TiSocialYoutube className='footer-top-icon'/>
                    </div>
                    {/* -----------link-area---------- */}
                    <div className='d-flex justify-content-md-end justify-content-start align-items-center mt-3 '>
                        <Link to=''>How it works</Link>
                        <Link to=''>Search teachers</Link>
                        <Link to=''>About us</Link>
                        <Link to=''>Contact us</Link>
                    </div>
                </div>
            </div>
          {/* ------------footer-bottom--------- */}
          <div className='row gy-3 justify-content-start align-items-center'>
                <div className='col-md-6 col-12 text-start text-md-start order-2 order-md-1'>
                    <p>&copy; 2022 Teachers' Directory. All rights reserved.</p>
                </div>
                <div className='col-md-6 col-12 order-1 order-md-2'>
                     <div className='d-flex justify-content-md-end justify-content-start align-items-center mt-3'>
                        <Link to=''>Terms & Conditions</Link>
                        <Link to=''>Privacy Policy</Link>
                    </div> 
                </div>
            </div>          
        </div>
    </div>
  )
}

export default Footer