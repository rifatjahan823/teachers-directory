import React from 'react';
import './JobApplication.css';
 
import img1 from "../../../assets/dashboard/Rectangle 197.png";
import img2 from '../../../assets/dashboard/Rectangle 198.png';

const JobApplictaion = () => {
    return (
        <div className='job-application mt-3'>
            <div className='row row-cols-1 row-cols-lg-2 g-4'>
                <div className='col'>
                    <div className='card px-3 py-4 h-100'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <h6>Job applications</h6>
                            <a href="#">All applications</a>
                        </div>
                        {/* ---------===========----------- */}
                        <div className='border-top border-bottom py-3'>
                            <div className='d-flex align-items-center justify-content-between job-flex'>
                                <div className='d-flex align-items-center job-flex'>
                                    <img className='img-fluid' src={img1} alt="" />
                                    <h5>University of London <span className='ms-2' style={{ fontWeight: "400" }}>Maths teacher</span></h5>
                                </div>
                                <p >23/06/22</p>
                            </div>
                            <p className='mt-2'>Suspendisse tristique blandit tincidunt. Etiam euismod ipsum mattis augue mollis auctor. Etiam iaculis tortor ipsum, eu tincidunt nisl imperdiet quis. Maecenas sapien sapien, lacinia non ante...</p>
                        </div>
                        {/* ---------===========----------- */}
                        <div className=' border-bottom py-3'>
                            <div className='d-flex align-items-center justify-content-between job-flex job-flex'>
                                <div className='d-flex align-items-center job-flex job-flex'>
                                    <img className='img-fluid' src={img1} alt="" />
                                    <h5>University of London <span className='ms-2' style={{ fontWeight: "400" }}>Maths teacher</span></h5>
                                </div>
                                <p >12/06/22</p>
                            </div>
                            <p className='mt-2'>Suspendisse tristique blandit tincidunt. Etiam euismod ipsum mattis augue mollis auctor. Etiam iaculis tortor ipsum, eu tincidunt nisl imperdiet quis. Maecenas sapien sapien, lacinia non ante...</p>
                        </div>
                        {/* ---------===========----------- */}
                        <div className=' border-bottom py-3'>
                            <div className='d-flex align-items-center justify-content-between job-flex'>
                                <div className='d-flex align-items-center job-flex'>
                                    <img className='img-fluid' src={img1} alt="" />
                                    <h5>University of London <span className='ms-2' style={{ fontWeight: "400" }}>Maths teacher</span></h5>
                                </div>
                                <p >09/05/22</p>
                            </div>
                            <p className='mt-2'>Suspendisse tristique blandit tincidunt. Etiam euismod ipsum mattis augue mollis auctor. Etiam iaculis tortor ipsum, eu tincidunt nisl imperdiet quis. Maecenas sapien sapien, lacinia non ante...</p>
                        </div>
                        <div className='my-2'> <button className='rec_btn px-5 py-2 mt-4 d-block m-auto'>View my applications</button></div>
                    </div>
                </div>
                {/* --------------inbox-------------- */}
                <div className='col '>
                    <div className='card px-3 py-4 h-100'>
                        <div className='d-flex align-items-center justify-content-between '>
                            <h6>Inbox</h6>
                            <a href="#">All messages</a>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-top border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex'>
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe </h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400",fontSize:"16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p >27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex'>
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe </h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400",fontSize:"16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p >27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex job-flex'>
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe </h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400",fontSize:"16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p >27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex'>
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe </h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400",fontSize:"16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p >27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex'>
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe</h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400",fontSize:"16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p >27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex' >
                                <img className='img-fluid' src={img2} alt="" />
                               <h5>John Doe </h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400",fontSize:"16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                           <div> <p >27/06/22</p></div>
                        </div>
                          <div className='mb-3 mt-4'> <button className='rec_btn px-5 py-2 mt-4 d-block m-auto'>Open inbox</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobApplictaion;