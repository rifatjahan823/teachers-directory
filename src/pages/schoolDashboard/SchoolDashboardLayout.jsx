import React from 'react'; 
import DashboardFilter from "../shared/dashBoardFilter/DashboardFilter";
import DashboardView from '../shared/dashboardVeiw/DashboardVeiw';
import TeachersSearchBar from '../shared/teachersSearchBar/TeachersSearchBar';
import Application from "./application/Application"; 
 
const SchoolDasboardLayout = () => {
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
                            <div className='d-flex flex-column flex-md-row align-items-md-center align-items-start justify-content-between'>
                                <div><h3 >Welcome back, <span style={{ color: '#2697FF' }}> Jane</span></h3>
                                <h6 className='mb-4'>Representing Business School of London</h6></div>
                               <div> <button className='get-btn '>Create job</button></div>
                            </div>
                            <DashboardView></DashboardView>
                             <Application></Application>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolDasboardLayout;