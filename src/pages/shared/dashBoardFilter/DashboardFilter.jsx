import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './DashboardFilter.css';

const DashboardFilter = () => {
    return (
        <div className='dashboard-filter mb-4'>
        <div className='row g-4 align-items-cenetr justify-content-start justify-content-lg-start '>
            <div className='col-lg-12 col-md-6 col-12'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5> Account settings</h5></Accordion.Header>
                    <Accordion.Body>
                        <div className=''>
                            <h4>Personal details</h4>
                            <h4>Notifications</h4>
                            <h4>Deactivate account</h4>
                            <h4>Close account</h4>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            {/* -----------message---------- */}
            <div className='col-lg-12 col-md-6 col-12'>
            <div className='card my-2 p-3 '>
                <div className='d-flex align-items-center'>
                    <h4>Messages</h4>
                    <p className='badge ms-3'>2</p>
                </div>
            </div>
            </div>
            {/* ------------profile----------- */}
            <div className='col-lg-12 col-md-6 col-12'>
            <Accordion>
                <Accordion.Item eventKey="10">
                    <Accordion.Header><h5> Teacher profile</h5></Accordion.Header>
                    <Accordion.Body>
                        {/* body content will be here */}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            {/* -----------network---------- */}
            <div className='col-lg-12 col-md-6 col-12'>
            <div className='card my-2 p-3 '>
                <div className='d-flex align-items-center'>
                    <h4>Network groups</h4>
                    <p className='badge ms-3'>8</p>
                </div>
            </div>
            </div>
            {/* ------------job----------- */}
            <div className='col-lg-12 col-md-6 col-12'>
            <Accordion>
                <Accordion.Item eventKey="11">
                    <Accordion.Header><h5>Jobs</h5></Accordion.Header>
                    <Accordion.Body>
                        {/* body content will be here */}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
            {/* -----------contact---------- */}
            <div className='col-lg-12 col-md-6 col-12'>
            <div className='card my-2 p-3 '>
                <h4>Help/Contact us</h4>
            </div>
            </div>
            {/* -----------log out---------- */}
            <div className='col-lg-12 col-md-6 col-12'>
            <div className='card my-2 p-3 '>
                <h4>Log out</h4>
            </div>
          </div>
        </div>
    </div>
    );
};

export default DashboardFilter;