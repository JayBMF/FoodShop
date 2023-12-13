import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/hero_setbg.css';
import listCategories from '../api/listCategories';
import listProducts from "../api/listProducts";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

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
    const [listProduct, setListProducts] = useState('');
    const [sortDir, setSortDir] = useState("Default");
    const [sortBy, setSortBy] = useState("id");
    
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [id, sortBy, sortDir]);
    const fetchData = async() => {
        
        try {
            const responseCategory = await listCategories.get();
            const responseProducts = await listProducts.getAndSort(id, sortBy, sortDir);
            setListCategory(responseCategory);
            setListProducts(responseProducts);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    

    const handleSelected = (e) => {
        setSortDir(e.target.value);
        if (e.target.value === "Default"){
            setSortBy("id");
        } else {
            setSortBy("price");
        }
    };

    const formattedAmount = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    
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
                                            <li key={item.id}><Link to={`/Shop/${item.id}`}><a>{item.name}</a></Link></li>
                                        ))}
                                    </ul>
                                </div>
                                {/* <div class="sidebar__item">
                                    <h4>Price</h4>
                                    
                                </div> */}
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-7">
                            
                            <div class="filter__item">
                                <div class="row">
                                    <div class="col-lg-4 col-md-5">
                                        <div class="filter__sort">
                                            <span>Sort By</span>
                                            <select onChange={handleSelected}>
                                                <option value="Default">Default</option>
                                                <option value="asc">Increase</option>
                                                <option value="desc">Decrease</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <div class="filter__found">
                                            <h6><span>16</span> Products found</h6>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="row">
                                {
                                    loading ? (
                                        <Loading/>
                                    ) :  (
                                        <>
                                            {
                                                listProduct && listProduct.map((item) => (
                                                    <div class="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                                                        <Link to={`/shop-details/${item.id}`}>
                                                            <div class="product__item">
                                                                <div class="product__item__pic product__discount__item__pic set-bg" style={{backgroundImage: `url(${item.urlImage})`}}>
                                                                    {/* <ul class="product__item__pic__hover">
                                                                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                                                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                                                    </ul> */}
                                                                    <div class="product__discount__percent">-{item.discount*100}%</div>
                                                                </div>
                                                                <div class="product__item__text">
                                                                    <h6>{item.name}</h6>
                                                                    <h5>{formattedAmount.format(item.price)}</h5>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </>
                                    ) 
                                }
                                

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