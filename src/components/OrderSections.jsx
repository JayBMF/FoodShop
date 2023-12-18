import React, {useState, useEffect} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/hero_setbg.css';
import favoriteApi from "../api/favoriteApi";
import Loading from "./Loading";
import { debounce } from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import orderApi from "../api/orderApi";


function OrdersSection(){
    const [loading, setLoading] = useState(true);
    const [listOrders, setListOrders] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try {
            const response = await orderApi.getByUser();
            setListOrders(response)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const formattedAmount = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    const formattedDate = new Date();

    return(
        <div>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <section className="checkout spad">
                        <div className="container">
                            <div class="checkout__form">
                                <h4>Orders</h4>
                                <form>
                                <div className="row">
                                {
                                    listOrders && listOrders.map((item) => (
                                        <div class="col-lg-6 col-md-6" style={{ marginTop: '20px'}}>
                                            <div class="checkout__order">
                                                <h4>Your Order</h4>
                                                <ul>
                                                    <li>Address<span>{item.address.address}</span></li>
                                                    <li>Items<span>{item.cartLineItemResponseDTOs.length}</span></li>
                                                    <li>Status<span>{item.statusOrder}</span></li>
                                                    <li>Payment<span>{item.vnPayResponseDTO === null ? "Unpaid" : "Paid"}</span></li>
                                                    <li>Delivery time<span>{formattedDate.getDate(item.deliveryTime)}/{formattedDate.getMonth(item.deliveryTime) + 1}</span></li>
                                                </ul>
                                                <div class="checkout__order__total">Total <span>{formattedAmount.format(item.totalPrice)}</span></div>
                                                <button class="site-btn">VIEW DETAILS</button>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                                </form>
                            </div>
                        </div>
                    </section>
                )
            }
        </div>
    )
}

export default OrdersSection