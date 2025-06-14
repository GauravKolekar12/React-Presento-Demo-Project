import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div>

            <center className='my-4'>
                <p className='fw-bold'>Looking for something?
                    <br />
                    We're sorry. The Web address you entered is not a functioning page on our site.</p>



                <h2 className='text-danger'>404 - Page Not Found</h2>

                <button className='btn-sm btn btn-danger'><NavLink to='/' className="nav-link"> Go To Home Page</NavLink></button>

            </center>

        </div>
    )
}

export default PageNotFound