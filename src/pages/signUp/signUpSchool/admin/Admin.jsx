import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";

const Admin = ({ formData, setFormData }) => {
  return (
    <div className="account-section">
      <div className='container'>
        <div className="row g-5 align-items-start justify-content-center">
          <div className="col-lg-4">
            <h4 className='fw-bold'>Admin users</h4>
            <p>What happens next:</p>
            <div className="d-flex">
              <div className='me-2'><h2 style={{ color: "#2697FF", fontWeight: 'bolder' }}>1</h2></div>
              <div><p>Teachers’ Directory administration staff will contact the school to confirm the details and add the school on the system.</p></div>
            </div>
            <div className="d-flex">
              <div className='me-2'><h2 style={{ color: "#2697FF", fontWeight: 'bolder' }}>2</h2></div>
              <div><p>By default the principal is created as the school <span className='fw-bolder'>primary</span> user. This will allow the principal to add and manage school users later on.</p></div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="account-container">
              <div class="mb-2 me-1">
                <label for="exampleFormControlInput1" class="form-label">Administrator's full name <IoInformationCircleOutline style={{ color: "#2697FF" }} /></label>
                <input
                  type="text"
                  class="form-control width-100"
                  placeholder="Jane Doe"
                  value={formData.administrator}
                  onChange={(e) => {
                    setFormData({ ...formData, administrator: e.target.value });
                  }} required />
              </div>
              <div className='d-flex align-items-end justify-content-between form-flex'>
                <div class="mb-2 ms-1 address-width">
                  <label for="exampleFormControlInput1" class="form-label">Address</label>
                  <input
                    type="text"
                    class="form-control "
                    placeholder="School address"
                    value={formData.schoolAddress}
                    onChange={(e) => {
                      setFormData({ ...formData, schoolAddress: e.target.value });
                    }} required />
                </div>
                <div className='mb-2 address-btn-width'>
                  <button className='add-btn'>Add manually</button>
                </div>
              </div>
              <div className='d-flex form-flex'>
                <div className='mb-2 me-1'>
                  <label for="exampleFormControlInput1" class="form-label">Administrator's email</label>
                  <input className='form-control width-50'
                    type="email"
                    placeholder='admin@myschool.ac.uk'
                    value={formData.administratorEmail}
                    onChange={(e) => {
                      setFormData({ ...formData, administratorEmail: e.target.value });
                    }}
                    required />
                  <p className='card-p'><  IoInformationCircleOutline />  Must be a valid school / organisational email
                    address.</p>
                </div>
                <div className='mb-2 ms-1'>
                  <label for="exampleFormControlInput1" class="form-label">Phone number (optional)</label>
                  <input className='form-control width-50'
                    type="text"
                    placeholder='https://myschool.ac.uk'
                    value={formData.number}
                    onChange={(e) => {
                      setFormData({ ...formData, number: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;