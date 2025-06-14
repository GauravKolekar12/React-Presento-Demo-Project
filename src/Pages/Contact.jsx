import React from 'react'

import '../Style/Contact.css'

const Contact = () => {
    return (
        <React.StrictMode>
            <div className='container-fluid col-md-12 mb-5'>
                <div className='text-light bg-dark text-center py-2'>
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
                                    <div className='icon mb-1 '>
                                        <i className="bi bi-geo-alt-fill fs-1 text-danger"></i>
                                    </div>
                                    <h5 className='fw-bold'>Address</h5>
                                    <p className='text-muted'>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='contact-box p-2  text-center'>
                                    <div className='icon mb-1 '>
                                        <i className="bi bi-telephone-fill fs-1  text-danger text-center"></i>
                                    </div>
                                    <h5 className='fw-bold'>Call Us</h5>
                                    <p className='text-muted'>+1 5589 55488 55</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='contact-box p-2  text-center'>
                                    <div className='icon mb-1 '>
                                        <i className="bi bi-envelope-fill fs-1 text-danger"></i>
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
                
            
        
        </React.StrictMode>
    )
    }

export default Contact