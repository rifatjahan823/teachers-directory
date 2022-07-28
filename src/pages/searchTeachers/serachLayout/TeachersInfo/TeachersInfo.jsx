import React from 'react';
import './TeachersInfo.css';
import teachers1 from '../../../../assets/Serach-Tearchers/teachers-1.png'

const TeachersInfo = () => {
    return (
        <div className='teachers-info'>
            <div className='container'>
                <div className='row g-3 justify-content-center align-items-start'>
                    {/* -----------------filter-area---------------  */}
                    <div className='col-md-4'>
                        <div className='filter-area'>

                        </div>
                    </div>
                    {/* -----------------teachers-arrea---------------    */}
                    <div className='col-md-8'>
                        <div className='teachers-arrea card'>
                            {/* -----------teachers-content---------- */}
                            <div className='teachers-content d-flex justify-content-between align-items-top'>
                                <img src={teachers1} alt="" />
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                        <h6>john d. <span>Match teacher</span></h6>
                                        <p>soho,London <span>full time</span></p>
                                        </div>
                                        <div>
                                            <button className='common-btn'>goat hired</button>
                                        </div>
                                    </div>
                                     <div className='content-paragrapgh'>
                                     <p>Maecenas tempus, ligula eget dapibus viverra, tellus risus fringilla lacus, a pellentesque lorem quam vitae dolor. Ut ut sapien quis tortor fringilla interdum. Nam at gravida sem. In ultricies ante non enim rhoncus, gravida tempor dolor varius. Cras vitae sapien et neque tristique vehicula volutpat vitae ante. Ut convallis id dui nec...</p>
                                  </div>   
                                </div>
                            </div>
                            {/* ----------teacher-experience------------------ */}
                            <div className='teacher-experience'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeachersInfo;