import React, {useState, useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/hero_setbg.css';
import cartAction from "../api/cartApi";
import Loading from "./Loading";
import { debounce } from "lodash";


function CartSection(){
    const [quantity, setQuantity] = useState(0);
    // const [clicked, setClicked] = useState(false);

    const debouncedUpdateQuantity = debounce( async (idProduct, productQuantity) => {
        await cartAction.updateQuantity(idProduct, productQuantity);
        setQuantity(0);
        fetchData();
    }, 2000); 

    const increaseQuantity = async (idProduct, productQuantity) => {
        // if(quantity === 0){
        //     setQuantity(productQuantity);
        // }
        // setQuantity(quantity + 1);


        await cartAction.updateQuantity(idProduct, productQuantity + 1);
        // setQuantity(0);
        fetchData();
    };


    const decreaseQuantity = async (idProduct, productQuantity) => {
        if (productQuantity > 1) {
            await cartAction.updateQuantity(idProduct, productQuantity - 1);
            fetchData();
        }
    }

    const [listCartItems, setListCartItems] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try {
            const response = await cartAction.getAll();
            setListCartItems(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const formattedAmount = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    const handleRemoveItem = async (param) => {
        try {
            await cartAction.remove(param);
            fetchData();
            setLoading(false);
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
                                                { listCartItems && listCartItems.map((item) => (
                                                    <tr>
                                                        <td class="shoping__cart__item">
                                                            <img className="item_image" src={item.urlImage} />
                                                            <h5>{item.name}</h5>
                                                        </td>
                                                        <td class="shoping__cart__price">
                                                            {formattedAmount.format(item.price)}
                                                        </td>
                                                        <td class="shoping__cart__quantity">
                                                            <div class="quantity">
                                                                <div class="pro-qty">
                                                                    <button className="btn btn-light"  onClick={() => decreaseQuantity(item.productId, item.quantity)}>-</button>
                                                                    <input type="text" value={item.quantity}/>
                                                                    <button className="btn btn-light" onClick={() => increaseQuantity(item.productId, item.quantity)}>+</button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="shoping__cart__total">
                                                            {formattedAmount.format(item.totalPrice)}
                                                        </td>
                                                        <td class="shoping__cart__item__close">
                                                            <span class="icon_close" onClick={() => handleRemoveItem(item.productId)}></span>
                                                        </td>
                                                    </tr>
                                                ))}
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
                )
            }
        </div>
    )
}

export default CartSection