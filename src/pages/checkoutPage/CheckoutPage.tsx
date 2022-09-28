import React from 'react';
import Header from '../../components/header/Header';
import CardProduct from '../../components/products/cardProduct/CardProduct';
import { products } from '../../products';
import './checkoutPage.scss';
import { Link } from "react-router-dom";
import { useAppSelector } from '../../redux/store/store';

function CheckoutPage() {
  const subProduct = useAppSelector(state=>state.products.products)
  const sumPrice = useAppSelector(state=>state.products.total)
  return (
    <div className="checkout">
      <Header />
      <div className="checkout-container">
        <div className="checkout-left">
          <img
            className="checkout-ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div className='checkout-desc'>
            <h3>Hello, </h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>
                {subProduct.map((item)=>(
                            <CardProduct
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                                rating={item.rating}
                            />
                ))}
              
          </div>
        </div>
        <div className="checkout-right">
          <div className="checkout-total">
            <p>
              Subtotal ({subProduct.length} items):<strong>${sumPrice.toFixed(2)}</strong>
            </p>
            <small className="checkout-gift">
              <input type="checkbox" />
              <p>This order contains a gift</p>
            </small>
           <Link to='/payment'><button>Proceed to Checkout</button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
