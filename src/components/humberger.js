import '../sass/_header.scss';
import Logo from '../img/logo.png';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Humberger(){
    return(
        <div>
            <div class="humberger_menu_overlay"></div>
            <div class="humberger__menu__wrapper">
                <div class="humberger__menu__logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div class="humberger__menu__cart">
                    <ul>
                        <li> <FontAwesomeIcon icon={faHeart}/> </li>
                        <li> <FontAwesomeIcon icon={faShoppingBag}/></li>
                    </ul>
                    <div class="header__cart__price">item: <span>$150.00</span></div>
                </div>
            </div>
        </div>
    );
}

export default Humberger