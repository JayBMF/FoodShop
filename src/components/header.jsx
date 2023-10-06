import React from 'react';
import { Link } from 'react-router-dom';
import Language from '../img/language.png';
import Logo from '../img/logo.png';
import 'font-awesome/css/font-awesome.min.css';

function Content(){
    const currentPage = window.location.pathname;

    switch(currentPage){
        case '/':
            return <div>
                <ul>
                    <li class="active"><Link to="/Home">Home</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><a href="#">Pages</a>
                        <ul class="header__menu__dropdown">
                            <li><Link to="/shop-details">Shop Details</Link></li>
                            <li><Link to="/shopping-cart">Shoping Cart</Link></li>
                            <li><Link to="/check-out">Check Out</Link></li>
                            <li><a href="./blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>;
        case '/Home':
            return <div>
                <ul>
                    <li class="active"><Link to="/Home">Home</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><a href="#">Pages</a>
                        <ul class="header__menu__dropdown">
                            <li><Link to="/shop-details">Shop Details</Link></li>
                            <li><Link to="/shopping-cart">Shoping Cart</Link></li>
                            <li><Link to="/check-out">Check Out</Link></li>
                            <li><a href="./blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>;
        case '/contact':
            return <div>
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><a href="#">Pages</a>
                            <ul class="header__menu__dropdown">
                                <li><Link to="/shop-details">Shop Details</Link></li>
                                <li><Link to="/shopping-cart">Shoping Cart</Link></li>
                                <li><Link to="/check-out">Check Out</Link></li>
                                <li><a href="./blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="./blog.html">Blog</a></li>
                        <li class="active"><Link to="/contact">Contact</Link></li>
                    </ul>
            </div>;
        default:
            return <div>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li class="active"><Link to="/Shop">Shop</Link></li>
                    <li><a href="#">Pages</a>
                        <ul class="header__menu__dropdown">
                            <li><Link to="/shop-details">Shop Details</Link></li>
                            <li><Link to="/shopping-cart">Shoping Cart</Link></li>
                            <li><Link to="/check-out">Check Out</Link></li>
                            <li><a href="./blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li><a href="./blog.html">Blog</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>;
    }
}

function Header(){
    return(
        <div>
            <header class="header">
                <div class="header__top">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__left">
                                    <ul>
                                        <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                                        <li>Free Shipping for all Order of $99</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="header__top__right">
                                    <div class="header__top__right__social">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                        <a href="#"><i class="fa fa-pinterest-p"></i></a>
                                    </div>
                                    <div class="header__top__right__language">
                                        <img src={Language} alt="Language"/>
                                        <div>English</div>
                                        <span class="arrow_carrot-down"></span>
                                        <ul>
                                            <li><a href="#">Spanis</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
                                    </div>
                                    <div class="header__top__right__auth">
                                        <a href="#"><i class="fa fa-user"></i> Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="header__logo">
                                <Link to="/Home"><img src={Logo} alt="Logo"/></Link>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <nav class="header__menu">
                                <Content/>
                            </nav>
                        </div>
                        <div class="col-lg-3">
                            <div class="header__cart">
                                <ul>
                                    <li><a href="#"><i class="fa fa-heart"></i> <span>1</span></a></li>
                                    <li><Link to="/shopping-cart"><i class="fa fa-shopping-bag"></i> <span>3</span></Link></li>
                                </ul>
                                <div class="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="humberger__open">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
