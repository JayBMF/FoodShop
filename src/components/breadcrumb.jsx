import React from "react";
import { Link, useParams } from 'react-router-dom';
import '../css/hero_setbg.css';

function Content(){
    const currentPage = window.location.pathname;
    const {id} = useParams();
    const {searchKey} = useParams();

    console.log(searchKey);
    switch(currentPage){
        case `/Shop/${id}`:
            return <div>
                <h2>Organi Shop</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Shop</span>
                </div>
            </div>;
        case `/shop/search/${searchKey}`:
            return <div>
                <h2>Organi Shop</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Shop</span>
                </div>
            </div>;
        case `/shop-details/${id}`:
            return <div>
                <h2>Product details</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Product details</span>
                 </div>
            </div>;
        case '/shopping-cart':
            return <div>
                <h2>Shopping Cart</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Shopping Cart</span>
                </div>
            </div>
        case '/favourite-list':
            return <div>
                <h2>Favourite list</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Favourite list</span>
                </div>
            </div>
        case '/contact':
            return <div>
                <h2>Contact Us</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Contact Us</span>
                </div>
            </div>;
        case '/check-out':
            return <div>
                <h2>Checkout</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Checkout</span>
                </div>
            </div>;
        case '/profile':
            return <div>
                <h2>Profile</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Profile</span>
                </div>
            </div>;
        case '/profile/update':
            return <div>
                <h2>Profile</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Profile update</span>
                </div>
            </div>;
        case '/profile/update-password':
            return <div>
                <h2>Profile</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Update password</span>
                </div>
            </div>;
        case '/orders':
            return <div>
                <h2>Orders</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Orders</span>
                </div>
            </div>;
        default:
            return <div>
                <h2>Organi Shop</h2>
                <div class="breadcrumb__option">
                    <Link to="/Home">Home</Link>
                    <span>Shop</span>
                </div>
            </div>; 
    }
}

function Breadcrumb(){
    return(
        <div>
            <section class="breadcrumb-section set-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="breadcrumb__text">
                                <Content/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Breadcrumb;