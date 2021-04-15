import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import FlipMove from 'react-flip-move';
import { Link } from "react-router-dom";

function Checkout() {
    const [{basket, user},dispatch]= useStateValue();
    const emptyBasket = () => {
      return (
        <div className="emptyBasket">
          <img
            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
            alt="Empty Cart"
          />
          <div className="emptyBasket__container">
            <p>Your Amazon Cart is empty</p>
            <Link to="/">
              <button className="emptyBasketBtn">Add some items</button>
            </Link>
          </div>
        </div>
      );
    };
  return (
    <div className="Checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {/* <h3> Hello, {user.email}</h3> */}
        <h3> Hello, {user?.email}</h3>
        <h2 className="checkout__title">Your Shopping Basket</h2>
        {basket.length === 0 && emptyBasket()}
        <FlipMove>
        {
                basket.map((item,index) =>(
                <CheckoutProduct 
                key={Date.now()+index}
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}
                ></CheckoutProduct>))
              }
              </FlipMove>
      </div>
      <div className="Checkout__right">
          <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
