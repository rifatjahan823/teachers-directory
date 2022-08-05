import React, { useState } from 'react';
import AccountInfo from './accountInfo/AccountInfo';
import Address from './address/Address';
import Admin from './admin/Admin';
import bg1 from '../../../assets/Sign-up/Group 428.png';
import bg2 from '../../../assets/Sign-up/Group 428 (1).png';
import bg3 from '../../../assets/Sign-up/Group 428 (2).png';
import './SignupSchool.css'

const SignupSchool = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        sureName: "",
        username: "",
        schoolName: "",
        address: "",
        authority: "",
        administrator: "",
        schoolAddress: "",
        number: "",
        administratorEmail: "",
    });

    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <AccountInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <Address formData={formData} setFormData={setFormData} />;
        } else {
            return <Admin formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className='signup-school'>
            <div className="container">
                <div className="form">
                    <div className='my-3'>
                        {
                            page === 0 ? <img src={bg1} alt="" /> : page === 1 ? <img src={bg2} alt="" /> : <img src={bg3} alt="" />
                        }
                    </div>

                    <div className="form-container">
                        <div className="body">{PageDisplay()}</div>
                        <div className="footer">
                            <button className='prev'
                                disabled={page === 0}
                                onClick={() => {
                                    setPage((currPage) => currPage - 1);
                                }}
                            >
                                Back
                            </button>
                            <button className='next'
                                onClick={() => {
                                    if (page === FormTitles.length - 1) {
                                        alert("FORM SUBMITTED");
                                        console.log(formData);
                                    } else {
                                        setPage((currPage) => currPage + 1);
                                    }
                                }}
                            >
                                {page === FormTitles.length - 1 ? "Submit" : "Continue"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupSchool;