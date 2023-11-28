import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ShoppingCart from './shopping-cart';
import Contact from './contact';
import CheckOut from './check_out';
import Login from './components/login';
import Register from './components/register';
import Profile from './profile';
import Admin from './Admin';
import Error from './components/Error';
import './css/style.css';
import './css/slicknav.min.css';
import './css/elegant-icons.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import ShopDetails from './shop_details';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='Home' element={<Home/>}/>
                <Route path='Shop' element={<Shop/>}/>
                <Route path='shop-details' element={<ShopDetails/>}/>
                <Route path='shopping-cart' element={<ShoppingCart/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='check-out' element={<CheckOut/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='admin' element={<Admin/>}/>
                <Route path='admin/Dashboard' element={<Admin/>}/>
                <Route path='admin/Registrations' element={<Admin/>}/>
                <Route path='admin/Add-User' element={<Admin/>}/>
                <Route path='admin/Categories' element={<Admin/>}/>
                <Route path='admin/Add-Category' element={<Admin/>}/>
                <Route path='admin/Products' element={<Admin/>}/>
                <Route path='admin/Add-Product' element={<Admin/>}/>
                <Route path='/*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
