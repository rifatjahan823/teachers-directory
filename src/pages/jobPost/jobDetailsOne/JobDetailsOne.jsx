import React from 'react';

const JobDetailsOne = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h4 className='fw-bold'>Job details</h4>
                        <p>Advertise your vacancy. These details will be shown to registered teachers who fit your needs.You can save your progress at any moment.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            {/* -----=============---------- */}
                            <div class="mb-2 me-1">
                                <label for="exampleFormControlInput1" class="form-label">Job title</label>
                                <input
                                    type="text"
                                    class="form-control width-100"
                                    placeholder="John"
                                    value={formData.title}
                                    onChange={(e) => {
                                        setFormData({ ...formData, title: e.target.value });
                                    }} required />
                            </div>
                            {/* -----=============---------- */}
                            <div class="mb-2 me-1">
                                <label for="exampleFormControlInput1" class="form-label">Start date</label>
                                <input
                                    type="date"
                                    class="form-control width-100"
                                    placeholder="John"
                                    value={formData.date}
                                    onChange={(e) => {
                                        setFormData({ ...formData, date: e.target.value });
                                    }} required />
                            </div>
                            <div className='d-flex align-items-end justify-content-between form-flex'>
                                <div class="mb-2 ms-1 width-50">
                                    <label for="exampleFormControlInput1" class="form-label">Advert expiry date</label>
                                    <input
                                    type="date"
                                    class="form-control"
                                    placeholder="John"
                                    value={formData.expiryDate}
                                    onChange={(e) => {
                                        setFormData({ ...formData, expiryDate: e.target.value });
                                    }} required />
                                </div>
                                <div class="mb-2 ms-1 width-50">
                                    <label for="exampleFormControlInput1" class="form-label">Advert expiry date</label>
                                    <input
                                    type="time"
                                    class="form-control"
                                    placeholder="11:59 pm"
                                    value={formData.time}
                                    onChange={(e) => {
                                        setFormData({ ...formData, time: e.target.value });
                                    }} required />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsOne;