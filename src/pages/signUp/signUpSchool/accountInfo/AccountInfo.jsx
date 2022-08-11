import React, { useState } from 'react';
import { IoInformationCircleOutline, } from "react-icons/io5";
import { BsEye,BsEyeSlash} from "react-icons/bs";

const AccountInfo = ({ formData, setFormData }) => {
    const [showPassword,setShowPassword] =useState(true);
    const togglePassword =()=>{
        setShowPassword(!showPassword)
    }
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
                                <div class="mb-2 me-1 width-50">
                                    <label for="exampleFormControlInput1" class="form-label">First name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Jhon"
                                        value={formData.firstName}
                                        onChange={(e) => {
                                            setFormData({ ...formData, firstName: e.target.value });
                                        }} required />
                                </div>
                                <div class="mb-2 ms-1 width-50">
                                    <label for="exampleFormControlInput1" class="form-label">Surname</label>
                                    <input
                                        type="text"
                                        class="form-control"
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
                                <div className='mb-2 me-1 width-50'>
                                    <label for="exampleFormControlInput3" class="form-label">Email address</label>
                                    <input className='form-control'
                                        type="email"
                                        placeholder="contact@myschool.ac.uk"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                        }}
                                        required />
                                    <p className='card-p'><  IoInformationCircleOutline />  Must be a valid school/organisational email address.</p>
                                </div>
                                <div className='mb-2 ms-1 width-50'>
                                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                                    <div className='input-group'>
                                        <input className='form-control  border-end-0'
                                            type={showPassword?"text":"password"}
                                            value={formData.password}
                                            onChange={(e) => {
                                                setFormData({ ...formData, password: e.target.value });
                                            }}
                                            required />
                                            <button onClick={togglePassword} className='input-group-text bg-white border-start-0 '>{showPassword?<BsEye/>:<BsEyeSlash/>}</button>
                                    </div>
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