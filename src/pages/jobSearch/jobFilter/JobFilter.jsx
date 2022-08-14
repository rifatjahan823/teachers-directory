import React from 'react';
import '../../searchTeachers/serachLayout/teachersFilter/TeachersFilter.css';
import Accordion from 'react-bootstrap/Accordion';

const JobFilter = () => {
    return (
        <div className='filter-area'>
            <h3>Additional filters</h3>
            <div className='row'>
                    <div className='row g-3 mb-3'>
                        <div className='col-lg-12 col-md-6 col-12'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><h5>Education level</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='px-3'>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    <h4> Nursery <span>(0)</span></h4>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    <h4>  Primary <span>(179)</span></h4>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                                                <label class="form-check-label" for="flexCheckChecked2">
                                                    <h4> Secondary <span>(142)</span></h4>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked3" />
                                                <label class="form-check-label" for="flexCheckChecked3">
                                                    <h4> Further education <span>(83)</span></h4>
                                                </label>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className='col-lg-12 col-md-6 col-12'>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><h5>Position</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='px-3'>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                                <label class="form-check-label" for="flexCheckDefault3">
                                                    <h4> Leadership/Management <span>(266)</span></h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div className='ps-4'>
                                                {/* --------------====------------- */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                                    <label class="form-check-label" for="flexCheckDefault4">
                                                        <h4> Headteacher <span>(196)</span></h4>
                                                    </label>
                                                </div>
                                                {/* --------------====------------- */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                                    <label class="form-check-label" for="flexCheckDefault5">
                                                        <h4> Deputy <span>(11)</span></h4>
                                                    </label>
                                                </div>
                                                {/* --------------====------------- */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                                                    <label class="form-check-label" for="flexCheckDefault6">
                                                        <h4> Assistant <span>(59)</span></h4>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                                                <label class="form-check-label" for="flexCheckDefault7">
                                                    <h4> Leadership/Management <span>(475)</span></h4>
                                                </label>
                                            </div>
                                            <div className='ps-4'>
                                                {/* --------------====------------- */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
                                                    <label class="form-check-label" for="flexCheckDefault8">
                                                        <h4>Teacher <span>(401)</span></h4>
                                                    </label>
                                                </div>
                                                {/* --------------====------------- */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
                                                    <label class="form-check-label" for="flexCheckDefault9">
                                                        <h4> Tutor <span>(28)</span></h4>
                                                    </label>
                                                </div>
                                                {/* --------------====------------- */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
                                                    <label class="form-check-label" for="flexCheckDefault10">
                                                        <h4> Head of Department <span>(41)</span></h4>
                                                    </label>
                                                </div>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                                <label class="form-check-label" for="flexCheckDefault11">
                                                    <h4> Non-teaching/Support  <span>(24)</span></h4>
                                                </label>
                                            </div>
                                            <div className='ps-4'>
                                                {/* --------------====------------- */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />
                                                    <label class="form-check-label" for="flexCheckDefault12">
                                                        <h4> Lorem <span>(16)</span></h4>
                                                    </label>
                                                </div>
                                                {/* --------------====------------- */}
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault13" />
                                                    <label class="form-check-label" for="flexCheckDefault13">
                                                        <h4>Lorem <span>(18)</span></h4>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className='row g-3 mb-3'>
                        <div className='col-lg-12 col-md-6 col-12'>
                            <Accordion defaultActiveKey="2">
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><h5>Subject</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='px-3'>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
                                                <label class="form-check-label" for="flexCheckDefault14">
                                                    <h4 >Maths <span>(320)</span></h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />
                                                <label class="form-check-label" for="flexCheckDefault15">
                                                    <h4 > Science <span>(254)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />
                                                <label class="form-check-label" for="flexCheckDefault16">
                                                    <h4 > Computing <span>(0)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault17" />
                                                <label class="form-check-label" for="flexCheckDefault17">
                                                    <h4 > English <span>(67)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault18" />
                                                <label class="form-check-label" for="flexCheckDefault18">
                                                    <h4 > Literature <span>(2)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault19" />
                                                <label class="form-check-label" for="flexCheckDefault19">
                                                    <h4 > History <span>(41)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault20" />
                                                <label class="form-check-label" for="flexCheckDefault20">
                                                    <h4 > Geography <span>(0)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault21" />
                                                <label class="form-check-label" for="flexCheckDefault21">
                                                    <h4 >Art <span>(0)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                                                <label class="form-check-label" for="flexCheckDefault22">
                                                    <h4 >Music <span>(0)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault23" />
                                                <label class="form-check-label" for="flexCheckDefault23">
                                                    <h4 >Biology <span>(0)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault24" />
                                                <label class="form-check-label" for="flexCheckDefault24">
                                                    <h4 >French <span>(18)</span> </h4>
                                                </label>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className='col-lg-12 col-12 col-md-6'>
                            <Accordion defaultActiveKey="3">
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><h5>Hours</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='px-3'>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault25" />
                                                <label class="form-check-label" for="flexCheckDefault25">
                                                    <h4 > Full-time <span>(564)</span></h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault26" />
                                                <label class="form-check-label" for="flexCheckDefault26">
                                                    <h4 > Part-time <span>(87)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault27" />
                                                <label class="form-check-label" for="flexCheckDefault27">
                                                    <h4 > Supply work <span>(135)</span></h4>
                                                </label>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className='col-lg-12 col-12 col-md-6'>
                            <Accordion defaultActiveKey="3">
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><h5>Contract type</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='px-3'>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault28" />
                                                <label class="form-check-label" for="flexCheckDefault28">
                                                    <h4 > Fixed term <span>(52)</span></h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault29" />
                                                <label class="form-check-label" for="flexCheckDefault29">
                                                    <h4 > Maternity cover <span>(4)</span> </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault30" />
                                                <label class="form-check-label" for="flexCheckDefault30">
                                                    <h4 > Permanent <span>(89)</span></h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault31" />
                                                <label class="form-check-label" for="flexCheckDefault31">
                                                    <h4 >Supply <span>(13)</span></h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault32" />
                                                <label class="form-check-label" for="flexCheckDefault32">
                                                    <h4 >Temporary <span>(26)</span></h4>
                                                </label>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className='col-lg-12 col-12 col-md-6'>
                            <Accordion defaultActiveKey="3">
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><h5>Suitable for</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='px-3'>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault33" />
                                                <label class="form-check-label" for="flexCheckDefault33">
                                                    <h4  >Early career teachers (NQTs) <span>(74)</span></h4>
                                                </label>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className='col-lg-12 col-12 col-md-6'>
                            <Accordion defaultActiveKey="3">
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><h5>Gender</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='px-3'>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault34" />
                                                <label class="form-check-label" for="flexCheckDefault34">
                                                    <h4>Male </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault35" />
                                                <label class="form-check-label" for="flexCheckDefault35">
                                                    <h4  >Female</h4>
                                                </label>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default JobFilter;