import React, { useContext } from 'react';
import { ServiceContext } from './ServiceContext';


const Course = (props) => {
    console.log(props.data);
    const { id, product, model, price  } = props.data;
    const {cartItems, addToCart} = useContext(ServiceContext);
    const cartItemCount = cartItems[id];
    return (
       
<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
    <div className="course-item bg-light">
        <div className="position-relative overflow-hidden">
            <img className="img-fluid" src="assets/img/course-3.jpg" alt="" />
            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                <button onClick={ ()=>addToCart(id) } className="btn btn-primary ms-4"> Add to Cart ({cartItemCount}) </button>
                 
            </div>
        </div>
        <div className="text-center p-4 pb-0">
            <h3 className="mb-0">$ {price} </h3>
            <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small>(123)</small>
            </div>
            <h5 className="mb-4"> {product} </h5>
        </div>
        <div className="d-flex border-top">
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i> {model} </small>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
        </div>
    </div>
</div>
      
    );
};

export default Course;