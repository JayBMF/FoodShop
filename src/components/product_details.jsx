import React, {useState, useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/hero_setbg.css';
import listPoducts from "../api/listProducts";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import cartAction from "../api/cartApi";



function ProductDetails(){
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try {
            const response = await listPoducts.getById(id);
            setName(response.name);
            setAmount(response.available);
            setDiscount(response.discount);
            setPrice(response.price);
            setDescription(response.description);
            setImage(response.urlImage);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

        
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    
    const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    }
    const pricePerItem = price;

    const total = quantity * pricePerItem;

    const formattedAmount = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(total);

    const handleAddToCart = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("quantity", quantity);
            formData.append("idProduct", id);
            await cartAction.add(formData);
            setIsLoading(false);
            navigate('/shopping-cart');
        } catch (error) {
            console.log(error);
        }
    };
    return(
        <div>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <section className="product-details spad">
                        <div className="container">
                            <div className="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="product__details__pic">
                                        <div class="product__details__pic__item">
                                            <img class="product__details__pic__item--large" src={image} alt=""/>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="product__details__text">
                                        <h3>{name}</h3>
                                        <div class="product__details__rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-half-o"></i>
                                            <span>(18 reviews)</span>
                                        </div>
                                        <div class="product__details__price">{formattedAmount}</div>
                                        <div class="product__details__quantity">
                                            <div class="quantity">
                                                <div class="pro-qty">
                                                    <button className="btn btn-light"  onClick={decreaseQuantity}>-</button>
                                                    <input type="text" value={quantity}/>
                                                    <button className="btn btn-light" onClick={increaseQuantity}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="primary-btn" onClick={handleAddToCart} disabled={isLoading}>ADD TO CARD</button>
                                        <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                                        <ul>
                                            <li><b>Availability</b> <span>{amount}</span></li>
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
                                        
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                                <div class="product__details__tab__desc" dangerouslySetInnerHTML={{ __html: description}}>
                                                    {/* {description} */}
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
            
        </div>
    );
}

export default ProductDetails;