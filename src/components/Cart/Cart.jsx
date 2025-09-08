import React, {useContext} from 'react';
import styles from './Cart.module.scss';
import CartModal from './CartModal';
import CartContext from "../../context/cart-context.js";
import CartItem from "./CartItem.jsx";

// 상위 컴포넌트인 CartProvider가 관리하도록 옮김
// const DUMMY_CART = [
//     {
//         id: 'c1',
//         name: '스시',
//         amount: 2,
//         price: 46000,
//     },
//     {
//         id: 'c2',
//         name: '띠드버거',
//         amount: 1,
//         price: 12000,
//     },
// ];
const Cart = (/*{ onClose }*/) => {

    const { closeModal, cartItems } = useContext(CartContext);

    const {
        'cart-items': cartItemStyle,
        total,
        actions,
        'button--alt': btnAlt,
        button,
    } = styles;

    const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

    return (
        <CartModal onClose={/*onClose*/ closeModal}>
            {/* 주문 내역 */}
            <ul className={cartItemStyle}>
                {cartItems.map((cartItem) => (
                    // <li key={cartItem.id}>{cartItem.name}</li>
                    <CartItem key={cartItem.id} cart={cartItem} />
                ))}
            </ul>
            <div className={total}>
                <span>주문 총액</span>
                <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
                {/*<span>58,000원</span>*/}
            </div>
            <div className={actions}>
                <button className={btnAlt} onClick={/*onClose*/ closeModal}>닫기</button>
                <button className={button}>주문</button>
            </div>
        </CartModal>
    );
};

export default Cart;