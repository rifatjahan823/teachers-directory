import React from 'react';
import img2 from '../../../assets/dashboard/Rectangle 198.png';

const Application = () => {
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
                                    <img className='img-fluid' src={img2} alt="" />
                                    <h5>John Doe <span className='ms-2' style={{ fontWeight: "400" }}>Full-time English teacher</span></h5>
                                </div>
                                <p >23/06/22</p>
                            </div>
                            <p className='mt-2 details_paragraph'>Suspendisse tristique blandit tincidunt. Etiam euismod ipsum mattis augue mollis auctor. Etiam iaculis tortor ipsum, eu tincidunt nisl imperdiet quis. Maecenas sapien sapien, lacinia non ante...</p>
                        </div>
                        {/* ---------===========----------- */}
                        <div className=' border-bottom py-3'>
                            <div className='d-flex align-items-center justify-content-between job-flex job-flex'>
                                <div className='d-flex align-items-center job-flex job-flex'>
                                    <img className='img-fluid' src={img2} alt="" />
                                    <h5>John Doe <span className='ms-2' style={{ fontWeight: "400" }}>Head of Department needed</span></h5>
                                </div>
                                <p >19/04/22</p>
                            </div>
                            <p className='mt-2 details_paragraph'>Suspendisse tristique blandit tincidunt. Etiam euismod ipsum mattis augue mollis auctor. Etiam iaculis tortor ipsum, eu tincidunt nisl imperdiet quis. Maecenas sapien sapien, lacinia non ante...</p>
                        </div>
                        {/* ---------===========----------- */}
                        <div className=' border-bottom py-3'>
                            <div className='d-flex align-items-center justify-content-between job-flex'>
                                <div className='d-flex align-items-center job-flex'>
                                    <img className='img-fluid' src={img2} alt="" />
                                    <h5>John Doe <span className='ms-2' style={{ fontWeight: "400" }}> Supply teacher</span></h5>
                                </div>
                                <p >23/06/22</p>
                            </div>
                            <p className='mt-2 details_paragraph'>Suspendisse tristique blandit tincidunt. Etiam euismod ipsum mattis augue mollis auctor. Etiam iaculis tortor ipsum, eu tincidunt nisl imperdiet quis. Maecenas sapien sapien, lacinia non ante...</p>
                        </div>
                        <div className='my-5'> <button className='rec_btn px-5 py-2 mt-5 d-block m-auto'>View my applications</button></div>
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
                                <h5 ><span className='ms-3' style={{ fontWeight: "400", fontSize: "16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p >27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex'>
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe </h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400", fontSize: "16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p >27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex job-flex'>
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe </h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400", fontSize: "16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p >27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex'>
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe </h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400", fontSize: "16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p>27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex'>
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe</h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400", fontSize: "16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <p >27/06/22</p>
                        </div>
                        {/* --------=====-------------- */}
                        <div className='d-flex align-items-center justify-content-between border-bottom py-3 job-flex'>
                            <div className='d-flex align-items-center job-flex' >
                                <img className='img-fluid' src={img2} alt="" />
                                <h5>John Doe </h5>
                                <h5 ><span className='ms-3' style={{ fontWeight: "400", fontSize: "16px" }}>Lorem ipsum dolor sit amet</span></h5>
                            </div>
                            <div> <p >27/06/22</p></div>
                        </div>
                        <div className='my-3'> <button className='rec_btn px-5 py-2 mt-4 d-block m-auto'>Open inbox</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;