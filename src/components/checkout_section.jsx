import React, {useState, useEffect} from "react";
import cartAction from "../api/cartApi";
import addressApi from "../api/addressApi";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import profileApi from "../api/profileApi";
import orderApi from "../api/orderApi";

function CheckoutSection(){
    const [listCartItems, setListCartItems] = useState([]);
    const [listAddress, setListAddress] = useState([]);
    const [totalPrice, setTotalPrice] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [address, setAddress] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [payment, setPayment] = useState(1);

    
    const currentPage = useLocation().pathname;
    const navigate = useNavigate();
    
    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        fetchData();
        
    }, []);

    const fetchData = async() => {
        
        try {
            const response = await cartAction.getAll();
            const data = await addressApi.get();
            const identity = await profileApi.get();
            setListCartItems(response);
            setListAddress(data);
            setUserInfo(identity);
            setAddress(data[0].id);
            let sumPrice = 0;
            response.forEach(item => {
                sumPrice += item.totalPrice;
            });
            setTotalPrice(sumPrice);
        } catch (error) {
            console.log(error);
        }
    };

    
    const formattedAmount = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    const handleAddAddress = async(e) => {
        
        try {
            await addressApi.add(newAddress);
            navigate("/check-out");
            toast.success("Create new address success");
            fetchData();
        } catch (error) {
            console.log(error);
            toast.error("Create new address failed");
        }
    };

    const handleSelected = (e) => {
        setAddress(e.target.value);
    };

    const handleSelectedPayment = (e) => {
        setPayment(e.target.value);
    };

    
    const handleOrder = async() => {
        setLoading(true);
        if ( payment === 1) {
            try {
                await orderApi.add(address, userInfo.fullName, userInfo.phone);
                toast.success("Order success");
                navigate("/Home");
            } catch (error) {
                console.log(error);
                toast.error("Order failed");
            }
        } else {
            try {
                const urlVNPay = await orderApi.addOnl(address, userInfo.fullName, userInfo.phone, totalPrice);
                if (urlVNPay) {
                    window.location=urlVNPay;
                }
            } catch (error) {
                console.log(error);
                toast.error("Order failed");
            }
        }
    }
    
    return(
        <div>
            <section className="checkout spad">
                <div className="container">
                    <div class="checkout__form">
                        <h4>Billing Details</h4>
                        <form>
                            <div class="row">
                                <div class="col-lg-8 col-md-6">
                                    <div class="checkout__input">
                                        {
                                            currentPage === "/check-out" ? (
                                                <>
                                                    <p>Address<span>*</span></p>
                                                    <select style={{ width: '756px'}} onChange={handleSelected}>
                                                        {
                                                            listAddress && listAddress.map((item) => (
                                                                <option key={item.id} value={item.id}>{item.address}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <Link to="/check-out/create-address"><button className="site-btn" style={{ marginTop: '10px'}}>Ship to another address</button></Link>
                                                </>
                                            ) : (
                                                <>
                                                    <p>New address<span>*</span></p>
                                                    <input type="text" placeholder="Enter new address" onChange={(e) => setNewAddress(e.target.value)}/>
                                                    <button className="site-btn" style={{ marginTop: '10px'}} onClick={handleAddAddress} disabled={isLoading}>Create new address</button>
                                                </>
                                            )
                                        }
                                        
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="checkout__order">
                                        <h4>Your Order</h4>
                                        <div class="checkout__order__products">Products <span>Total</span></div>
                                        <ul>
                                            {
                                                listCartItems && listCartItems.map((item) => (
                                                    <li>{item.name}<span>{formattedAmount.format(item.totalPrice)}</span></li>
                                                ))
                                            }
                                            
                                        </ul>
                                        
                                        <div class="checkout__order__total">Total <span>{formattedAmount.format(totalPrice)}</span></div>
                                        
                                        <div class="checkout__input__checkbox">
                                            <label for="payment">
                                                Payment
                                                <select style={{ marginLeft: '10px'}} onChange={handleSelectedPayment}>
                                                    <option value={1}>Ship cod</option>
                                                    <option value={2}>Banking</option>
                                                </select>
                                            </label>
                                        </div>
                                        <button class="site-btn" onClick={handleOrder} disabled={isLoading}>PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CheckoutSection;