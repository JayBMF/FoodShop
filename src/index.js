import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
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
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
