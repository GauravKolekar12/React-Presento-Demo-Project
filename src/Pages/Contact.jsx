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
            <div className=' container-fluid col-md-12  '>
                <div className=' row gx-3 text-dark '>
                    {/* *********Contact Info************ */}
                    <div className='contact col-md-5'>
                        <div className='calls'>
                            <i className="bi bi-geo-alt "></i>
                            <h3>Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div className='row text-dark'>
                            <div className='calls col-md-3'>
                                <i className="bi bi-telephone"></i>
                                <h3>Calls</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                            <div className='calls col-md-3 '>
                                <i className="bi bi-envelope"></i>
                                <h3>Email</h3>
                                <p>presento@example.com</p>
                            </div>
                        </div>
                    </div>
                    {/* *********Form************ */}
                    <div className='form col-md-6 '>
                        <form>
                            <div className='d-flex justify-content-center text-light   '>
                                <input type="text" placeholder='Your Name' className="form-control " />
                                <input type='text' placeholder='Your Email' className='form-control '/>
                            </div>
                            <div className='text-light py-4 '>
                                <input type="text" placeholder='Subject' className="form-control" />
                                <textarea placeholder='Message' className="form-control my-4"/>
                                <button type="submit" className="btn btn-danger btn-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
                
            
        
        </React.StrictMode>
    )
    }

export default Contact