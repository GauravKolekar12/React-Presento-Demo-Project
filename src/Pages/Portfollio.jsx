import React, { Component } from 'react'

import '../Style/Porfolio.css'

export default class Portfollio extends Component {

    constructor(){
        super()
        this.state=({
            Data_App:true,
            Data_Branding:true,
            Data_Books:true,
        })
    }

    All_Handler=()=>{
        this.setState({
            Data_App:true,
            Data_Branding:true,
            Data_Books:true
        })
    }

    App_Handler=()=>{
        this.setState({
            Data_App:true,
            Data_Branding:false,
            Data_Books:false
        })
    }

    Branding_Handler=()=>{
        this.setState({
            Data_App:false,
            Data_Branding:true,
            Data_Books:false
        })
    }

    Book_Handler=()=>{
        this.setState({
            Data_App:false,
            Data_Branding:false,
            Data_Books:true
        })
    }
    render() {

        const Data_App=[
            {
                id:1,
                name:'App1',
                img:'/Assets/10025.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur',
                btn:<i className="bi bi-zoom-in"></i>
            },
            {
                id:2,
                name:'App2',
                img:'/Assets/10029.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur',
                btn:<i className="bi bi-zoom-in"></i>
            },
            {
                id:3,
                name:'App3',
                img:'/Assets/10033.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur',
                btn:<i className="bi bi-zoom-in"></i>
            },    
        ]

        const Data_Branding=[
            {
                id:1,
                name:'Branding1',
                img:'/Assets/10027.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur',
                btn:<i className="bi bi-zoom-in"></i>
            },

            {
                id:2,
                name:'Branding2',
                img:'/Assets/10031.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur',
                btn:<i className="bi bi-zoom-in"></i>
            },
            {
                id:3,
                name:'Branding3',
                img:'/Assets/10030.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur',
                btn:<i className="bi bi-zoom-in"></i>
            },
        ]

        const Data_Books=[
            {
                id:1,
                name:'Book1',
                img:'/Assets/10028.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur',
                btn:<i className="bi bi-zoom-in"></i>
            },

            {
                id:1,
                name:'Book2',
                img:'/Assets/10032.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur',
                btn:<i className="bi bi-zoom-in"></i>
            },

            {
                id:1,
                name:'Book3',
                img:'/Assets/10036.jpg',
                text:'Lorem ipsum, dolor sit amet consectetur',
                btn:<i className="bi bi-zoom-in" ></i>
            },
        ]
        return (
        <React.StrictMode>
            <div id='portfolio' className='container-fluid col-md-12 '>
                <div className=' text-center bg-dark text-light py-2'>
                    <h1 className='text-danger fw-bold'>PORTFOLIO</h1>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                <hr/>
                <div className='col-md-12  text-center '>
                    <button className='btn fw-bold btn-sm mx-3 bg-light' onClick={(()=>this.All_Handler())}>All Product</button>
                    <button className='btn fw-bold btn-sm bg-light' onClick={(()=>this.App_Handler())}>App</button>
                    <button className='btn fw-bold btn-sm mx-3 bg-light' onClick={(()=>this.Branding_Handler())}>Branding</button>
                    <button className='btn fw-bold btn-sm bg-light 'onClick={(()=>this.Book_Handler())}>Books</button>
                </div>
            </div>
            <div className=" container-fluid col-md-12  mb-5 p-4">

              {/* ****************Data passed**************** */}
                <div className='row products ' >
                    {
                        this.state.Data_App &&
                        Data_App.map((val,index)=>{
                        return(
                            <>
                            <div className='col-md-4' key={val.id}>

                                <div className="card text-bg-dark text-dark">
                                    <img src={val.img} class="card-img" alt="..."/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{val.name}</h5>
                                        <p className="card-text">{val.text}</p>
                                        
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                        })
                    }
                </div>

                <div className='products row' >
                    {
                        this.state.Data_Branding &&
                        Data_Branding.map((val,index)=>{
                        return(
                            <>
                            <div className='col-md-4' key={val.id}>

                                <div class="card text-bg-dark">
                                    <img src={val.img} class="card-img" alt="..."/>
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">{val.name}</h5>
                                        <p class="card-text">{val.text}</p>
                                        
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                        })
                    }
                </div>

                <div className='row products  ' >
                    {
                        this.state.Data_Books &&
                        Data_Books.map((val,index)=>{
                        return(
                            <>
                            <div className='col-md-4 ' key={val.id}>

                                <div class="card text-dark ">
                                    <img src={val.img} class="card-img" alt="..."/>
                                    <div class="card-img-overlay">
                                        <h5 class="card-title">{val.name}</h5>
                                        <p class="card-text">{val.text}</p>
                                        
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                        })
                    }
                </div>
            </div>
            
        </React.StrictMode>
        )
    }
}
