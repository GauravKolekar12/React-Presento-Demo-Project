import React from 'react'
import '../Style/Home.css'


export default class Home extends React.Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
        <React.Fragment>
        
        {/* <h1>Home</h1> */}
        <div id='home' className='mb-5' >
            <h1 className='fw-bold'style={{fontSize:'55px'}}>Bettter digital experience <br/> with Presento..</h1>
            <p className=' '>We are team of talented designers making websites with <br/>Bootstrap</p>
            <button className='btn btn-danger'>Get Started</button>
        </div>
        
        </React.Fragment>
        )
    }
}
