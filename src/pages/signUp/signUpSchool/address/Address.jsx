import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";

const Address = ({ formData, setFormData }) => {
  return (
    <div className="account-section">
      <div className='container'>
        <div className="row g-5 align-items-start justify-content-center">
          <div className="col-lg-4">
            <h4 className='fw-bold'>School / Organisation
              address & information</h4>
            <p>This address will be displayed, and we will use your postcode to calculate distances to potential teachers.</p>
          </div>
          <div className="col-lg-8">
            <div className="account-container">
              <div class="mb-2 me-1">
                <label for="exampleFormControlInput1" class="form-label">School / Organisation name</label>
                <input
                  type="text"
                  class="form-control width-100"
                  placeholder="Business School of London"
                  value={formData.schoolName}
                  onChange={(e) => {
                    setFormData({ ...formData, schoolName: e.target.value });
                  }} required />
              </div>
              <div className='d-flex align-items-end justify-content-between form-flex'>
                <div class="mb-2 ms-1 address-width">
                  <label for="exampleFormControlInput1" class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="School address"
                    value={formData.address}
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value });
                    }} required />
                </div>
                <div className='mb-2 address-btn-width'>
                  <button className='add-btn'>Add manually</button>
                </div>
              </div>
              <div className='d-flex form-flex'>
                <div className='mb-2 me-1'>
                  <label for="exampleFormControlInput1" class="form-label">First Local authority</label>
                  <select class="form-select width-50" aria-label="Default select example" value={formData.authority} onChange={(e) => {
                    setFormData({ ...formData, authority: e.target.value });
                  }} required>
                    <option selected>Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className='mb-2 ms-1'>
                  <label for="exampleFormControlInput1" class="form-label">School website (Optional)</label>
                  <input className='form-control width-50'
                    type="text"
                    placeholder='https://myschool.ac.uk'
                    value={formData.website}
                    onChange={(e) => {
                      setFormData({ ...formData, website: e.target.value });
                    }}
                    required />
                   
                </div>
              </div>
              <div className=''>
                  <label for="exampleFormControlInput1" class="form-label">School Unique Reference Number (URN)</label>
                  <input className='form-control '
                    type="text"
                    placeholder='GLS895'
                    value={formData.urn}
                    onChange={(e) => {
                      setFormData({ ...formData, urn: e.target.value });
                    }}
                    required />
                  <p className='card-p'><  IoInformationCircleOutline />  Must be 8 characters long and must contain at least 1 uppercase letter and 1 digit character.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;