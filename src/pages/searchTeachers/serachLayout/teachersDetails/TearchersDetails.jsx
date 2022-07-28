import React from 'react';
import './TearchersDetails.css';
import teachers1 from '../../../../assets/Search-Tearchers/teachers-1.png';
import teachers2 from '../../../../assets/Search-Tearchers/teachers-2.png';
import teachers3 from '../../../../assets/Search-Tearchers/teachers-3.png';
import { BsDot, BsSuitHeart } from "react-icons/bs";

const TearchersDetails = () => {
    return (
        <>
        {/* ----------------teacher-1--------------- */}
        <div>
            <div className='teachers-area card mt-3'>
                {/* -----------teachers-content---------- */}
                <div className='teachers-content d-flex justify-content-between align-items-top'>
                    <img src={teachers1} alt="" />
                    <div>
                        <div className='d-flex justify-content-between tearcher-title border-bottom'>
                            <div>
                                <h6>john d. <span className=' teacher-title-span'>Match teacher</span></h6>
                                <p><BsDot className='dot-top' /> soho,London <span className='ms-2'><BsDot className='dot-top dots' /> full time</span> <span className='ms-2'><BsSuitHeart className='text-danger' /></span></p>
                            </div>
                            <div>
                                <button className='common-btn'>goat hired</button>
                            </div>
                        </div>
                        <div className='content-paragrapgh mt-3'>
                            <p>Maecenas tempus, ligula eget dapibus viverra, tellus risus fringilla lacus, a pellentesque lorem quam vitae dolor. Ut ut sapien quis tortor fringilla interdum. Nam at gravida sem. In ultricies ante non enim rhoncus, gravida tempor dolor varius. Cras vitae sapien et neque tristique vehicula volutpat vitae ante. Ut convallis id dui nec...</p>
                        </div>
                    </div>
                </div>
                {/* ----------teacher-experience------------------ */}
                <div className='border-top'>
                    <div className='teacher-experience '>
                        <div className='border-end py-2 pe-4 ps-2'><p style={{ color: "#2697FF" }}>Primary teacher</p></div>
                        <div className='border-end py-2 px-4'><p>15 years' experience</p></div>
                        <div className='border-end py-2 px-4'><p>HoD</p></div>
                        <div className='border-end py-2 px-4'><p>DBS</p></div>
                        <div className='ps-4'> <p>Other subjects: </p>  </div>
                        <div className='ps-2 '> <button className='teacher-btn me-2'>Science</button></div>
                        <div className='ps-2 '> <button className='teacher-btn me-2 '>Computing</button></div>
                    </div>
                </div>
            </div>
        </div>
         {/* ----------------teacher-2--------------- */}
        <div>
            <div className='teachers-area card mt-3'>
                {/* -----------teachers-content---------- */}
                <div className='teachers-content d-flex justify-content-between align-items-top'>
                    <img src={teachers2} alt="" />
                    <div>
                        <div className='d-flex justify-content-between tearcher-title border-bottom'>
                            <div>
                                <h6>Janice T. <span className=' teacher-title-span'>English Literature Teacher</span></h6>
                                <p><BsDot className='dot-top' /> soho,London <span className='ms-2'><BsDot className='dot-top dots' /> full time</span> <span className='ms-2'><BsSuitHeart className='text-danger' /></span></p>
                            </div>
                            <div>
                                <button className='common-btn'>goat hired</button>
                            </div>
                        </div>
                        <div className='content-paragrapgh mt-3'>
                            <p>Maecenas tempus, ligula eget dapibus viverra, tellus risus fringilla lacus, a pellentesque lorem quam vitae dolor. Ut ut sapien quis tortor fringilla interdum. Nam at gravida sem. In ultricies ante non enim rhoncus, gravida tempor dolor varius. Cras vitae sapien et neque tristique vehicula volutpat vitae ante. Ut convallis id dui nec...</p>
                        </div>
                    </div>
                </div>
                {/* ----------teacher-experience------------------ */}
                <div className='border-top'>
                    <div className='teacher-experience '>
                        <div className='border-end py-2 pe-4 ps-2'><p style={{ color: "#2697FF" }}>Primary teacher</p></div>
                        <div className='border-end py-2 px-4'><p>15 years' experience</p></div>
                        <div className='border-end py-2 px-4'><p>HoD</p></div>
                        <div className='border-end py-2 px-4'><p>DBS</p></div>
                        <div className='ps-4'> <p>Other subjects: </p>  </div>
                        <div className='ps-2 '> <button className='teacher-btn me-2'>Science</button></div>
                        <div className='ps-2 '> <button className='teacher-btn me-2 '>Computing</button></div>
                    </div>
                </div>
            </div>
        </div>
        {/* ----------------teacher-3--------------- */}
        <div>
            <div className='teachers-area card mt-3'>
                {/* -----------teachers-content---------- */}
                <div className='teachers-content d-flex justify-content-between align-items-top'>
                    <img src={teachers3} alt="" />
                    <div>
                        <div className='d-flex justify-content-between tearcher-title border-bottom'>
                            <div>
                                <h6>Martin R.<span className=' teacher-title-span'>French Teacher</span></h6>
                                <p><BsDot className='dot-top' /> soho,London <span className='ms-2'><BsDot className='dot-top dots' /> full time</span> <span className='ms-2'><BsSuitHeart className='text-danger' /></span></p>
                            </div>
                            <div>
                                <button className='common-btn'>goat hired</button>
                            </div>
                        </div>
                        <div className='content-paragrapgh mt-3'>
                            <p>Maecenas tempus, ligula eget dapibus viverra, tellus risus fringilla lacus, a pellentesque lorem quam vitae dolor. Ut ut sapien quis tortor fringilla interdum. Nam at gravida sem. In ultricies ante non enim rhoncus, gravida tempor dolor varius. Cras vitae sapien et neque tristique vehicula volutpat vitae ante. Ut convallis id dui nec...</p>
                        </div>
                    </div>
                </div>
                {/* ----------teacher-experience------------------ */}
                <div className='border-top'>
                    <div className='teacher-experience '>
                        <div className='border-end py-2 pe-4 ps-2'><p style={{ color: "#2697FF" }}>Primary teacher</p></div>
                        <div className='border-end py-2 px-4'><p>15 years' experience</p></div>
                        <div className='border-end py-2 px-4'><p>HoD</p></div>
                        <div className='border-end py-2 px-4'><p>DBS</p></div>
                        <div className='ps-4'> <p>Other subjects: </p>  </div>
                        <div className='ps-2 '> <button className='teacher-btn me-2'>Science</button></div>
                        <div className='ps-2 '> <button className='teacher-btn me-2 '>Computing</button></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TearchersDetails;