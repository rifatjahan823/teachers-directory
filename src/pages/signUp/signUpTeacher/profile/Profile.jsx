import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GrBold, GrUnderline } from "react-icons/gr";
import { BsTypeItalic, BsEraserFill, BsListOl, BsListUl } from "react-icons/bs";
import union from '../../../../assets/Sign-up/Union 3.png';
import { IoInformationCircleOutline } from "react-icons/io5";
import profile from '../.././../../assets/Sign-up/Rectangle 198.png';


const Profile = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Your profile</h4>
                        <p>Upload a profile photo that is professional looking.Tell the schools about yourself.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            {/* -----------+++++++++++------------ */}
                            <div className="row gx-2 gy-4 align-items-ceneter">
                                <div className="col-lg-9 col-12">
                                    <div className=''>
                                        <h6>Upload your profile picture</h6>
                                        <div className='card px-3 py-5 text-center'>
                                            <img className='union-img' src={union} alt="" />
                                            <h6>Select a file or drag it here</h6>
                                            <button className='prev details-btn'>Select a file</button>
                                        </div>
                                        <p className='card-p'><  IoInformationCircleOutline />  Accepted file formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <h6>Preview</h6>
                                    <img className='profile-img' src={profile} alt="" />
                                </div>
                            </div>
                            {/* ------+++++++------------ */}
                            <div className='my-3'>
                                <h6>Gender</h6>
                                <div className='d-flex align-items-center'>
                                    <div class="form-check me-4">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                        <label class="form-check-label" for="flexCheckDefault11">
                                            <h6>Male</h6>
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                        <label class="form-check-label" for="flexCheckDefault11">
                                            <h6>Female</h6>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* -------+++++++++++------- */}
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <p>Summary</p>
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
                                <textarea className='w-100 pt-5 ps-5' placeholder='Tell us more about your certifications and work...' name="" id="" cols="" rows="8">
                                </textarea>
                            </div>
                            {/* --------++++++++------------ */}
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <p>About you</p>
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
                                <textarea className='w-100 pt-5 ps-5' placeholder='Write a description about you, your background, and what you offer...' name="" id="" cols="" rows="8">
                                </textarea>
                            </div>
                            {/* ------------++++++------------------ */}
                            <h5 className='py-3'>Website & social links</h5>
                            <div className='table-responsive'>
                                <table class="table table-bordered  border">
                                    <thead>
                                        <tr>
                                            <th scope="col">Platform</th>
                                            <th scope="col">Link</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Website</td>
                                            <td>https://mywebsite.co.uk/</td>
                                            <td className='d-flex'>
                                                <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                                <RiDeleteBinLine style={{ color: "#E882A5" }} /> </td>
                                        </tr>
                                        <tr>
                                            <td>LinkedIn</td>
                                            <td>www.linkedin.com/in/johndoe/</td>
                                            <td className='d-flex'>
                                                <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                                <RiDeleteBinLine style={{ color: "#E882A5" }} /> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='d-flex flex-column flex-md-row mt-3 mt-lg-0'>
                                <div className='profile-width'>
                                    <select class="form-select " aria-label="Default select example" value={formData.university} onChange={(e) => {
                                        setFormData({ ...formData, university: e.target.value });
                                    }} >
                                        <option selected>Type/Choose university</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='mx-0 mx-md-2 my-2 my-md-0 profile-width'>
                                    <input className='form-control'
                                        type="text"
                                        placeholder="Type course"
                                        value={formData.course}
                                        onChange={(e) => {
                                            setFormData({ ...formData, course: e.target.value });
                                        }}
                                        required />
                                </div>
                                <div className='ms-0 ms-md-2 mt-2 mt-md-0 '>
                                    <button className='adds-btn'>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;