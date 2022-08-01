import React from 'react';
import Dashboardfilter from '../shared/dashboardFilter/Dashboardfilter';
import DashboardView from '../shared/dashboardView/DashboardView';
import TeachersSearchBar from '../shared/teachersSerachBar/TeachersSearchBar';
import JobApplictaion from './jobApplication/JobApplictaion';
import './TeacherDashboardLayout.css'

const TeacherDashboardLayout = () => {
    return (
        <div className='overflow-hidden'>
        <TeachersSearchBar></TeachersSearchBar>
        <div className='dashboard'>
            <div className='container-fluid px-2 px-lg-5'>
            <div className="row align-items-start justify-content-center">
                <div className='col-lg-2 col-12'>
                    <Dashboardfilter></Dashboardfilter>
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