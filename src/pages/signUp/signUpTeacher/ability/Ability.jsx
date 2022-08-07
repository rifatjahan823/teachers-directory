import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";

const Ability = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Availability</h4>
                        <p>By selecting ‘Yes’ this will be shown on your profile as ‘Available’ for work.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            <p >Are you available for work now (e.g. teaching, supply work)? <IoInformationCircleOutline style={{ color: "#2697FF" }} /></p>
                            <button className='quiz-btn'>yes</button>
                            <button className='quiz-btn ms-2'>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ability;