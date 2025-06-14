import React from 'react'
import '../Style/Blog.css'



const Blog = () => {
    return (
        <React.Fragment>
            <div id='blog' className='container '>
                <div className='row '>
                    {/* *********Image Bar************ */}
                    <div className='scrolled-bar col-md-8 px-5 '>
                        <div class="card " >
                            <img src="../Assets/10044.jpg" className="card-img-top" alt="..." style={{height:"450px"}}/>
                            <div className="card-body">
                                <h4 className="">Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.</h4>
                                <p className="card-text">
                                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                                </p>
                                <button type="button" className="btn btn-danger">Read More</button>
                            </div>
                        </div>

                        <div class="card  my-4" >
                            <img src="../Assets/10043.jpg" className="card-img-top" alt="..." style={{height:"450px"}}/>
                            <div className="card-body">
                                <h4 className="">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</h4>
                                <p className="card-text">
                                    Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.
                                </p>
                                <button type="button" className="btn btn-danger">Read More</button>
                            </div>
                        </div>

                        <div class="card " >
                            <img src="../Assets/10042.jpg" className="card-img-top" alt="..." style={{height:"450px"}}/>
                            <div className="card-body">
                                <h4 className="">Nisi magni odit consequatur autem nulla dolorem</h4>
                                <p className="card-text">
                                    Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
                                </p>
                                <button type="button" className="btn btn-danger">Read More</button>
                            </div>
                        </div>

                        <div class="card my-4 " >
                            <img src="../Assets/10041.jpg" className="card-img-top" alt="..." style={{height:"450px"}}/>
                            <div className="card-body">
                                <h4 className="">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</h4>
                                <p className="card-text">
                                    Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
                                </p>
                                <button type="button" className="btn btn-danger">Read More</button>
                            </div>
                        </div>
                        
                    </div>

                    {/* *********Search Bar************ */}
                    <div className='fixed-bar col-md-4 '>
                        <div className='' >
                            <div className='p-4 my-2 '>
                                <h5 className='fw-bold'>Search  </h5>
                                <form className=" container-fluid  d-flex justify-content-center  ">
                                    <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-danger" type="submit">Search</button>
                                </form>
                            </div>
                            <div className='p-4 my-3 '>
                                <h5 className='fw-bold'>Categories</h5>
                                <ul className='list-unstyled p-2'>
                                    <li className='list-group-ite py-2'><a href="/blog" className='nav-link'>General  <span className='text-muted text-sm'>(14)</span></a></li>
                                    <li className='list-group-ite '><a href="/blog" className='nav-link'>Lifestyle  <span className='text-muted text-sm'>(7)</span></a></li>
                                    <li className='list-group-ite py-2'><a href="/blog" className='nav-link'>Travel  <span className='text-muted text-sm'>(12)</span></a></li>
                                    <li className='list-group-ite '><a href="/blog" className='nav-link'>Design  <span className='text-muted text-sm'>(9)</span></a></li>
                                    <li className='list-group-ite py-2'><a href="/blog" className='nav-link'>Creative  <span className='text-muted text-sm'>(22)</span></a></li>
                                    <li className='list-group-ite '><a href="/blog" className='nav-link'>Education  <span className='text-muted text-sm'>(15)</span></a></li>
                                </ul>
                            </div>
                            {/* *********Recent Post Block********* */}
                            <div className=' px-4 '>
                                <h5 className='fw-bold'>Recent Post</h5>
                                <div className='col-md-12 align-items-start '>
                                    <div className='row'>
                                        <div className='col-md-4 '>
                                            <img src="../Assets/10101.jpg" className="card-img-left " alt="..." style={{width:'5rem'}}/>
                                        </div>
                                        <div className='col-md-8 '>
                                            <h6>Quidem autem et impedit ut qui nesciunt</h6>
                                            <p className='text-secondary'>Jan 1,2020</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-12 '>
                                    <div className='row'>
                                        <div className='col-md-4 '>
                                            <img src="../Assets/10102.jpg" className="card-img-left " alt="..." style={{width:'5rem'}}/>
                                        </div>
                                        <div className='col-md-8 '>
                                            <h6>Id quia et et ut maxime similique occaecati utr</h6>
                                            <p className='text-secondary'>Jan 1,2020</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-12 '>
                                    <div className='row'>
                                        <div className='col-md-4 '>
                                            <img src="../Assets/10103.jpg" className="card-img-left " alt="..." style={{width:'5rem'}}/>
                                        </div>
                                        <div className='col-md-8 '>
                                            <h6>Laborum corporis quo dara net para</h6>
                                            <p className='text-secondary'>Jan 1,2020</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-md-12 '>
                                    <div className='row'>
                                        <div className='col-md-4 '>
                                            <img src="../Assets/10104.jpg" className="card-img-left " alt="..." style={{width:'5rem'}}/>
                                        </div>
                                        <div className='col-md-8 '>
                                            <h6>Et dolores corrupti quae illo quod dolor</h6>
                                            <p className='text-secondary'>Jan 1,2020</p>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className='col-md-12 '>
                                    <div className='row'>
                                        <div className='col-md-4 '>
                                            <img src="../Assets/10105.jpg" className="card-img-left " alt="..." style={{width:'5rem'}}/>
                                        </div>
                                        <div className='col-md-8 '>
                                            <h6>Et dolores corrupti quae illo quod dolor</h6>
                                            <p className='text-secondary'>Jan 1,2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
        </React.Fragment>
    )
}

export default Blog