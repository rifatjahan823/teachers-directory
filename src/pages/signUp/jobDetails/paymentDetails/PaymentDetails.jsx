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
                                <table class="table table-bordered ">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan="4">1 job advert (30 day duration)</td>
                                            <td className='text-end'>£99.00</td>
                                        </tr>
                                        <tr>
                                            <td className='d-flex justify-content-between align-items-center'>
                                                <p>Subtotal</p>
                                                <p>£99.00</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='d-flex justify-content-between align-items-center'>
                                            <p>VAT/Tax</p>
                                            <p>£99.00</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='d-flex justify-content-between align-items-center'>
                                               <p>Total</p>
                                               <p>£108.90</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;