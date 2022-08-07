import React from 'react';
import {IoInformationCircleOutline} from "react-icons/io5";

const TeacherAddress = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Address </h4>
                        <p>This won’t be displayed but we use your postcode to calculate distances to potential schools.Also, if you add your mobile number, we can text you if you have a job application.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                        <div className='d-flex align-items-end justify-content-between form-flex'>
                                <div class="mb-2 ms-1 address-width">
                                    <label for="exampleFormControlInput1" class="form-label">Address <  IoInformationCircleOutline style={{color:"#2697FF"}}/></label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="School address"
                                        value={formData.address}
                                        onChange={(e) => {
                                            setFormData({ ...formData, address: e.target.value });
                                        }} required />
                                </div>
                                <div className='mb-2 address-btn-width'>
                                    <button className='add-btn'>Add manually</button>
                                </div>
                            </div>
                            <div class="mb-2 me-1">
                                <label for="exampleFormControlInput1" class="form-label">School / Organisation name</label>
                                <input
                                    type="text"
                                    class="form-control width-100"
                                    placeholder="Business School of London"
                                    value={formData.schoolName}
                                    onChange={(e) => {
                                        setFormData({ ...formData, schoolName: e.target.value });
                                    }} required />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherAddress;