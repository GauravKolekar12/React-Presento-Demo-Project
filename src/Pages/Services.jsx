import React from 'react'
import '../Style/Services.css'
import { NavLink } from 'react-router-dom'

const Services = () => {
  return (
    <React.Fragment>
      <div className='container-fluid col-md-12 bg-dark py-5'>
        <div className='text-light text-center mb-3'>
          <NavLink to='/' className="nav-link"><h1>SERVICES</h1></NavLink>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-md-6'>
              <div className='service-box d-flex align-items-start'>
                <div className='icon me-3'>
                  <i class="bi bi-briefcase text-danger"></i>
                </div>
                <div className='content'>
                  <h3 className='mb-3'>Lorem Ipsum</h3>
                  <p className='mb-0'>
                    Pariatur dicta harum necessitatibus id error fugiat tenetur perferendis quos commodi earum nihil, alias libero excepturi assumenda reprehenderit voluptates autem! Libero consectetur perspiciatis vero dolore magnam necessitatibus
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='service-box d-flex align-items-start'>
                <div className='icon me-3'>
                  <i class="bi bi-journal-text text-danger"></i>
                </div>
                <div className='content'>
                  <h3 className='mb-3'>Dolor Sitema</h3>
                  <p className='mb-0'>
                    Harum praesentium optio fuga, aspernatur nesciunt, sunt necessitatibus fugit vel consequatur ut incidunt adipisci expedita eum molestiae inventore cumque consectetur perferendis illo, quaerat ullam facilis odit similique doloremque!
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='service-box d-flex align-items-start'>
                <div className='icon me-3'>
                  <i className="bi bi-bar-chart text-danger"></i>
                </div>
                <div className='content'>
                  <h3 className='mb-3'>Sed ut perspiciatis</h3>
                  <p className='mb-0'>
                    Aperiam natus voluptas quam molestias nobis aliquam distinctio, inventore, autem quisquam ipsam repellat sapiente expedita soluta. Neque modi excepturi beatae recusandae at. Perferendis cupiditate molestias sint hic suscipit obcaecati
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='service-box d-flex align-items-start'>
                <div className='icon me-3'>
                  <i class="bi bi-calendar-week text-danger"></i>
                </div>
                <div className='content'>
                  <h3 className='mb-3'>Magni Dolors</h3>
                  <p className='mb-0'>
                    itaque recusandae ad veritatis, neque, vel doloremque? Molestiae facere distinctio sunt temporibus tempora voluptates natus officiis obcaecati voluptate illum veniam quidem quia perspiciatis doloremque rem saepe recusandae voluptatibus sequi eveniet eius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Services