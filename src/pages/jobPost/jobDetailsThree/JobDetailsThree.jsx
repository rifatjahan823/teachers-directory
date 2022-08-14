import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";
import { GrBold, GrUnderline } from "react-icons/gr";
import { BsTypeItalic, BsEraserFill, BsListOl, BsListUl } from "react-icons/bs";

const JobDetailsThree = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row gy-5 gx-3 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Job details</h4>
                        <p className="details_paragraph">Advertise your vacancy. These details will be shown to registered teachers who fit your needs.You can save your progress at any moment.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            {/* -------+++++++++++------- */}
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <p className='fw-bold m-0'>Job description</p>
                                <p style={{ color: "#009FF5" }}>0/2000 words</p>
                            </div>
                            <div className='text-area'>
                                <div className='edit-section'>
                                    <div className='d-flex align-items-cenetr'>
                                        <div className='d-flex edit'>
                                            <GrBold className='border bg-white fs-4 p-1' />
                                            <BsTypeItalic className='border bg-white fs-4 p-1' />
                                            <GrUnderline className='border bg-white fs-4 p-1' />
                                            <BsEraserFill className='border bg-white fs-4 p-1' />
                                        </div>
                                        <div className='d-flex edit align-items-cenetr'>
                                            <BsListUl className='border bg-white fs-4 p-1' />
                                            <BsListOl className='border bg-white fs-4 p-1' />
                                        </div>
                                    </div>
                                </div>
                                <textarea className='w-100 pt-5 ps-5' placeholder='Tell teachers more about this vacancy...' name="" id="" cols="" rows="8">
                                </textarea>
                            </div>
                            {/* -----=============---------- */}
                            <div className="row g-2  verified">
                                <label htmlFor="">Application method <IoInformationCircleOutline style={{ color: '#2697FF' }} /> </label>
                                <div className="col-lg-4 col-12">
                                    <div className=' border rounded'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div class="form-check me-4 py-2 ms-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                <label class="form-check-label " for="flexCheckDefault11">
                                                    <h6>Online application form</h6>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className=' border rounded'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div class="form-check me-4 py-2 ms-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                <label class="form-check-label " for="flexCheckDefault11">
                                                    <h6>CV/File attachment</h6>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className=' border rounded'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div class="form-check me-4 py-2 ms-2">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                <label class="form-check-label " for="flexCheckDefault11">
                                                    <h6>Redirect to your website</h6>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* -----=============---------- */}
                            <div class="mb-2 me-1">
                                <label for="exampleFormControlInput1" class="form-label">Email to receive applications <IoInformationCircleOutline style={{ color: '#2697FF' }} /></label>

                                <input class="form-control width-100" placeholder='contact@myschool.ac.uk' value={formData.applications} onChange={(e) => {
                                    setFormData({ ...formData, applications: e.target.value });
                                }} />
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsThree;