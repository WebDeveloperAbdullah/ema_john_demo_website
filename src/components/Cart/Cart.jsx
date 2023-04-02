import React from 'react';
import './Cart.css';

const Cart = (props) => {
     //const cart=props.cart;
     const {cart}=props;
     let total=0;
     let totalShipping=0;
     for(const product of cart){
         total =total+ product.price;

         totalShipping= totalShipping+ product.shipping;

     }
     const tax=total*5/100;
     const grandTotal= total+totalShipping+tax;
     return (
          <div className='cart'>
                 <h2>Order Summary</h2>
                    <p>Selected Items:{cart.length}</p>
                    <p>Total Price: ${total}</p>
                    <p>Total Shipping:${totalShipping}</p>
                    <p>Total Tax:${tax}</p>
                    <h6>Grand Total:${grandTotal}</h6>
          </div>
     );
};

export default Cart;