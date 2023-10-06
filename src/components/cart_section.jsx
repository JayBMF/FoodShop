import React, {useState, useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/hero_setbg.css';
import Cart1 from "../img/cart/cart-1.jpg";
import Cart2 from "../img/cart/cart-2.jpg";
import Cart3 from "../img/cart/cart-3.jpg";


function CartSection(){
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    
    const decreaseQuantity = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    }
    return(
        <div>
            <section className="shoping-cart spad">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="shoping__cart__item">
                                                <img src={Cart1} alt=""/>
                                                <h5>Vegetable’s Package</h5>
                                            </td>
                                            <td class="shoping__cart__price">
                                                $55.00
                                            </td>
                                            <td class="shoping__cart__quantity">
                                                <div class="quantity">
                                                    <div class="pro-qty">
                                                        <button className="btn btn-light"  onClick={decreaseQuantity}>-</button>
                                                        <input type="text" value={quantity}/>
                                                        <button className="btn btn-light" onClick={increaseQuantity}>+</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="shoping__cart__total">
                                                $110.00
                                            </td>
                                            <td class="shoping__cart__item__close">
                                                <span class="icon_close"></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="shoping__cart__item">
                                                <img src={Cart2} alt=""/>
                                                <h5>Fresh Garden Vegetable</h5>
                                            </td>
                                            <td class="shoping__cart__price">
                                                $39.00
                                            </td>
                                            <td class="shoping__cart__quantity">
                                                <div class="quantity">
                                                    <div class="pro-qty">
                                                        <button className="btn btn-light"  onClick={decreaseQuantity}>-</button>
                                                        <input type="text" value={quantity}/>
                                                        <button className="btn btn-light" onClick={increaseQuantity}>+</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="shoping__cart__total">
                                                $39.99
                                            </td>
                                            <td class="shoping__cart__item__close">
                                                <span class="icon_close"></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="shoping__cart__item">
                                                <img src={Cart3} alt=""/>
                                                <h5>Organic Bananas</h5>
                                            </td>
                                            <td class="shoping__cart__price">
                                                $69.00
                                            </td>
                                            <td class="shoping__cart__quantity">
                                                <div class="quantity">
                                                    <div class="pro-qty">
                                                        <button className="btn btn-light"  onClick={decreaseQuantity}>-</button>
                                                        <input type="text" value={quantity}/>
                                                        <button className="btn btn-light" onClick={increaseQuantity}>+</button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="shoping__cart__total">
                                                $69.99
                                            </td>
                                            <td class="shoping__cart__item__close">
                                                <span class="icon_close"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="shoping__cart__btns">
                                <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                                <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                                    Upadate Cart</a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="shoping__continue">
                                <div class="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your coupon code"/>
                                        <button type="submit" class="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>$454.98</span></li>
                                    <li>Total <span>$454.98</span></li>
                                </ul>
                                <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CartSection