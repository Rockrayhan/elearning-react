import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow p-0">
                <Link to='/' class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>eLEARNING</h2>
                </Link>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" class="nav-item nav-link"> Home </Link>
                        <Link to="about" class="nav-item nav-link"> About </Link>
                        <Link to="courses" class="nav-item nav-link"> Courses </Link>

                        <Link to="contact" class="nav-item nav-link"> Contact </Link>
                        <Link to="cart" class="nav-item nav-link"> cart <i className='bi bi-cart'></i> </Link>

                    </div>
                    <a href="" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"> Join Now <i class="fa fa-arrow-right ms-3"></i></a>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;