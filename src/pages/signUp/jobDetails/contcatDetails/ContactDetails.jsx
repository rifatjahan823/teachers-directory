import React from 'react';
import { IoInformationCircleOutline, } from "react-icons/io5";

const ContactDetails = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Contact details</h4>
                        <p>Tell us more about yourself. This will be used to create your profile..</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            {/* --------============------ */}
                            <div className='d-flex align-items-end justify-content-between form-flex'>
                                <div class="mb-2 ms-1 address-width">
                                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                                    <input
                                        type="text"
                                        class="form-control width-100"
                                        placeholder="Select"
                                        value={formData.contactTitle}
                                        onChange={(e) => {
                                            setFormData({ ...formData, contactTitle: e.target.value });
                                        }} required />
                                </div>
                                <div class="mb-2 ms-1 address-width">
                                    <label for="exampleFormControlInput1" class="form-label">Job title (optional)</label>
                                    <select class="form-select width-50" aria-label="Default select example" value={formData.jobTitle} onChange={(e) => {
                                        setFormData({ ...formData, jobTitle: e.target.value });
                                    }} required>
                                        <option selected>Principal</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            {/* --------============------ */}
                            <div className='d-flex align-items-end justify-content-between form-flex'>
                                <div class="mb-2 ms-1 address-width">
                                    <label for="exampleFormControlInput1" class="form-label">First name</label>
                                    <input
                                        type="text"
                                        class="form-control width-100"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={(e) => {
                                            setFormData({ ...formData, firstName: e.target.value });
                                        }} required />
                                </div>
                                <div class="mb-2 ms-1 address-width">
                                    <label for="exampleFormControlInput1" class="form-label">Surname</label>
                                    <input
                                        type="text"
                                        class="form-control width-100"
                                        placeholder="Doe"
                                        value={formData.sureName}
                                        onChange={(e) => {
                                            setFormData({ ...formData, sureName: e.target.value });
                                        }} required />
                                </div>
                            </div>
                            {/* --------============----------- */}
                            <div className="d-flex form-flex">
                                <div class="mb-2 me-1">
                                    <label for="exampleFormControlInput1" class="form-label">Email address <IoInformationCircleOutline style={{ color: "#2697FF" }} /></label>
                                    <input
                                        type="email"
                                        class="form-control width-50"
                                        placeholder="me@myschool.ac.uk"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                        }} required />
                                </div>
                                <div class="mb-2 ms-1">
                                    <label for="exampleFormControlInput1" class="form-label">Phone number (optional) <IoInformationCircleOutline style={{ color: "#2697FF" }} /></label>
                                    <input
                                        type="number"
                                        class="form-control width-50"
                                        value={formData.phoneNumber}
                                        onChange={(e) => {
                                            setFormData({ ...formData, phoneNumber: e.target.value });
                                        }} />
                                </div>
                            </div>
                            {/* -------==========------- */}
                            <div className='contact-condition'>
                                <h6 style={{ color: "#FF2103" }}><IoInformationCircleOutline /> By posting this vacancy, you are agreeing to the following:</h6>
                                <h6>You have read and accept our <span><a href="#">terms and conditions.</a></span></h6>
                                <h6>You acknowledge and take responsibility for the contents and accuracy
                                    of this advert.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;