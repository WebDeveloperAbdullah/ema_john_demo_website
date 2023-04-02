import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
     console.log(props);
     const{category,img,name,price,quantity,ratings,ratingsCount,seller,shipping,stock,}=props.product;
     const handleAddToCart=props.handleAddToCart;

     return (
          <div className='product'>
              <img src={img} alt="" srcset="" />
              <i className='product_category'>Category :{category}</i>
               <h5 className='product_name'>Product Name: {name}</h5>
               <h5 className='product_price'> Price:${price}</h5>
               <h6 className='product_seller'>Manufacturer:{seller}</h6>
               <h6 className='product_rating'>Rating:{ratings}</h6>
               <h6 className='product_rating'>Total Rating:{ratingsCount}</h6>
               <button onClick={()=>handleAddToCart(props.product)} className='btn_cart'>
                    Add To Cart
                     <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
          </div>
     );
};

export default Product;