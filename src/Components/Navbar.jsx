import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg shadow-sm bg-light position-fixed w-100">
            <div className="container-fluid">
                <NavLink className="navbar-brand mx-5 fw-bold" to="/"><img src='/logo512.png' alt='' style={{width:'30px'}}/> Presento<span className='text-danger'>.</span></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5  " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/team">Team</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="*">Another action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="*">Something else here</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <form className="container-fluid d-flex justify-content-end ">
                        <button className="btn btn-outline-danger me-2" type="button">Get Started</button>
                    </form>
                </div>
            </div>
        </nav> 
        </React.Fragment>
    )
}

export default Navbar