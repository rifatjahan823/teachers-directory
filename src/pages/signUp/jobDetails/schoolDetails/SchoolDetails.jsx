import React from 'react';
import { IoInformationCircleOutline, } from "react-icons/io5";
import { BsGeoAltFill } from "react-icons/bs";
import school from '../../../../assets/Sign-up/school.png';
import union from '../../../../assets/Sign-up/Union 3.png'

const SchoolDetails = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row gy-5 gx-3 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>School /
                            Organisation details</h4>
                        <p>Give more details about your school/organisation. This will be used to create a school profile.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            {/* -----=============---------- */}
                            <div class="mb-2 me-1">
                                <label for="exampleFormControlInput1" class="form-label">Name of the school/organisation</label>
                                <input
                                    type="text"
                                    class="form-control width-100"
                                    placeholder="My Schoolohn"
                                    value={formData.schoolName}
                                    onChange={(e) => {
                                        setFormData({ ...formData, schoolName: e.target.value });
                                    }} required />
                            </div>
                            {/* -----=============---------- */}
                            <div className='d-flex align-items-end justify-content-between form-flex'>
                                <div className='mb-2 ms-1 address-width'>
                                    <label for="exampleFormControlInput1" class="form-label">Address</label>
                                    <div class=" input-group">
                                        <input
                                            type="text"
                                            class="form-control border-end-0"
                                            placeholder="School address"
                                            value={formData.address}
                                            onChange={(e) => {
                                                setFormData({ ...formData, address: e.target.value });
                                            }} required />
                                        <button className='input-group-text bg-white border-start-0'><BsGeoAltFill style={{ color: '#BFBFBF' }} /></button>
                                    </div>
                                </div>
                                <div className='mb-2 address-btn-width'>
                                    <button className='add-btn'>Add manually</button>
                                </div>
                            </div>
                            {/* ==========------=========== */}
                            <div className=''>
                                <label for="exampleFormControlInput1" class="form-label">School type/education phase</label>
                                <select class="form-select width-100" aria-label="Default select example" value={formData.authority} onChange={(e) => {
                                    setFormData({ ...formData, authority: e.target.value });
                                }} required>
                                    <option selected>Select school type/education phase</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            {/* --------============----------- */}
                            <div className="d-flex form-flex">
                                <div class="mb-2 me-1 mt-1">
                                    <label for="exampleFormControlInput1" class="form-label">School website (optional) <IoInformationCircleOutline style={{color:"#2697FF"}}/></label>
                                    <input
                                        type="text"
                                        class="form-control width-50"
                                        placeholder="https://myschool.ac.uk/hon"
                                        value={formData.website}
                                        onChange={(e) => {
                                            setFormData({ ...formData, website: e.target.value });
                                        }} required />
                                </div>
                                <div class="mb-2 ms-1">
                                    <label for="exampleFormControlInput1" class="form-label">Email to receive applications <IoInformationCircleOutline style={{color:"#2697FF"}}/></label>
                                    <input
                                        type="text"
                                        class="form-control width-50"
                                        placeholder="contact@myschool.ac.ukoeD"
                                        value={formData.applicationsSchool}
                                        onChange={(e) => {
                                            setFormData({ ...formData, applicationsSchool: e.target.value });
                                        }} required />
                                </div>
                            </div>
                            {/* -----------+++++++++++------------ */}
                            <div className="row gx-2 gy-3 align-items-ceneter">
                                <div className="col-lg-8 col-12">
                                    <div className=''>
                                        <h6>School logo (optional)</h6>
                                        <div className='card px-3 py-5 text-center'>
                                            <img className='union-img' src={union} alt="" />
                                            <h6>Select a file or drag it here</h6>
                                            <button className='prev details-btn'>Select a file</button>
                                        </div>
                                        <p className='card-p'><  IoInformationCircleOutline />  Accepted file formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <h6>Preview</h6>
                                    <img className='profile-img' src={school} alt="" />
                                </div>
                            </div>
                            {/* --------============----------- */}
                            <div className="d-flex form-flex ter">
                                <div class="mb-2 me-1 d-flex  align-items-center width-50">
                                <div className='pe-2'>From</div> 
                                    <input
                                        type="number"
                                        class="form-control"
                                        placeholder="7"
                                        value={formData.website}
                                        onChange={(e) => {
                                            setFormData({ ...formData, website: e.target.value });
                                        }} required />
                                </div>
                                <div class="mb-2 ms-1 d-flex  align-items-center width-50">
                                <div className='pe-2'>To</div>
                                    <input
                                        type="number"
                                        class="form-control "
                                        placeholder="16"
                                        value={formData.applicationsSchool}
                                        onChange={(e) => {
                                            setFormData({ ...formData, applicationsSchool: e.target.value });
                                        }} required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolDetails;