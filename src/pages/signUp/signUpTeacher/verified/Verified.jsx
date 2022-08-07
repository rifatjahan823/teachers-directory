import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GrBold, GrUnderline } from "react-icons/gr";
import { BsTypeItalic, BsEraserFill, BsListOl, BsListUl } from "react-icons/bs";
import union from '../../../../assets/Sign-up/Union 3.png';
import { IoInformationCircleOutline } from "react-icons/io5";
import pdf from '../.././../../assets/Sign-up/pdf-svgrepo-com (1).png';
import doc from '../.././../../assets/Sign-up/doc-svgrepo-com.png';

const Verified = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-1 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Availability</h4>
                        <p>By selecting ‘Yes’ this will be shown on your profile as ‘Available’ for work.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            <h5>Please select one of the following:</h5>
                            <div className="row g-3  verified">
                                <div className="col-lg-4 col-12">
                                    <div className=' border rounded'>
                                        <div class="form-check me-4 py-2 ms-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                            <label class="form-check-label " for="flexCheckDefault11">
                                                <h6>Teaching certificate</h6>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className=' border rounded'>
                                        <div class="form-check me-4 py-2 ms-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                            <label class="form-check-label " for="flexCheckDefault11">
                                                <h6>Past payslip</h6>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className=' border rounded'>
                                        <div class="form-check me-4 py-2 ms-2">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                            <label class="form-check-label " for="flexCheckDefault11">
                                                <h6>Teachers’ pension document</h6>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ---++++-------- */}
                            <div className='mt-4'>
                                <div className='card px-3 py-5 text-center'>
                                    <img className='union-img' src={union} alt="" />
                                    <h6>Select a file or drag it here</h6>
                                    <button className='prev details-btn'>Select a file</button>
                                </div>
                                <p className='card-p'><  IoInformationCircleOutline />  Accepted file formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>
                            </div>
                            {/* -----++++++----------- */}
                            <div className='d-flex pdf mt-2 justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img className='img-fluif me-2' src={doc} alt="" />
                                    <h6>Showcase work</h6>
                                </div>
                                <div className='d-flex  align-items-center'>
                                    <p>DOC, 48.1 KB</p>
                                    <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                    <RiDeleteBinLine style={{ color: "#E882A5" }} />
                                </div>
                            </div>
                            {/* -----++++++----------- */}
                            <div className='d-flex pdf mt-2 justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <img className='img-fluif me-2' src={pdf} alt="" />
                                    <h6>Academic certificate</h6>
                                </div>
                                <div className='d-flex  align-items-center'>
                                    <p>PDF, 126.9 KB</p>
                                    <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                    <RiDeleteBinLine style={{ color: "#E882A5" }} />
                                </div>
                            </div>
                            {/* --------============--------- */}
                            <div className=' border rounded mt-3'>
                                <div class="form-check me-4 py-2 ms-2">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                    <label class="form-check-label " for="flexCheckDefault11">
                                        <h6>School’s/educational email address</h6>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verified;