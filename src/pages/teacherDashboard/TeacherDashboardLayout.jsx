import React from 'react';
import DashboardView from '../shared/dashboardVeiw/DashboardVeiw';
import TeachersSearchBar from '../shared/teachersSearchBar/TeachersSearchBar';
import JobApplictaion from './jobApplication/JobApplication';
import './TeacherDashboardLayout.css';
import DashboardFilter from '../shared/dashBoardFilter/DashboardFilter';

const TeacherDashboardLayout = () => {
    return (
        <div className='overflow-hidden'>
        <TeachersSearchBar></TeachersSearchBar>
        <div className='dashboard'>
            <div className='container-fluid px-2 px-lg-5'>
            <div className="row align-items-start justify-content-center">
                <div className='col-lg-2 col-12'>
                    <DashboardFilter></DashboardFilter>
                </div>
                <div className='col-lg-10 col-12'>
                    <h3 >Welcome back, <span style={{color:'#2697FF'}}>Jane</span></h3>
                    <h6 className='mb-4'>I am a Maths Teacher</h6>
                    <DashboardView></DashboardView>
                    <JobApplictaion></JobApplictaion>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default TeacherDashboardLayout;