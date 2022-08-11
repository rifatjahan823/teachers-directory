import React from 'react';
import union from '../../../../assets/Sign-up/Union 3.png';
import {IoInformationCircleOutline} from "react-icons/io5";
import pdf from '../.././../../assets/Sign-up/pdf-svgrepo-com (1).png';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit} from "react-icons/fi";

const Details = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Teaching details</h4>
                        <p>Fusce viverra turpis quis mi mollis, ac ornare arcu commodo. Aliquam imperdiet sodales elementum. Quisque vulputate risus eu dui pellentesque volutpat.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            <div className='d-flex form-flex'>
                                <div className='mb-2 me-1 width-50'>
                                    <label for="exampleFormControlInput1" class="form-label">Position</label>
                                    <select class="form-select " aria-label="Default select example" value={formData.position} onChange={(e) => {
                                        setFormData({ ...formData, position: e.target.value });
                                    }} required>
                                        <option selected>Select position</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='mb-2 ms-1 width-50'>
                                    <label for="exampleFormControlInput1" class="form-label">Workplace</label>
                                    <select class="form-select " aria-label="Default select example" value={formData.workplace} onChange={(e) => {
                                        setFormData({ ...formData, workplace: e.target.value });
                                    }} required>
                                        <option selected>Select workplace</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className='d-flex form-flex'>
                                <div className='mb-2 me-1'>
                                    <label for="exampleFormControlInput1" class="form-label">What position do you hold? (optional)</label>
                                    <select class="form-select width-50" aria-label="Default select example" value={formData.optionalPosition} onChange={(e) => {
                                        setFormData({ ...formData, optionalPosition: e.target.value });
                                    }} >
                                        <option selected>Select position</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='mb-2 ms-1'>
                                    <label for="exampleFormControlInput1" class="form-label">How long have you been teaching? (optional)</label>
                                    <select class="form-select width-50" aria-label="Default select example" value={formData.workTime} onChange={(e) => {
                                        setFormData({ ...formData, workTime: e.target.value });
                                    }} >
                                        <option selected>Select number of years</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label class="form-label" >Do you have a teaching qualification? (optional)</label><br />
                                <button className='quiz-btn'>yes</button>
                                <button className='quiz-btn ms-2'>No</button>
                            </div>
                            <div className='mt-2'>
                                <label class="form-label" >Do you have a degree? (optional)</label><br />
                                <button className='quiz-btn'>yes</button>
                                <button className='quiz-btn ms-2'>No</button>
                            </div>
                            <div className='mt-2'>
                                <label class="form-label" >Are you currently an examiner?</label><br />
                                <button className='quiz-btn'>yes</button>
                                <button className='quiz-btn ms-2'>No</button>
                            </div>
                            <div className='mt-4'>
                            <label class="form-label">Teaching evidence (e.g. payslip or contract):</label>
                            <div className='card px-3 py-5 text-center'>
                                <img className='union-img' src={union } alt="" />
                                <h6>Select a file or drag it here</h6>
                                <button className='prev details-btn'>Select a file</button>
                            </div>
                            <p className='card-p'><  IoInformationCircleOutline />  Accepted file formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>
                        </div>
                        <div className='d-flex pdf mt-2 justify-content-between pdf'> 
                             <div className='d-flex align-items-center'>
                                <img className='img-fluif me-2' src={pdf} alt="" />
                                <h6>Maths teaching payslip</h6>    
                            </div>
                            <div className='d-flex  align-items-center'>
                                <p>PDF, 126.9 KB</p> 
                                <FiEdit className='mx-2' style={{color:"#6FE9C0"}}/>   
                                <RiDeleteBinLine style={{color:"#E882A5"}}/>   
                            </div>           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;