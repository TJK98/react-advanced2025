import React, {useContext} from 'react';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.scss';
import CartContext from "../../context/cart-context.js";

const HeaderCartButton = (/*onShow*/) => {

    const { openModal, cartItems } = useContext(CartContext);

    const { button, icon, badge } = styles;

    // 카트 배열에 있는 amount의 총합
    const numberOfCart = cartItems.reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <button className={button} onClick={/*onShow*/ openModal}>
      <span className={icon}>
        <CartIcon />
      </span>
            <span>My Cart</span>
            <span className={badge}>{numberOfCart}</span>
            {/*<span className={badge}>3</span>*/}
        </button>
    );
};

export default HeaderCartButton;