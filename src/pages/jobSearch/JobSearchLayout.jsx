import React from 'react';
import JobContent from './jobContent/JobContent';
import JobFilter from './jobFilter/JobFilter';
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './JobSearchLayout.css';
import JobSearchBar from '../shared/jobSearchBar/JobSearchBar';

const JobSearchLayout = () => {
    return (
        <div>
             <JobSearchBar></JobSearchBar>
            <div className='teachers-info'>
                <div className='container-fluid px-3 px-lg-5'>
                    <div className='row gx-3 gy-4 justify-content-center align-items-start'>
                        {/* -----------------filter-area---------------  */}
                        <div className='col-lg-3 col-12'>
                            <JobFilter></JobFilter>
                        </div>
                        {/* -----------------teachers-area---------------    */}
                        <div className='col-lg-9 col-12'>
                            <h3 className='job-area-title  mb-3 '>205 Maths teacher jobs: </h3>
                            <div className='d-flex align-items-start justify-content-between mb-4 g-4 flex-lg-row flex-column'>
                                <div>
                                    <button className='teacher-btn me-2 mb-2'>Maths <AiOutlineCloseCircle /></button>
                                    <button className='teacher-btn me-2 '>Teacher <AiOutlineCloseCircle /></button>
                                    <button className='teacher-btn me-2 mb-2'>Primary <AiOutlineCloseCircle /></button>
                                    <button className='teacher-btn me-2'>Secondary <AiOutlineCloseCircle /></button>
                                    <button className='teacher-btn me-2'>London <AiOutlineCloseCircle /></button>
                                    <button className='teacher-btn me-2 mb-2'>Full-time <AiOutlineCloseCircle /></button>
                                </div>
                                <div className='view d-flex align-items-center'>
                                    <div className='me-2 job-search-input'>
                                        <label htmlFor="">Sort by:</label>
                                        <select className='job-select teachers-input' placeholder='' >
                                            <option selected>Most recent</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <p className='fw-bold text-secondary'>View:</p>
                                    <BsListUl className='list-icon mx-2' />
                                    <BsFillGrid3X3GapFill className='fill-icon' />
                                </div>
                            </div>
                            <button className='job-filter-btn mb-3'>Alert me when similar jobs are posted</button>
                            <JobContent></JobContent>
                            <JobContent></JobContent>
                            <JobContent></JobContent>
                            <button className='common-btn d-block m-auto mt-5'>Load more teachers</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSearchLayout;