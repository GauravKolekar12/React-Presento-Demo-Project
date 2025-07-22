import React from 'react'

import '../Style/Contact.css'
import { NavLink } from 'react-router-dom'


const Contact = () => {
    return (
        <React.Fragment>
            <div className='container-fluid col-md-12 mb-5 w-100'>
                <div className=' text-center py-2'>
                    <h1>CONTACT</h1>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
            </div>

            {/* *********Contact Info************ */}
            <div className=' container my-5 '>
                <div className='row'>
                {/* Left Column: Contact Info */}
                    <div className='col-md-6'>
                        <div className='row g-4'>
                            <div className='col-md-12'>
                                <div className='contact-box p-2   text-center'>
                                    <div className='icon mb-2 '>
                                        <i className="bi bi-geo-alt-fill fs-1 text-danger"></i>
                                    </div>
                                    <h5 className='fw-bold'>Address</h5>
                                    <p className='text-muted'>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='contact-box p-2  text-center'>
                                    <div className='icon mb-2 '>
                                        <i className="bi bi-telephone-fill fs-1  text-danger align-items-center"></i>
                                    </div>
                                    <h5 className='fw-bold'>Call Us</h5>
                                    <p className='text-muted'>+1 5589 55488 55</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='contact-box p-2  text-center'>
                                    <div className='icon mb-2 '>
                                        <i className="bi bi-envelope-fill fs-1 text-danger text-center"></i>
                                    </div>
                                    <h5 className='fw-bold'>Email Us</h5>
                                    <p className='text-muted'>info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* *********Right Column: Form Info************ */}
                    <div className='form col-md-6 '>
                        <form className='row g-2 '>
                            <div className='d-flex justify-content-center text-light gap-2 pt-3  '>
                                <input type="text" placeholder='Your Name' className="form-control  " />
                                <input type='text' placeholder='Your Email' className='form-control '/>
                            </div>
                            <div className='text-light py-4 '>
                                <input type="text" placeholder='Subject' className="form-control" />
                            </div>
                            <div className='text-light '>
                                <textarea placeholder='Message' className="form-control my-3 h-75"/>
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>

            {/* Information Box */}
            <div className='Information-box container-fluid col-md-12 w-100'>
                    <div className='col-md-12'> 
                        <div className='row text-center py-2'>
                            <div className='col-md-4'>
                                <h4 className='fw-bold pb-5'>Presento.</h4>
                                <p>A108 Adam Street, New York, NY 535022</p>
                                <p><span className='fw-bold'>Phone:</span> +1 5589 55488 55</p>
                                <p><span className='fw-bold'>Email:</span> presento@gmail.com</p>
                                <div className='Social-Icons justify-content-center '>
                                    <i class="bi bi-twitter m-2"></i>
                                    <i class="bi bi-facebook m-2"></i>
                                    <i class="bi bi-instagram m-2"></i>
                                    <i class="bi bi-linkedin m-2"></i>
                                </div>
                            </div>

                            <div className='Links col-md-4 d-flex justify-content-center gap-5 text-start '>
                                <div>
                                    <h4 className='fw-bold pb-4'>Usefull Links</h4>
                                    <p> <NavLink to='/' className="nav-link">Home</NavLink></p>
                                    <p> <NavLink to='/about' className="nav-link">About us</NavLink></p>
                                    <p> <NavLink to='/services' className="nav-link">Services</NavLink></p>
                                    <p> <NavLink to='/contact' className="nav-link">Terms of service</NavLink></p>
                                    <p> <NavLink to='/contact' className="nav-link">Privacy policy</NavLink></p>
                                </div>
                                <div>
                                    <h4 className='fw-bold pb-4'>Our Services</h4>
                                    <p> <NavLink to='/contact' className="nav-link">Web Design</NavLink></p>
                                    <p> <NavLink to='/contact' className="nav-link">Web Development</NavLink></p>
                                    <p> <NavLink to='/contact' className="nav-link">Product Management</NavLink></p>
                                    <p> <NavLink to='/contact' className="nav-link">Marketing</NavLink></p>
                                    <p> <NavLink to='/contact' className="nav-link">Graphic Design</NavLink></p>
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <h4 className='fw-bold pb-4'>Our Newsletter</h4>
                                <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                                <div className='input-group py-5'>
                                    <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-danger" type="button" id="button-addon2">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                
            
        
        </React.Fragment>
    )
    }

export default Contact