import React, {useContext} from 'react';
import Cart from '../Cart/Cart.jsx';
import Header from './Header.jsx';
import Meals from '../Meals/Meals.jsx';
import CartContext from '../../context/cart-context.js';

const MainCart = () => {

    const {cartIsShown} = useContext(CartContext);

    // 소비자(Consumer) 컴포넌트를 따로 만들어서 Provider 내부에서 함께 사용하는 방식
    return (
        <>
            {cartIsShown && <Cart />}
            <Header />
            <div id="main">
                <Meals />
            </div>
        </>
    );
};

export default MainCart;