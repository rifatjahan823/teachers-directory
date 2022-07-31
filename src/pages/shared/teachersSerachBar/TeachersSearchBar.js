import React from 'react';
import './TeachersSearchBar.css'

const TeachersSearchBar = () => {
    return (
        <>
            <div className='teachers-search-bar '>
                <div className=' teachers-search-filed'>
                    <div className='tecahers-div left'>
                        <label htmlFor="">Search words</label><br />
                        <input className='teachers-input search-input' placeholder='Search subject or teacher' type="text" name="" id="" />
                    </div>
                    <div className='mx-2 tecahers-div'>
                        <label htmlFor="">education lavel</label><br />
                        <select className='edu-select teachers-input' placeholder='' >
                            <option selected>Level (e.g. primary)</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='tecahers-div left'>
                        <label htmlFor="">location | Search radius</label><br />
                        <div className='position-relative'>
                            <input className='teachers-input location-input' placeholder='Location or postcode' type="text" name="" id="" />
                            <div className='location-div'></div>
                            <select className='location-select teachers-input' placeholder='Location or postcode' aria-label="Default select example">
                                <option selected>+1 mile</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className='ms-2 tecahers-div'>
                        <button className='common-btn input-btn'>Search</button>
                    </div>
                </div>
            </div>
            {/* ---------------for responsive-------------- */}
            <div className='teachers-search-bar-res '>
                <div className=' teachers-search-filed-res'>
                <div className=' teachers-search-filed'>
                    <div className='tecahers-div left'>
                        <label htmlFor="">Search words</label><br />
                        <input className='teachers-input search-input' placeholder='Search subject or teacher' type="text" name="" id="" />
                    </div>
                    <div className='mx-2 tecahers-div'>
                        <label htmlFor="">Education lavel</label><br />
                        <select className='edu-select teachers-input' placeholder='' >
                            <option selected>Level (e.g. primary)</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className=' teachers-search-filed'>
                    <div className='tecahers-div left'>
                        <label htmlFor="">Location | Search radius</label><br />
                        <div className='position-relative'>
                            <input className='teachers-input location-input' placeholder='Location or postcode' type="text" name="" id="" />
                            <div className='location-div'></div>
                            <select className='location-select teachers-input' placeholder='Location or postcode' aria-label="Default select example">
                                <option selected>+1 mile</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className='ms-2 tecahers-div'>
                        <button className='common-btn input-btn'>Search</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default TeachersSearchBar;