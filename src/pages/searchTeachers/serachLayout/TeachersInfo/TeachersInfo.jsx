import React from 'react';
 
import TeachersFilter from '../teachersFilter/TeachersFilter';
import { BsFillGrid3X3GapFill,BsListUl } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './TeachersInfo.css'
import TeachersSearchBar from '../../../shared/teachersSearchBar/TeachersSearchBar';
import TeachersDetails from '../../teachersDetails/TeachersDetails';
 

const TeachersInfo = () => {
    return (
        <>
        <TeachersSearchBar></TeachersSearchBar>
        <div className='teachers-info'>
            <div className='container-fluid px-3 px-lg-5'>
                <div className='row gx-3 gy-4 justify-content-center align-items-start'>
                    {/* -----------------filter-area---------------  */}
                    <div className='col-lg-3 col-12'>
                        <TeachersFilter></TeachersFilter>
                    </div>
                    {/* -----------------teachers-area---------------    */}
                    <div className='col-lg-9 col-12'>
                        <h3 className='teachers-area-title mb-3 '><span style={{fontWeight:"900"}}>378</span> Teachers teaching <span style={{fontWeight:"900"}}>Maths</span> near you: </h3>
                        <div className='d-flex align-items-center justify-content-between mb-5 g-4'>
                            <div>
                                <button className='teacher-btn me-2 mb-2'>London <AiOutlineCloseCircle /></button>
                                <button className='teacher-btn me-2 '>Manchester <AiOutlineCloseCircle /></button>
                                <button className='teacher-btn me-2'>Maths <AiOutlineCloseCircle /></button>
                                <button className='teacher-btn me-2'>Science <AiOutlineCloseCircle /></button>
                                <button className='teacher-btn me-2'>Full-time <AiOutlineCloseCircle /></button>
                                <button className='teacher-btn me-2'>2-5 yrs experience <AiOutlineCloseCircle /></button>
                            </div>
                            <div className='view d-flex align-items-center'>
                                <p>View:</p>
                                <BsListUl className='list-icon mx-2'/>
                                <BsFillGrid3X3GapFill className='fill-icon' />
                            </div>
                        </div>
                        <TeachersDetails></TeachersDetails>
                        <TeachersDetails></TeachersDetails>
                        <TeachersDetails></TeachersDetails>
                        <button className='common-btn d-block m-auto mt-5'>load more teachers</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default TeachersInfo;