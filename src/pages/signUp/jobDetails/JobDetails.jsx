import React, { useState } from 'react';
import './JobDetails.css'
import JobDetailsOne from './jobDetailsOne/JobDetailsOne';
import JobDetailsThree from './jobDetailsThree/JobDetailsThree';
import JobDetailsTwo from './jobDetailsTwo/JobDetailsTwo';
import bg1 from '../../../assets/Sign-up/job-details-steper-1.png';
import bg2 from '../../../assets/Sign-up/job-details-steper-2.png';
import SchoolDetails from './schoolDetails/SchoolDetails';
import ContactDetails from './contcatDetails/ContactDetails';
import PaymentDetails from './paymentDetails/PaymentDetails';

const JobDetails = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        expiryDate: "",
        time: "",
        contact: "",
        hour: "",
        jobtitle: "",
        number: "",
        applications: "",
        schoolName: "",
        applicationsSchool: "",
        website: "",
        firstName: "",
        sureName: "",
        contactTitle: "",
        jobTitle: "",
        phoneNumber: "",
        email: "",
       

    });

    const FormTitles = ["1", "2", "3","4","5","6"];

    const PageDisplay = () => {
        if (page === 0) {
            return <JobDetailsOne formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <JobDetailsTwo formData={formData} setFormData={setFormData} />;
        } 
        else if (page === 2){
            return <JobDetailsThree formData={formData} setFormData={setFormData} />;
        }
        else if (page === 3){
            return <SchoolDetails formData={formData} setFormData={setFormData} />;
        }
        else if (page === 4){
            return <ContactDetails formData={formData} setFormData={setFormData} />;
        }
        else {
            return <PaymentDetails formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className='signup-school'>
            <div className="container">
                <div className="form">
                    <div className='my-3'>
                    {
                            page === 0 ? <img className='img-fluid d-block m-auto' src={bg1} alt="" /> : page === 1 ? <img className='img-fluid d-block m-auto' src={bg1} alt="" /> : page === 2 ? <img className='img-fluid d-block m-auto' src={bg1} alt="" /> : page === 3 ? <img className='img-fluid d-block m-auto' src={bg1} alt="" /> : page === 4 ? <img className='img-fluid d-block m-auto' src={bg1} alt="" />  : page === 5 ? <img className='img-fluid d-block m-auto' src={bg2} alt="" />:""
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

export default JobDetails;