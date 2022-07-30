import React from 'react';
import './TeachersFilter.css';
import { BsCheckSquareFill, BsSquare } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

const TeachersFilter = () => {
    return (
        <div className='filter-area'>
            <h3>Additional filters</h3>
            <div className='row'>
            <div className='col-12 order-2 order-lg-1'>
            <div className='row g-3 mb-3'>
                <div className='col-lg-12 col-md-6 col-12'>
                    <div className='card'>
                        <div className='d-flex justify-content-between alig-items-center border-bottom py-2'>
                            <div className='ps-3'><h5>hours</h5></div>
                            <div className='pe-3'><BiChevronDown className='fs-2' /></div>
                        </div>
                        <div className='px-3'>
                            <h4><BsCheckSquareFill className='check-icon' /> full time <span>(564)</span></h4>
                            <h4><BsSquare className='check-icon' /> part time <span>(87)</span></h4>
                            <h4><BsSquare className='check-icon' /> supply work <span>(135)</span></h4>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12 col-md-6 col-12'>
                    <div className='card'>
                        <div className='d-flex justify-content-between alig-items-center border-bottom py-2'>
                            <div className='ps-3'><h5>Position</h5></div>
                            <div className='pe-3'><BiChevronDown className='fs-2' /></div>
                        </div>
                        <div className='px-3'>
                            <h4><BsSquare className='check-icon' /> Leadership/Management <span>(266)</span></h4>
                            <div className='ps-4'>
                                <h4><BsSquare className='check-icon' /> Headteacher <span>(196)</span></h4>
                                <h4><BsSquare className='check-icon' /> Deputy <span>(11)</span></h4>
                                <h4><BsSquare className='check-icon' /> Assistant <span>(59)</span></h4>
                            </div>
                            <h4><BsCheckSquareFill className='check-icon' /> Leadership/Management <span>(475)</span></h4>
                            <div className='ps-4'>
                                <h4><BsCheckSquareFill className='check-icon' /> Teacher <span>(401)</span></h4>
                                <h4><BsCheckSquareFill className='check-icon' /> Tutor <span>(28)</span></h4>
                                <h4><BsSquare className='check-icon' /> Head of Department <span>(41)</span></h4>
                            </div>
                            <h4><BsSquare className='check-icon' /> Non-teaching/Support  <span>(24)</span></h4>
                            <div className='ps-4'>
                                <h4><BsSquare className='check-icon' /> Lorem <span>(16)</span></h4>
                                <h4><BsSquare className='check-icon' /> Lorem <span>(18)</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='col-12 order-1 order-lg-2'>
            <div className='row g-3 mb-3'>
                <div className='col-lg-12 col-6'>
                    <div className='card'>
                        <div className='d-flex justify-content-between alig-items-center border-bottom py-2'>
                            <div className='ps-3'><h5>Exam Board</h5></div>
                            <div className='pe-3'><BiChevronDown className='fs-2' /></div>
                        </div>
                        <div className='px-3'>
                            <h4 className='text-uppercase'><BsSquare  className='check-icon' />aqa</h4>
                            <h4 className='text-uppercase'><BsSquare className='check-icon' /> ocr </h4>
                            <h4 className='text-uppercase'>< BsCheckSquareFill className='check-icon' /> Edexcel</h4>
                            <h4 className='text-uppercase'><BsSquare className='check-icon' /> CCEA </h4>
                            <h4 className='text-uppercase'><BsSquare className='check-icon' /> WJEC/Eduqas </h4>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12 col-6 '>
                <div className='card'>
                        <div className='d-flex justify-content-between alig-items-center border-bottom py-2'>
                            <div className='ps-3'><h5>other</h5></div>
                            <div className='pe-3'><BiChevronDown className='fs-2' /></div>
                        </div>
                        <div className='px-3'>
                            <h4 className='text-uppercase'><BsSquare  className='check-icon' /> male</h4>
                            <h4 className='text-uppercase'><BsSquare className='check-icon' /> female </h4>
                            <h4 className='text-uppercase'><  BsSquare className='check-icon' /> DBS checked</h4>
                            <h4 className='text-uppercase'><BsCheckSquareFill className='check-icon' /> ECTs / NQTs </h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default TeachersFilter;