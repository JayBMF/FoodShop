import React from "react";
import '../css/hero_setbg.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function Categories(){
    const options = {
        items: 4,
        loop: true,
        autoplay: true,
        rewind: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        margin: 10,
        
    };
    return(
        <div>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="categories__slider">
                            <OwlCarousel className="owl-theme" {...options}>
                                <div className="col-lg">
                                    <div className="categories__item">
                                        <h5><a href="#">Fresh Fruit</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="categories__item">
                                        <h5><a href="#">Dried Fruit</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="categories__item set-bg">
                                        <h5><a href="#">Vegetables</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="categories__item set-bg">
                                        <h5><a href="#">drink fruits</a></h5>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <div className="categories__item set-bg">
                                        <h5><a href="#">drink fruits</a></h5>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Categories;