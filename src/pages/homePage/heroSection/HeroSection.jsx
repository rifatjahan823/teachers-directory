import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='container'>
                <div className='display_content'>
                    <h1>The UK's First Teachers' Directory</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec dolor<br/> condimentum sapien placerat fringilla et luctus massa.</p>
                </div>
                <div className='d-flex justify-content-center  search-filed'>
                    <div >
                        <label htmlFor="">Search words</label><br />
                        <input type="text" placeholder='Enter subject or keyword' name="" id="" />
                    </div>
                    <div className='mx-2'>
                        <label htmlFor="">Location</label><br />
                        <input type="text" placeholder='Location or postcode' name="" id="" />
                    </div>
                    <div>
                        <button className='input-btn'>Search</button>
                    </div>
                </div>
                <div className='row hero-bottom g-4 justify-content-center'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <p className='banner-text'>Connect with schools</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <p className='banner-text'>Build your network</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 mb-5'>
                        <p className='banner-text'>Search vacancies</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection