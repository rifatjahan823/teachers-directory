import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit, } from "react-icons/fi";
import {BsFillStarFill,BsStar} from "react-icons/bs";

const Subject = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Subjects</h4>
                        <p>Add the subject(s) you teach. You must select one or two main subjects that will appear on your profile.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            <div class="mb-2 me-1">
                                <label for="exampleFormControlInput1" class="form-label">Title <  IoInformationCircleOutline style={{ color: "#2697FF" }} /></label>
                                <input
                                    type="text"
                                    class="form-control width-100"
                                    placeholder="Business School of London"
                                    value={formData.schoolName}
                                    onChange={(e) => {
                                        setFormData({ ...formData, schoolName: e.target.value });
                                    }} required />
                            </div>
                            <div className='table-responsive'>
                                <table class="table table-bordered  border">
                                    <thead>
                                        <tr>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Level taught</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Maths</td>
                                            <td>Primary, Secondary, GCSE</td>
                                            <td className='d-flex'>
                                                <FiEdit  style={{ color: "#6FE9C0" }} />
                                                <BsFillStarFill className='mx-2' style={{ color: "#FFA700" }} /> 
                                                <RiDeleteBinLine  style={{ color: "#E882A5" }} /> 
                                                </td>
                                        </tr>
                                        <tr>
                                            <td>Science</td>
                                            <td>Degree (or higher)</td>
                                            <td className='d-flex'>
                                                <FiEdit  style={{ color: "#6FE9C0" }} />
                                                <BsStar className='mx-2' style={{ color: "#FFA700" }} /> 
                                                <RiDeleteBinLine style={{ color: "#E882A5" }} /> </td>
                                        </tr>
                                        <tr>
                                            <td>Computing</td>
                                            <td>Further education</td>
                                            <td className='d-flex'>
                                                <FiEdit  style={{ color: "#6FE9C0" }} />
                                                <BsFillStarFill className='mx-2' style={{ color: "#FFA700" }} /> 
                                                <RiDeleteBinLine  style={{ color: "#E882A5" }} /> 
                                                </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='d-flex subject-flex justify-content-between'>
                                <div className='form-width'>
                                    <select class="form-select" aria-label="Default select example" value={formData.subject} onChange={(e) => {
                                        setFormData({ ...formData, subject: e.target.value });
                                    }} >
                                        <option selected>Type/Choose subject</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='form-width my-2 my-lg-0'>
                                    <select class="form-select " aria-label="Default select example" value={formData.level} onChange={(e) => {
                                        setFormData({ ...formData, level: e.target.value });
                                    }} >
                                        <option selected>Level</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='ms-0 ms-md-2 mt-2 mt-md-0 '>
                                    <button className='adds-btn'>Add manually</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subject;