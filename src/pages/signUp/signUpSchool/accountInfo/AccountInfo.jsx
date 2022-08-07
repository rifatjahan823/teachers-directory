import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";

const AccountInfo = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Account information</h4>
                        <p>UK After the sign up process, we will send a link to your email address. You need to click it to verify your account.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                                <div className="d-flex form-flex">
                                    <div class="mb-2 me-1">
                                        <label for="exampleFormControlInput1" class="form-label">First name</label>
                                        <input
                                            type="text"
                                            class="form-control width-50"
                                            placeholder="Jhon"
                                            value={formData.firstName}
                                            onChange={(e) => {
                                                setFormData({ ...formData, firstName: e.target.value });
                                            }} required />
                                    </div>
                                    <div class="mb-2 ms-1">
                                        <label for="exampleFormControlInput1" class="form-label">Surname</label>
                                        <input
                                            type="text"
                                            class="form-control width-50"
                                            placeholder="Doe"
                                            value={formData.sureName}
                                            onChange={(e) => {
                                                setFormData({ ...formData, sureName: e.target.value });
                                            }} required />
                                    </div>
                                </div>
                                <div className='mb-2 '>
                                    <label for="exampleFormControlInput1" class="form-label">Job title</label>
                                    <input className='form-control width-100'
                                        type="text"
                                        placeholder="Head of Department"
                                        value={formData.jobTitle}
                                        onChange={(e) => {
                                            setFormData({ ...formData, jobTitle: e.target.value });
                                        }}
                                        required />
                                </div>
                                <div className='d-flex form-flex'>
                                    <div className='mb-2 me-1'>
                                        <label for="exampleFormControlInput3" class="form-label">Email address</label>
                                        <input className='form-control width-50'
                                        type="email"
                                        placeholder="contact@myschool.ac.uk"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData,email: e.target.value });
                                        }}
                                        required />
                                         <p className='card-p'><  IoInformationCircleOutline />  Must be a valid school/organisational email address.</p>
                                    </div>
                                    <div className='mb-2 ms-1'>
                                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                                        <input className='form-control width-50'
                                            type="password"
                                            value={formData.password}
                                            onChange={(e) => {
                                                setFormData({ ...formData, password: e.target.value });
                                            }}
                                            required />
                                             <p className='card-p'><  IoInformationCircleOutline />  Must be 8 characters long and must contain at least 1 uppercase letter and 1 digit character.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;