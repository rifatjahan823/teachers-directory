import React from 'react';
import { BsDot, BsSuitHeart } from "react-icons/bs";
import './JobContent.css';
import photo1 from '../../../assets/job-search/photo-1.png';
import photo2 from '../../../assets/job-search/photo-2.png';
import { Link } from 'react-router-dom';


const JobContent = () => {
    return (
        <div>
            <div className='teachers-area card mt-3'>
                {/* -----------teachers-content---------- */}
                <div className='teachers-content job-content d-flex justify-content-between align-items-top'>
                    <img className='job-img' src={photo1} alt="" />
                    <div>
                        <div className='d-flex flex-lg-row flex-column justify-content-between tearcher-title border-bottom'>
                            <div>
                                <p className='fs-5 fw-bold'>Maths teacher <span className=' teacher-title-span'>London Business School</span></p>
                                <p><BsDot className='dot-1' /> Regent's Park, London <span className='ms-2'><BsSuitHeart className='text-danger' /></span></p>
                            </div>
                            <div className='btn_div'>
                                <Link to="/job_details">
                                <button className='veiw-btn'>View job details</button>
                                </Link>
                                <button className='apply-btn'>Apply now</button>
                            </div>
                        </div>
                        <div className='d-flex job-description align-items-start align-items-md-center mb-2 mt-3'>
                            <div className='me-5 pe-4 '>
                                <h5>Subjects</h5>
                            </div>
                            <div>
                            <button className='teacher-btn me-2 mb-2'>Maths </button>
                          <button className='teacher-btn me-2 '>Teacher</button>
                        </div>
                        </div>
                        {/* --------==========----------- */}
                        <div className='d-flex align-items-start align-items-md-center mb-2 job-description '>
                         <div className='me-5 pe-5'> <h5>Salary</h5></div>
                        <div><p>£24,290 - £29,850 per annum, pro rata</p></div>
                        </div>
                        {/* --------==========----------- */}
                        <div className='d-flex align-items-start align-items-md-center mb-2  '>
                          <div className='me-5 pe-5'><h5>Hours</h5></div>
                         <div><p>Full-time</p></div>
                        </div>
                        {/* --------==========----------- */}
                        <div className='d-flex align-items-start align-items-md-center mb-2  '>
                          <div className='me-4 pe-2'><h5>Contract type</h5></div>
                         <div><p>Fixed term</p></div>
                        </div>
                        {/* --------==========----------- */}
                        <div className='d-flex align-items-start job-description '>
                            <div className='me-5'>
                                <h5>Description</h5>
                            </div>
                            <div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur blandit condimentum. Aenean aliquam, odio id laoreet ornare, nunc dui pretium orci, nec faucibus mi mauris ac augue. Integer sit amet nibh non velit lacinia finibus nec non massa. Donec aliquam ipsum urna, et lobortis magna rutrum quis. Sed egestas...</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------teacher-experience------------------ */}
                <div className='border-top'>
                    <div className='job-experience  d-flex'>
                        <div className='border-end py-2 pe-4 ps-4'><p >Posted 01/07/2022</p></div>
                        <div className='border-end py-2 px-4'><p>Closing 15/07/2022</p></div>
                        <div className=' py-2 px-4'><p>Starts 01/08/2022</p></div>
                    </div>
                </div>
            </div>
            <div className='teachers-area card mt-3'>
                {/* -----------teachers-content---------- */}
                <div className='teachers-content job-content d-flex justify-content-between align-items-top'>
                    <img className='job-img' src={photo2} alt="" />
                    <div>
                        <div className='d-flex flex-lg-row flex-column justify-content-between tearcher-title border-bottom'>
                            <div>
                                <p className='fs-5 fw-bold'>Mathematics and Science supply <br /> <span className=' teacher-title-span '>SOAS University of London</span></p>
                                <p><BsDot className='dot-1' /> Thornhaugh St, London <span className='ms-2'><BsSuitHeart className='text-danger' /></span></p>
                            </div>
                            <div>
                                <Link to="/job_details">
                                <button className='veiw-btn'>View job details</button>
                                </Link>
                                <button className='apply-btn'>Apply now</button>
                            </div>
                        </div>
                        <div className='d-flex job-description align-items-start align-items-md-center mb-2 mt-3'>
                            <div className='me-5 pe-4 '>
                                <h5>Subjects</h5>
                            </div>
                            <div>
                            <button className='teacher-btn me-2 mb-2'>Maths </button>
                          <button className='teacher-btn me-2 '>Teacher</button>
                        </div>
                        </div>
                        {/* --------==========----------- */}
                        <div className='d-flex align-items-start align-items-md-center mb-2 '>
                         <div className='me-5 pe-5'> <h5>Salary</h5></div>
                        <div><p>Part-time</p></div>
                        </div>
                        {/* --------==========----------- */}
                        <div className='d-flex align-items-start align-items-md-center mb-2  '>
                          <div className='me-5 pe-5'><h5>Hours</h5></div>
                         <div><p>Supply</p></div>
                        </div>
                        {/* --------==========----------- */}
                        <div className='d-flex align-items-start align-items-md-center mb-2 '>
                          <div className='me-4 pe-2'><h5>Contract type</h5></div>
                         <div><p>Supply</p></div>
                        </div>
                        {/* --------==========----------- */}
                        <div className='d-flex align-items-start job-description '>
                            <div className='me-5'>
                                <h5>Description</h5>
                            </div>
                            <div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur blandit condimentum. Aenean aliquam, odio id laoreet ornare, nunc dui pretium orci, nec faucibus mi mauris ac augue. Integer sit amet nibh non velit lacinia finibus nec non massa. Donec aliquam ipsum urna, et lobortis magna rutrum quis. Sed egestas...</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------teacher-experience------------------ */}
                <div className='border-top'>
                    <div className='job-experience  d-flex'>
                        <div className='border-end py-2 pe-4 ps-4'><p >Posted 01/07/2022</p></div>
                        <div className='border-end py-2 px-4'><p>Closing 15/07/2022</p></div>
                        <div className=' py-2 px-4'><p>Starts 01/08/2022</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobContent;


