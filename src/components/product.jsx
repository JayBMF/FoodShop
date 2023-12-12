import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/hero_setbg.css';
import listCategories from '../api/listCategories';
import LP1 from "../img/latest-product/lp-1.jpg";
import LP2 from "../img/latest-product/lp-2.jpg";
import LP3 from "../img/latest-product/lp-3.jpg";

function Product(){
    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'slideOutUp',
        nav: false,
        dots: true,
        margin: 0,
    };

    const discountOptions = {
        items: 3,
        loop: true,
        autoplay: true,
        rewind: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: false,
        margin: 10,
    };

    const [listCategory, setListCategory] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try {
            const response = await listCategories.get();
            setListCategory(response);
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <div>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div class="col-lg-3 col-md-5">
                            <div class="sidebar">
                                <div class="sidebar__item">
                                    <h4>Department</h4>
                                    <ul>
                                        {listCategory &&
                                         listCategory.map((item) => (
                                            <li key={item.id}><a>{item.name}</a></li>
                                        ))}
                                    </ul>
                                </div>
                                <div class="sidebar__item">
                                    <h4>Price</h4>
                                    
                                </div>
                               
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-7">
                            <div class="product__discount">
                                <div class="section-title product__discount__title">
                                    <h2>Sale Off</h2>
                                </div>
                                <div class="row">
                                    <div class="product__discount__slider">
                                        <OwlCarousel className="owl-theme" {...discountOptions}>
                                            <div class="col-lg">
                                                <div class="product__discount__item">
                                                    <div class="product__discount__item__pic set-bg"
                                                        data-setbg="img/product/discount/pd-1.jpg">
                                                        <div class="product__discount__percent">-20%</div>
                                                        <ul class="product__item__pic__hover">
                                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div class="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg">
                                                <div class="product__discount__item">
                                                    <div class="product__discount__item__pic set-bg"
                                                        data-setbg="img/product/discount/pd-2.jpg">
                                                        <div class="product__discount__percent">-20%</div>
                                                        <ul class="product__item__pic__hover">
                                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product__discount__item__text">
                                                        <span>Vegetables</span>
                                                        <h5><a href="#">Vegetables’package</a></h5>
                                                        <div class="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg">
                                                <div class="product__discount__item">
                                                    <div class="product__discount__item__pic set-bg"
                                                        data-setbg="img/product/discount/pd-3.jpg">
                                                        <div class="product__discount__percent">-20%</div>
                                                        <ul class="product__item__pic__hover">
                                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Mixed Fruitss</a></h5>
                                                        <div class="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg">
                                                <div class="product__discount__item">
                                                    <div class="product__discount__item__pic set-bg"
                                                        data-setbg="img/product/discount/pd-4.jpg">
                                                        <div class="product__discount__percent">-20%</div>
                                                        <ul class="product__item__pic__hover">
                                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div class="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg">
                                                <div class="product__discount__item">
                                                    <div class="product__discount__item__pic set-bg"
                                                        data-setbg="img/product/discount/pd-5.jpg">
                                                        <div class="product__discount__percent">-20%</div>
                                                        <ul class="product__item__pic__hover">
                                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div class="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg">
                                                <div class="product__discount__item">
                                                    <div class="product__discount__item__pic set-bg"
                                                        data-setbg="img/product/discount/pd-6.jpg">
                                                        <div class="product__discount__percent">-20%</div>
                                                        <ul class="product__item__pic__hover">
                                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div class="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div class="filter__item">
                                <div class="row">
                                    <div class="col-lg-4 col-md-5">
                                        <div class="filter__sort">
                                            <span>Sort By</span>
                                            <select>
                                                <option value="0">Default</option>
                                                <option value="0">Default</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="filter__found">
                                            <h6><span>16</span> Products found</h6>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-3">
                                        <div class="filter__option">
                                            <span class="icon_grid-2x2"></span>
                                            <span class="icon_ul"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-4.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-5.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-6.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-8.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-9.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-10.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-11.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" data-setbg="img/product/product-12.jpg">
                                            <ul class="product__item__pic__hover">
                                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Product;