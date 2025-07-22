import { NavLink } from "react-router-dom";
import React from "react";
import "../Style/About.css";

export default class About extends React.Component {
    constructor() {
        super();
        this.state = {
            Data_Display: true,

            selectedItem: null  ,
        };
    }
    
    render() {
        
        const About_Data = [
            {
                id: 1,
                h1: "Voluptatem dignissimos provident quasi",
                p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit",
                img: "../Assets/10012.jpg",
            },

            {
                id: 2,
                h1: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Voluptatem dignissimos provident quasi. Duis aute irure dolor in reprehenderit",
                img: "../Assets/10013.jpg",
            },

            {
                id: 3,
                h1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                p: "Voluptatem dignissimos provident quasi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit",
                img: "../Assets/10014.jpg",
            },
        ];

        const Data_Display = [
            {
                id: 1,
                label: "Happy Clients",
                count: "232",
                icon: <i class="bi bi-emoji-smile"></i>,
            },
            {
                id: 2,
                label: "Projects",
                count: "521",
                icon: <i class="bi bi-journal-text"></i>,
            },
            {
                id: 3,
                label: "Hours Of Support",
                count: "1473",
                icon: <i class="bi bi-headset"></i>,
            },
            {
                id: 4,
                label: "Workers",
                count: "15",
                icon: <i class="bi bi-people"></i>,
            },
        ];

        const DisplayItem = (item) => {
            this.setState({ selectedItem: item });
        };


        return (
        <div className="container-fluid h-auto w-100">
            <div id="About"className=" col-md-12 h-auto w-100 p-5 bg-dark">
                <div className="row p-3">
                    <div className=" col-md-4 ">
                        <h1>Voluptatem dignissimos provident quasi</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                            aute irure dolor in reprehenderit.
                        </p>
                        <button className="btn btn-outline-danger">
                            <a href="/" className="nav-link">About Us{" "}</a>
                        </button>
                    </div>

                    {/* ********************************** */}
                    <div className="logo col-md-4  ">
                        <NavLink to="/" className="content nav-link">
                            <i className="bi bi-envelope"></i>
                            <h5>Corpurous voluptatem sit</h5>
                            <p>
                                Aspernatur ut autem voluptatum delectus saepe dolore vitae a
                                commodi facere
                            </p>
                        </NavLink>
                        <NavLink to="/" className=" content nav-link">
                            <i className="bi bi-wifi"></i>
                            <h5>labore consectetur</h5>
                            <p>
                                cupiditate natus tenetur a voluptas. Vitae tenetur tempore
                                pariatur architecto cupiditate quasi!
                            </p>
                        </NavLink>
                    </div>

                    {/* ********************************** */}
                    <div className="logo col-md-4 ">
                        <NavLink to="/" className="content nav-link">
                            <i className="bi bi-gem"></i>
                            <h5>Corpurous voluptatem sit</h5>
                            <p>
                                Suscipit exercitationem commodi, rem ullam quos molestias
                                alias id autem architecto
                            </p>
                        </NavLink>

                        <NavLink to="/" className="content nav-link">
                            <i className="bi bi-easel"></i>
                            <h5>Corpurous voluptatem sit</h5>
                            <p>
                                Architecto eum, consequatur alias dolore laboriosam tenetur
                                quidem error.
                            </p>
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* *********Scrolling Images********* */}
            <div className="auto-scroll-wrapper">
                <div className="auto-scroll-images">
                    {/* Repeat the images twice for seamless loop */}
                    {[...Array(2)].map((_, i) => (
                    <>
                        <img key={`img1-${i}`} src="/Assets/10004.png" alt="img1" />
                        <img key={`img2-${i}`} src="/Assets/10005.png" alt="img2" />
                        <img key={`img3-${i}`} src="/Assets/10006.png" alt="img3" />
                        <img key={`img4-${i}`} src="/Assets/10007.png" alt="img4" />
                        <img key={`img5-${i}`} src="/Assets/10008.png" alt="img5" />
                        <img key={`img6-${i}`} src="/Assets/10009.png" alt="img6" />
                        <img key={`img7-${i}`} src="/Assets/10010.png" alt="img7" />
                        <img key={`img8-${i}`} src="/Assets/10011.png" alt="img8" />
                    </>
                    ))}
                </div>
            </div>

            {/* Display cards about us  */}
            <div className="card-container  col-md-12 my-5">
                <div className="row justify-content-center g-0">
                    {Data_Display.map((val, index) => {
                    return (
                        <div className="data-count card col-md-2 text-center " key={index}>
                            <div className="icon-wrapper">{val.icon}</div>
                            <h4>{val.count}</h4>
                            <p>{val.label}</p>
                        </div>
                    );
                    })}
                </div>
            </div>

            <div className="container-fluid  pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div class="row">
                            {
                                About_Data.map((val, index) => {
                                    return (
                                        <>
                                        <div
                                            className="col-md-4 bg-dark text-light shadow-lg"
                                            onClick={() => DisplayItem(val.id)}
                                        >
                                            {val.h1}
                                        </div>
                                        </>
                                    );
                                })
                            }
                            <hr />
                            {
                                this.selectedItem &&(
                                    <div className="row col-md-12">
                                        <div className="card col-md-6 p-3 shadow-sm ">
                                            <h4>{this.state.selectedItem.h1}</h4>
                                            <p>{this.state.selectedItem.p}</p>
                                            <div className="col-md-6">
                                                <img src={this.state.selectedItem.img} className="img-fluid" style={{height:"300px"}}/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}

