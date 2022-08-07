import React from 'react';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GrBold, GrUnderline } from "react-icons/gr";
import { BsTypeItalic, BsEraserFill, BsListOl, BsListUl } from "react-icons/bs";
import union from '../../../../assets/Sign-up/Union 3.png';
import { IoInformationCircleOutline } from "react-icons/io5";
import pdf from '../.././../../assets/Sign-up/pdf-svgrepo-com (1).png';
import doc from '../.././../../assets/Sign-up/doc-svgrepo-com.png';

const Qualification = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Qualification &
                            Achievements</h4>
                        <p>Etiam gravida, massa sit amet interdum finibus, metus felis tincidunt enim, id lacinia eros elit ut quam. Mauris tristique eget nisl at semper. Curabitur vestibulum et lacus at lacinia. Vestibulum sed varius turpis.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            <h4>Qualifications (optional)</h4>
                            <div className='table-responsive'>
                                <table class="table table-bordered  border">
                                    <thead>
                                        <tr>
                                            <th scope="col">University</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Grade</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Brunel University London</td>
                                            <td>BSc (Hons) Mathematics and
                                                Statistics with Management</td>
                                            <td>Degree</td>
                                            <td className='d-flex'>
                                                <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                                <RiDeleteBinLine style={{ color: "#E882A5" }} /> </td>
                                        </tr>
                                        <tr>
                                            <td>London University</td>
                                            <td>Advanced Sciences</td>
                                            <td>A</td>
                                            <td className='d-flex'>
                                                <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                                <RiDeleteBinLine style={{ color: "#E882A5" }} /> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='d-flex flex-column flex-md-row'>
                                <div>
                                    <select class="form-select " aria-label="Default select example" value={formData.university} onChange={(e) => {
                                        setFormData({ ...formData, university: e.target.value });
                                    }} >
                                        <option selected>Type/Choose university</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='mx-0 mx-md-2 my-2 my-md-0'>
                                    <input className='form-control'
                                        type="text"
                                        placeholder="Type course"
                                        value={formData.course}
                                        onChange={(e) => {
                                            setFormData({ ...formData, course: e.target.value });
                                        }}
                                        required />
                                </div>
                                <div>
                                    <select class="form-select " aria-label="Default select example" value={formData.workTime} onChange={(e) => {
                                        setFormData({ ...formData, workTime: e.target.value });
                                    }} >
                                        <option selected>Type course</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className='ms-0 ms-md-2 mt-2 mt-md-0 '>
                                    <button className='adds-btn'>Add</button>
                                </div>
                            </div>
                            <h4 className='my-4'>Other relevant achievements (optional)</h4>
                            <div className='table-responsive'>
                                <table class="table table-bordered  border">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Grade</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Global Teacher Prize</td>
                                            <td>Vivamus diam est, suscipit
                                                nec sagittis id, sodales id
                                                purus.</td>
                                            <td>B</td>
                                            <td className='d-flex'>
                                                <FiEdit className='mx-2' style={{ color: "#6FE9C0" }} />
                                                <RiDeleteBinLine style={{ color: "#E882A5" }} /> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='d-flex flex-column flex-md-row'>
                                <div>
                                    <input className='form-control'
                                        type="text"
                                        placeholder="Type title"
                                        value={formData.title}
                                        onChange={(e) => {
                                            setFormData({ ...formData, title: e.target.value });
                                        }}
                                        required />
                                </div>
                                <div className='mx-0 mx-md-2 my-2 my-md-0'>
                                    <input className='form-control'
                                        type="text"
                                        placeholder="Type description"
                                        value={formData.description}
                                        onChange={(e) => {
                                            setFormData({ ...formData, description: e.target.value });
                                        }}
                                        required />
                                </div>
                                <div>
                                    <input className='form-control'
                                        type="text"
                                        placeholder="Type grade"
                                        value={formData.grade}
                                        onChange={(e) => {
                                            setFormData({ ...formData, grade: e.target.value });
                                        }}
                                        required />
                                </div>
                                <div className='ms-0 ms-md-2 mt-2 mt-md-0 '>
                                    <button className='adds-btn'>Add</button>
                                </div>
                            </div>
                            <h4 className='my-3'>Certificates and showcase work (optional)</h4>
                            <div className='d-flex align-items-center justify-content-between mt-2'>
                                <p>Description</p>
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
                                <textarea className='w-100 pt-5 ps-5' placeholder='Tell us more about your certifications and work...' name="" id="" cols="" rows="10">

                                </textarea>
                            </div>
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
                                    <img className='img-fluif me-2' src={doc} alt="" />
                                    <h6>Academic paper on subject</h6>
                                </div>
                                <div className='d-flex  align-items-center'>
                                    <p>DOC, 87.2 KB</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Qualification;