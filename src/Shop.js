import Humberger from './components/humberger';
import './sass/style.scss';
import ShopHeader from './components/shop_header';
import ShopHero from './components/shop_hero';
import Footer from './components/footer';
import Breadcrumb from './components/breadcrumb';
import Product from './components/product';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function Shop(){
    return(
        <div>
            <Humberger/>
            <ShopHeader/>
            <ShopHero/>
            <Breadcrumb/>
            <Product/>
            <Footer/>
        </div>
    );
}

export default Shop;