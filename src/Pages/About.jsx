import React from 'react'
import { NavLink } from 'react-router-dom'


import '../Style/About.css'

class About extends React.Component {
    constructor(){
        super()
        this.state=({
            Data_Display:true,
        })
    }
    render() {
        
    const Data_Display=[
        {
            id:1,
            label:'Happy Clients',
            count:'232',
            icon:<i class="bi bi-emoji-smile"></i>
        },
        {
            id:2,
            label:'Projects',
            count:'521',
            icon:<i class="bi bi-journal-text"></i>
        },
        {
            id:3,
            label:'Hours Of Support',
            count:'1473',
            icon:<i class="bi bi-headset"></i>
        },
        {
            id:4,
            label:'Workers',
            count:'15',
            icon:<i class="bi bi-people"></i>
        },
    ]
    
    return (
        <React.Fragment>
        <div id='About' className=' container-fluid col-md-12 w-100 p-5 bg-dark'>
            <div className='row p-3'>
                <div className=' col-md-4 '>
                    <h1>Voluptatem dignissimos provident quasi</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.
                    </p>
                    <button className='btn btn-outline-danger'><a href='/' className="nav-link">About Us  </a></button>
                </div>

                {/* ********************************** */}
                <div className='logo col-md-4  '>
                    <NavLink to='/' className="content nav-link">
                        <i className="bi bi-envelope"></i>
                        <h5>Corpurous voluptatem sit</h5>
                        <p>
                            Aspernatur ut autem voluptatum delectus saepe dolore vitae a commodi facere  
                        </p>
                    </NavLink>
                    <NavLink to='/' className=" content nav-link">
                        <i className="bi bi-wifi"></i>
                        <h5>labore consectetur</h5>
                        <p>
                            cupiditate natus tenetur a voluptas. Vitae tenetur tempore pariatur architecto cupiditate quasi!
                        </p>
                    </NavLink>
                </div>

                {/* ********************************** */}
                <div className='logo col-md-4 '>
                    <NavLink to='/' className="content nav-link">
                        <i className="bi bi-gem"></i>
                        <h5>Corpurous voluptatem sit</h5>
                        <p>
                            Suscipit exercitationem commodi, rem ullam quos molestias alias id autem architecto 
                        </p>
                    </NavLink>

                    <NavLink to='/' className="content nav-link">
                        <i className="bi bi-easel"></i>
                        <h5>Corpurous voluptatem sit</h5>
                        <p>
                            Architecto eum, consequatur alias dolore laboriosam tenetur quidem error. 
                        </p>
                    </NavLink>
                </div>
            </div>
        </div>
        <div className='auto-scroll-wrapper'>
            <div className='auto-scroll-images'>
                {/* Repeat the images twice for seamless loop */}
                {[...Array(2)].map((_, i) => (
                <>
                    <img key={`img1-${i}`} src='/Assets/10004.png' alt='img1' />
                    <img key={`img2-${i}`} src='/Assets/10005.png' alt='img2' />
                    <img key={`img3-${i}`} src='/Assets/10006.png' alt='img3' />
                    <img key={`img4-${i}`} src='/Assets/10007.png' alt='img4' />
                    <img key={`img5-${i}`} src='/Assets/10008.png' alt='img5' />
                    <img key={`img6-${i}`} src='/Assets/10009.png' alt='img6' />
                    <img key={`img7-${i}`} src='/Assets/10010.png' alt='img7' />
                    <img key={`img8-${i}`} src='/Assets/10011.png' alt='img8' />
                </>
                ))}
            </div>
        </div>

        {/* Display cards about us  */}
        <div className='card-container  col-md-12 my-5'>
            <div className='row justify-content-center g-0'>
                
                {
                    Data_Display.map((val,index)=>{ 
                        return(
                            <div className='data-count card col-md-2 text-center ' key={index}>
                                <div className='icon-wrapper'>
                                    {val.icon}
                                </div>
                                    <h4 >{val.count}</h4>
                                    <p >{val.label}</p>
                            </div>
                        )

                    })
                }
            
            </div>
        </div>

        

        
        </React.Fragment>
    )}
}

export default About

