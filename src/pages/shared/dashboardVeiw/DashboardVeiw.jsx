import React from 'react';
 import "./DashboardVeiw.css";

const DashboardView = () => {
    return (
        <div className='dashboard-view card '>
            <div className='row g-4 text-center align-items-center justify-content-center'>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className='view-1 border-end'>
                        <h2>12</h2>
                        <h5>Pending job applications</h5>
                        <button className='job-details-btn mt-4'>View my applications</button>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className='view-2 border-end'>
                        <h2>8</h2>
                        <h5>Pending job applications</h5>
                        <button className='job-details-btn mt-4'>View network groups</button>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className='view-3 border-end'>
                        <h2>2</h2>
                        <h5>Pending job applications</h5>
                        <button className='job-details-btn mt-4'>Open inbox</button>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12'>
                    <div className='view-4 border-end'>
                        <h2>34</h2>
                        <h5>Pending job applications</h5>
                        <button className='job-details-btn mt-4'>View favourites</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardView;