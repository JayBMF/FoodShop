import React, {useState, useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/hero_setbg.css';
import PD from "../img/product/details/product-details-1.jpg";
import PD1 from "../img/product/details/product-details-2.jpg";
import PD2 from "../img/product/details/product-details-3.jpg";
import PD3 from "../img/product/details/product-details-5.jpg";
import PD4 from "../img/product/details/product-details-4.jpg";

import T1 from "../img/product/details/thumb-1.jpg";
import T2 from "../img/product/details/thumb-2.jpg";
import T3 from "../img/product/details/thumb-3.jpg";
import T4 from "../img/product/details/thumb-4.jpg";
import { event } from "jquery";



function ProductDetails(){
    const options = {
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'slideOutUp',
        nav: false,
        dots: true,
        margin: 30,
    };

    const [imgSrc, setImgSrc] = useState(PD);


    const handleClick = (event) => {
        const imgElement = event.target;
        const imgBigUrl = imgElement.getAttribute('data-imgbigurl');

        setImgSrc(imgBigUrl);
    };

    const [quantity, setQuantity] = useState(1);
    const pricePerItem = 50;

    const total = quantity * pricePerItem;
    return(
        <div>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__pic">
                                <div class="product__details__pic__item">
                                    <img class="product__details__pic__item--large" src={imgSrc} alt=""/>
                                </div>
                                <div class="product__details__pic__slider ">
                                    <OwlCarousel className="owl-theme" {...options}>
                                        <img data-imgbigurl={PD1}
                                            src={T1} alt="" onClick={handleClick}/>
                                        <img data-imgbigurl={PD2}
                                            src={T2} alt="" onClick={handleClick}/>
                                        <img data-imgbigurl={PD3}
                                            src={T3} alt="" onClick={handleClick}/>
                                        <img data-imgbigurl={PD4}
                                            src={T4} alt="" onClick={handleClick}/>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="product__details__text">
                                <h3>Vetgetable’s Package</h3>
                                <div class="product__details__rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                    <span>(18 reviews)</span>
                                </div>
                                <div class="product__details__price">${total}.00</div>
                                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                                    vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                                    quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                                <div class="product__details__quantity">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <a onClick={() => setQuantity(quantity - 1)}>-</a>
                                            <input type="text" value={quantity}/>
                                            <a onClick={() => setQuantity(quantity + 1)}>+</a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="primary-btn">ADD TO CARD</a>
                                <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                                <ul>
                                    <li><b>Availability</b> <span>In Stock</span></li>
                                    <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                    <li><b>Weight</b> <span>0.5 kg</span></li>
                                    <li><b>Share on</b>
                                        <div class="share">
                                            <a href="#"><i class="fa fa-facebook"></i></a>
                                            <a href="#"><i class="fa fa-twitter"></i></a>
                                            <a href="#"><i class="fa fa-instagram"></i></a>
                                            <a href="#"><i class="fa fa-pinterest"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="product__details__tab">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" data-target="#tabs-1" role="tab"
                                            aria-selected="true">Description</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" data-target="#tabs-2" role="tab"
                                            aria-selected="false">Information</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" data-target="#tabs-3" role="tab"
                                            aria-selected="false">Reviews <span>(1)</span></a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div class="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                                suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                                vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                                Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                                accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                                pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                                elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                                et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                                vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                                <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                                elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                                porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                                nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                                porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                                sed sit amet dui. Proin eget tortor risus.</p>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tabs-2" role="tabpanel">
                                        <div class="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                                Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                                sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                                eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                                sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                                diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                                Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                                Proin eget tortor risus.</p>
                                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                                ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                                elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                                porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                                nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tabs-3" role="tabpanel">
                                        <div class="product__details__tab__desc">
                                            <h6>Products Infomation</h6>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                                Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                                Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                                sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                                eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                                sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                                diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                                ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                                Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                                Proin eget tortor risus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetails;