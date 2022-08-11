import React from 'react';
import { BsChevronDown, BsXCircle } from "react-icons/bs";

const JobDetailsTwo = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row gy-5 gx-3 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Job details</h4>
                        <p>Advertise your vacancy. These details will be shown to registered teachers who fit your needs.You can save your progress at any moment.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            {/* -----=============---------- */}
                            <div className="row g-2  verified">
                                <div className="col-lg-4 col-12">
                                    <div className=' border rounded'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div class="form-check me-4 py-2 ms-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                <label class="form-check-label " for="flexCheckDefault11">
                                                    <h6>Leadership/Management</h6>
                                                </label>
                                            </div>
                                            <BsChevronDown className='me-2' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className=' border rounded'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div class="form-check me-4 py-2 ms-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                <label class="form-check-label " for="flexCheckDefault11">
                                                    <h6>Teaching/Lecturing</h6>
                                                </label>
                                            </div>
                                            <BsChevronDown className='me-2' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className=' border rounded'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div class="form-check me-4 py-2 ms-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                <label class="form-check-label " for="flexCheckDefault11">
                                                    <h6>Non-teaching/Support</h6>
                                                </label>
                                            </div>
                                            <BsChevronDown className='me-2' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ----------===========-------- */}
                            <div className='mt-1'>
                                <label for="exampleFormControlInput1" class="form-label">  Subject (optional)</label>
                                <div className='w-100 rounded p-2'style={{border:"1px solid #2697FF"}}>
                                    <div className='d-flex justify-content-between align-items-start align-items-md-center'>
                                        <div>
                                            <button className='teacher-btn me-2'>London <BsXCircle /></button>
                                            <button className='teacher-btn'>London <BsXCircle /></button>
                                        </div>
                                        <div>
                                            <BsXCircle style={{ color: '#009FF5' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* -----------=============----------- */}
                            <div className='d-flex align-items-end justify-content-between form-flex mt-2'>
                                <div class="mb-2 width-50 address-width">
                                    <label for="exampleFormControlInput1" class="form-label">Contract type</label>
                                    <select class="form-select " aria-label="Default select example" value={formData.contact} onChange={(e) => {
                                        setFormData({ ...formData, contact: e.target.value });
                                    }} >
                                        <option selected>Select salary range</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-2 me-0 me-md-3 select-width">
                                    <label for="exampleFormControlInput1" class="form-label">Working hours</label>
                                    <select class="form-select" aria-label="Default select example" value={formData.contact} onChange={(e) => {
                                        setFormData({ ...formData, contact: e.target.value });
                                    }} >
                                        <option selected>Select grade</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-2 select-number">
                                    <input type="number" className='form-control ' placeholder='35' value={formData.number} onChange={(e) => {
                                        setFormData({ ...formData, number: e.target.value });
                                    }} />

                                </div>
                            </div>
                            {/* ---------==================--------- */}
                            <div className='d-flex align-items-end justify-content-between form-flex mt-2'>
                                <div class="mb-2 me-md-2 me-0 width-50">
                                    <label for="exampleFormControlInput1" class="form-label">Salary range (optional)</label>
                                    <select class="form-select " aria-label="Default select example" value={formData.contact} onChange={(e) => {
                                        setFormData({ ...formData, contact: e.target.value });
                                    }} >
                                        <option selected>Select salary range</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="mb-2 ms-1 width-50">
                                    <label for="exampleFormControlInput1" class="form-label">Grade (optional)</label>
                                    <select class="form-select " aria-label="Default select example" value={formData.hour} onChange={(e) => {
                                        setFormData({ ...formData, hour: e.target.value });
                                    }} >
                                        <option selected>Select grade</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            {/* -----=============---------- */}
                            <div class="mb-2 me-1">
                                <label for="exampleFormControlInput1" class="form-label">Job title</label>
                                <select class="form-select width-100" aria-label="Default select example" value={formData.jobtitle} onChange={(e) => {
                                    setFormData({ ...formData, jobtitle: e.target.value });
                                }} >
                                    <option selected>John</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsTwo;