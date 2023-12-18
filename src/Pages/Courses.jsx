import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Course from "../Component/Course";

const Courses = () => {
    const [course, setcourse] = useState([]);
    useEffect(() => {
      fetch('http://localhost:8080/productsall')
          .then(res => res.json())
          .then(data => setcourse(data)) ;
  }, []);
    return (
        <div>
            <>
                {/* Header Start */}
                <div className="container-fluid bg-primary py-5 mb-5 page-header">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-center">
                                <h1 className="display-3 text-white animated slideInDown">Courses</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="#">
                                                Home
                                            </a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a className="text-white" href="#">
                                                Pages
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item text-white active"
                                            aria-current="page"
                                        >
                                            Courses
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}

                {/* Categories Start */}
                <div className="container-xxl py-5 category">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                            <h1 className="mb-5">Courses Categories</h1>
                        </div>
                        <div className="row g-3">
                            <div className="col-lg-7 col-md-6">
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                        <a className="position-relative d-block overflow-hidden" href="">
                                            <img className="img-fluid" src="assets/img/cat-1.jpg" alt="" />
                                            <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                                <h5 className="m-0">Web Design</h5>
                                                <small className="text-primary">49 Courses</small>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                        <a className="position-relative d-block overflow-hidden" href="">
                                            <img className="img-fluid" src="assets/img/cat-2.jpg" alt="" />
                                            <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                                <h5 className="m-0">Graphic Design</h5>
                                                <small className="text-primary">49 Courses</small>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                                        <a className="position-relative d-block overflow-hidden" href="" />
                                        <img className="img-fluid" src="assets/img/cat-3.jpg" alt="" />
                                        <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }} />
                                        <h5 className="m-0">Video Editing</h5>
                                        <small className="text-primary">49 Courses</small>
                                    </div>



                                </div>
                            </div>

                            <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: "350px" }}>
                                <a className=" d-block h-100 overflow-hidden" href="">
                                    <img className="img-fluid  w-100 h-100" src="assets/img/cat-4.jpg" alt="" style={{ objectFit: "cover" }} />
                                    <div className="bg-white text-center  bottom-0 end-0 py-2 px-3" style={{ margin: "1px" }}>
                                        <h5 className="m-0">Online Marketing</h5>
                                        <small className="text-primary">49 Courses</small>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Categories end */}

                {/* Services Start */}

                <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Popular Courses</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                   
                        
                      {
                        course.map( item =>
                             <Course data={item}></Course>
                         )
                      }

                    </div>
                </div>
            </div>
                {/* Services End */}

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                        <h1 className="mb-5">Our Students Say!</h1>
                    </div>

                    <OwlCarousel autoPlay  className=" owl-theme owl-carousel testimonial-carousel position-relative" loop margin={1}>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="assets/img/testimonial-1.jpg" style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="assets/img/testimonial-2.jpg" style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="assets/img/testimonial-3.jpg" style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="border rounded-circle p-2 mx-auto mb-3" src="assets/img/testimonial-4.jpg" style={{ width: "80px", height: "80px" }} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
                {/* Testimonial End */}
            </>

        </div>
    );
};

export default Courses;