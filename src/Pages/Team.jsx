import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../Style/Team.css'

export default class Team extends Component {
    render() {

        const Emp_Data = [
            {
                id:1,
                name:'Walter White',
                img:'../Assets/10021.jpg',
                position:'( Chief Executive Officer )'
            },

            {
                id:2,
                name:'Sarah Jhonson',
                img:'../Assets/10022.jpg',
                position:'( Product Manager )'
            },

            {
                id:3,
                name:'William Anderson',
                img:'../Assets/10023.jpg',
                position:'( CTO )'
            },

            {
                id:4,
                name:'Amanda Jepson',
                img:'../Assets/10024.jpg',
                position:'( Accountant )'
            },
        ]
        return (
        <div>
            <div className='container-fluid w-100'>
                <div className='team text-light text-center bg-dark py-3 '>
                    <NavLink to='/team' className="nav-link"><h1>TEAM</h1></NavLink>
                    {/* <span className='text-danger'>______</span> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                </div>
                <div className='row g-3 mt-3'>
                    {
                        Emp_Data.map((val,index)=>{
                            return(
                                <>
                                <div className='employee col-md-3 d-flex justify-content-center'>
                                    <div className=' text-light' style={{width:'21rem',height:'auto'}}>
                                            <img src={val.img} className='card-img-top' style={{height:'18rem'}} alt={val.name} />
                                        <div className='card-body bg-secondary p-3'>
                                            <h5 className='card-title '>{val.name}</h5>
                                            <p className='card-text'>{val.position}</p>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
        )
    }
}
