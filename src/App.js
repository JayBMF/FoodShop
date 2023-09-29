import Humberger from './components/humberger';
import './sass/style.scss';
import Header from './components/header';
import Hero from './components/hero';
import Featured from './components/featured';
import Categories from './components/categories';
import Lastest_Product from './components/lastest_product';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
  return (
    <div>
      <Humberger/>
      <Header/>
      <Hero/>
      <Featured/>
      <Lastest_Product/>
      <Footer/>
    </div>
  );
}

export default App;
