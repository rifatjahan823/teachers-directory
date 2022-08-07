import React, { useState } from 'react';
import './SignUpTeacher.css'
import TeacherAccount from './teacherAccount/TeacherAccount';
import img1 from '../../../assets/Sign-up/teacher-stepper-1.png';
import img2 from '../../../assets/Sign-up/teacher-stepper-2.png';
import img3 from '../../../assets/Sign-up/teacher-stepper-3.png';
import img4 from '../../../assets/Sign-up/teacher-stepper-4.png';
import img5 from '../../../assets/Sign-up/teacher-stepper-5.png';
import img6 from '../../../assets/Sign-up/teacher-stepper-6.png';
import TeacherAddress from './teacherAddress/TeacherAddress';
import Subject from './subject/Subject';
import Details from './details/Details';
import Qualification from './qualification/Qualification';

const SignUpTeacher = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        sureName: "",
        username: "",
        schoolName: "",
        address: "",
        position: "",
        workplace:"",
        optionalPosition:"",
        workTime:"",
        university:"",
        course:"",
        description:"",
        title:"",
        grade:"",
        subject:"",
        level:"",

    });

    const FormTitles = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    const PageDisplay = () => {
        if (page === 0) {
            return <TeacherAccount formData={formData} setFormData={setFormData} />;
        }
        else if (page === 1) {
            return <TeacherAddress formData={formData} setFormData={setFormData} />;
        }
        else if (page === 2) {
            return <Subject formData={formData} setFormData={setFormData} />;
        }
        else if (page === 3) {
            return <Details formData={formData} setFormData={setFormData} />;
        }

        else if (page === 4) {
            return <Qualification formData={formData} setFormData={setFormData} />;
        }
        else if (page === 5) {
            return <Subject formData={formData} setFormData={setFormData} />;
        }

        else if (page === 6) {
            return <Subject formData={formData} setFormData={setFormData} />;
        } else {
            return <Subject formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className='signup-school'>
            <div className="container">
                <div className="form">
                    <div className='my-3'>
                        {
                            page === 0 ? <img className='img-fluid' src={img1} alt="" /> : page === 1 ? <img className='img-fluid' src={img1} alt="" /> : page === 2 ? <img className='img-fluid' src={img2} alt="" /> : page === 3 ? <img className='img-fluid' src={img2} alt="" /> : page === 4 ? <img className='img-fluid' src={img2} alt="" /> : page === 5 ? <img className='img-fluid' src={img3} alt="" /> : page === 6 ? <img className='img-fluid' src={img4} alt="" /> : page === 7 ? <img className='img-fluid' src={img5} alt="" /> : page === 8 ? <img className='img-fluid' src={img6} alt="" /> : page === 9 ? <img className='img-fluid' src={img6} alt="" /> : ""
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
                            <div>
                            <button className='prev me-2'>svae as a draft</button>
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
        </div>
    );
};

export default SignUpTeacher;