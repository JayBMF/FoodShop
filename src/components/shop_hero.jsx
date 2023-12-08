import React, {useEffect, useState} from 'react';
import Banner from '../img/hero/banner.jpg';
import '../css/hero_setbg.css';
import 'font-awesome/css/font-awesome.min.css';
import listCategories from '../api/listCategories';

function ShopHero(){
    // Sử dụng useState để quản lý trạng thái của việc hiển thị/ẩn danh sách ul
    const [isListVisible, setListVisible] = useState(false);

    // Hàm xử lý khi người dùng click vào "hero__categories__all"
    const handleAllClick = () => {
        setListVisible(!isListVisible); // Đảo ngược trạng thái hiển thị danh sách
    }

    const [listCategory, setListCategory] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try {
            const response = await listCategories.get();
            setListCategory(response);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div>
            <section class="hero">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="hero__categories">
                                <div class="hero__categories__all" onClick={handleAllClick}>
                                    <i class="fa fa-bars"></i>
                                    <span>All departments</span>
                                </div>
                                {isListVisible &&(
                                    <ul className="hero__categories ul">
                                        {listCategory &&
                                         listCategory.map((item) => (
                                            <li key={item.id}><a>{item.name}</a></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="hero__search">
                                <div class="hero__search__form">
                                    <form action="#">
                                        <div class="hero__search__categories">
                                            All Categories
                                            <span class="arrow_carrot-down"></span>
                                        </div>
                                        <input type="text" placeholder="What do yo u need?"/>
                                        <button type="submit" class="site-btn">SEARCH</button>
                                    </form>
                                </div>
                                <div class="hero__search__phone">
                                    <div class="hero__search__phone__icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="hero__search__phone__text">
                                        <h5>+65 11.188.888</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ShopHero;