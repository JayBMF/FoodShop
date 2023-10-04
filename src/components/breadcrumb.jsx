import React from "react";
import '../css/hero_setbg.css';

function Content(){
    const currentPage = window.location.pathname;

    switch(currentPage){
        case '/Shop':
            return <div>
                <h2>Organi Shop</h2>
                <div class="breadcrumb__option">
                    <a href="./index.html">Home</a>
                    <span>Shop</span>
                </div>
            </div>;
        case '/shop-details':
            return <div>
                <h2>Vegetable’s Package</h2>
                <div class="breadcrumb__option">
                    <a href="./index.html">Home</a>
                    <a href="./index.html">Vegetables</a>
                    <span>Vegetable’s Package</span>
                 </div>
            </div>;
        default:
            return <div></div>; 
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