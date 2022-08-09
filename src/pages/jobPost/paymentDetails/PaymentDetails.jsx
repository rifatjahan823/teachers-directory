import React from 'react';

const PaymentDetails = ({ formData, setFormData }) => {
    return (
        <div className="account-section">
            <div className='container'>
                <div className="row g-5 align-items-start justify-content-center">
                    <div className="col-lg-4">
                        <h3 className='fw-bold'>Payment details <br />
                            <span style={{ color: '#2697FF' }}> Invoice</span></h3>
                        <p>Aenean finibus risus a sodales tincidunt. Mauris fringilla varius ex sed imperdiet. Donec blandit, nibh quis sagittis vulputate, quam sapien vulputate odio.</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="account-container">
                            <div className='table-responsive'>
                                <table class="table table-bordered payment-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td rowspan="4">1 job advert (30 day duration)</td>
                                            <td className='text-end'>£99.00</td>
                                        </tr>
                                        <tr className='tbale-nth'>
                                            <td className='d-flex justify-content-between align-items-center'>
                                                <p>Subtotal</p>
                                                <p>£99.00</p>
                                            </td>
                                        </tr>
                                        <tr className='tbale-nth'>
                                            <td className='d-flex justify-content-between align-items-center'>
                                                <p>VAT/Tax</p>
                                                <p>£99.00</p>
                                            </td>
                                        </tr>
                                        <tr className='table-total'>
                                            <td className='d-flex justify-content-between align-items-center'>
                                                <p className='text-white'>Total</p>
                                                <p className='text-white'>£108.90</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* -----=============---------- */}
                            <div className='d-flex align-items-end justify-content-between form-flex'>
                                <div className='mb-2 ms-1 address-width'>
                                    <label for="exampleFormControlInput1" class="form-label">Add discount code</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Discount code"
                                        value={formData.discount}
                                        onChange={(e) => {
                                            setFormData({ ...formData,discount: e.target.value });
                                        }} required />
                                </div>
                                <div className='mb-2 address-btn-width'>
                                    <button className='add-btn px-5'>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;