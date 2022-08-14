import React from 'react';
import './JobSearchBar.css';

const JobSearchBar = () => {
  return (
        <>
        <div className='teachers-search-bar '>
            <div className=' teachers-search-filed'>
                <div className='tecahers-div left me-3'>
                    <label htmlFor="">Search jobs</label><br />
                    <input className='teachers-input search-job' placeholder='Search subject or teacher' type="text" name="" id="" />
                </div>
                 
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
                    <button className='input-btn'>Search</button>
                </div>
            </div>
        </div>
        {/* ---------------for responsive-------------- */}
        <div className='teachers-search-bar-res me-3'>
        <div className=' teachers-search-filed-res'>
            <div className=' teachers-search-filed'>

                <div className='tecahers-div left'>
                    <label htmlFor="">Search jobs</label><br />
                    <input className='teachers-input search-job' placeholder='Search subject or teacher' type="text" name="" id="" />
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
                    <button className='input-btn'>Search</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default JobSearchBar;