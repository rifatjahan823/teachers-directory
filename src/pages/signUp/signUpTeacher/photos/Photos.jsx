import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import union from '../../../../assets/Sign-up/Union 3.png';
import { IoInformationCircleOutline } from "react-icons/io5";
import img1 from '../.././../../assets/Sign-up/pexels-andrea.png';
import img2 from '../.././../../assets/Sign-up/pexels-kampus.png';
import img3 from '../.././../../assets/Sign-up/pexels-fauxels.png';

const Photos = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Photos & Video
                            (optional)</h4>
                        <p>Upload a few photos that show you tutoring and/or paste in a link to a video platform of you introducing yourself.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            {/* -----------+++++++++++------------ */}
                            <div className=''>
                                <h6>Upload photos</h6>
                                <div className='card px-3 py-5 text-center'>
                                    <img className='union-img' src={union} alt="" />
                                    <h6>Select a file or drag it here</h6>
                                    <button className='prev details-btn'>Select a file</button>
                                </div>
                                <p className='card-p'><  IoInformationCircleOutline />  Accepted file formats: PDF, DOC, DOCX, JPG, JPEG, PNG</p>
                            </div>
                            {/* ------+++++++------------ */}
                            <div className="row gx-2 gy-4">
                                <div className="col-md-6 col-12">
                                    <img className='img-fluid' src={img1} alt="" />
                                    {/* -----++++++----------- */}
                                    <div className='d-flex pdf  justify-content-between'>
                                        <h6>image3-photo-title.jpeg</h6>
                                        <div className='d-flex  align-items-center'>
                                            <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                            <RiDeleteBinLine style={{ color: "#E882A5" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <img className='img-fluid' src={img2} alt="" />
                                    {/* -----++++++----------- */}
                                    <div className='d-flex pdf  justify-content-between'>
                                        <h6>image3-photo-title.jpeg</h6>
                                        <div className='d-flex  align-items-center'>
                                            <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                            <RiDeleteBinLine style={{ color: "#E882A5" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <img className='img-fluid' src={img3} alt="" />
                                    {/* -----++++++----------- */}
                                    <div className='d-flex pdf  justify-content-between'>
                                        <h6>image3-photo-title.jpeg</h6>
                                        <div className='d-flex  align-items-center'>
                                            <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                            <RiDeleteBinLine style={{ color: "#E882A5" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* -------+++++++++++------- */}
                            <div className='mt-3'>
                                <h6>Video link</h6>
                                <div>
                                    <input className='form-control'
                                        type="text"
                                        placeholder="Paste in YouTube or Vimeo link"
                                        value={formData.grade}
                                        onChange={(e) => {
                                            setFormData({ ...formData, grade: e.target.value });
                                        }}
                                        required />
                                </div>
                                <p  style={{ color: "#2697FF" }}><IoInformationCircleOutline /> Video link must be a valid YouTube or Vimeo link</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;