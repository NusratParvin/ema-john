import React from 'react';
import './Cart.css'

const Cart = (props) => {
const {cart }= props;
    let total = 0 ;
    let totalShipping = 0 ;
    let tax = 0 ;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping
        tax = total * 0.07;
    }
    console.log(total , totalShipping , tax);

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Selected Items: {cart.name}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h6>Grand total: {(total + totalShipping + tax).toFixed(2)}</h6>
        </div>
    );
};

export default Cart;