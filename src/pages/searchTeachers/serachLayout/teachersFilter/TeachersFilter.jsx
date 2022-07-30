import React from 'react';
import './TeachersFilter.css';
import { BsCheckSquareFill, BsSquare } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import Accordion from 'react-bootstrap/Accordion';

const TeachersFilter = () => {
    return (
        <div className='filter-area'>
            <h3>Additional filters</h3>
            <div className='row'>
            <div className='col-12 order-2 order-lg-1'>
            <div className='row g-3 mb-3'>
                <div className='col-lg-12 col-md-6 col-12'>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header><h5>hours</h5></Accordion.Header>
                    <Accordion.Body>
                      <div className="px-3">
                      <div class="form-check">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                         <label class="form-check-label" for="flexCheckDefault">
                        <h4> full time <span>(564)</span></h4>
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                     <label class="form-check-label" for="flexCheckChecked">
                    <h4> part time <span>(87)</span></h4>
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" />
                     <label class="form-check-label" for="flexCheckChecked2">
                    <h4> supply work <span>(135)</span></h4>
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
            </div>
            <div className='col-12 order-1 order-lg-2'>
            <div className='row g-3 mb-3'>
                <div className='col-lg-12 col-6'>
                <Accordion defaultActiveKey="2">
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><h5>Exam Board</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='px-3'>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
                                                <label class="form-check-label" for="flexCheckDefault14">
                                                    <h4 className='text-uppercase'>aqa</h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />
                                                <label class="form-check-label" for="flexCheckDefault15">
                                                    <h4 className='text-uppercase'> ocr </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />
                                                <label class="form-check-label" for="flexCheckDefault16">
                                                    <h4 className='text-uppercase'> CCEA </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault17" />
                                                <label class="form-check-label" for="flexCheckDefault17">
                                                    <h4 className='text-uppercase'> WJEC/Eduqas </h4>
                                                </label>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                </div>
                <div className='col-lg-12 col-6 '>
                <Accordion defaultActiveKey="3">
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><h5>other</h5></Accordion.Header>
                                    <Accordion.Body>
                                        <div className='px-3'>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault18" />
                                                <label class="form-check-label" for="flexCheckDefault18">
                                                    <h4 className='text-uppercase'> male</h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault19" />
                                                <label class="form-check-label" for="flexCheckDefault19">
                                                    <h4 className='text-uppercase'> female </h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault20" />
                                                <label class="form-check-label" for="flexCheckDefault20">
                                                    <h4 className='text-uppercase'> DBS checked</h4>
                                                </label>
                                            </div>
                                            {/* --------------====------------- */}
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault21" />
                                                <label class="form-check-label" for="flexCheckDefault21">
                                                    <h4 className='text-uppercase'> ECTs / NQTs </h4>
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
        </div>
    );
};

export default TeachersFilter;