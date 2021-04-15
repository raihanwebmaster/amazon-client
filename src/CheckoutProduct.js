import React, { forwardRef, useEffect } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();
    useEffect(() => {
      localStorage.setItem("basket",JSON.stringify(basket));
    },[basket])
    const removeFomeBasket = () => {
      // remove the item from the basket
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };
    return (
      <div ref={ref} key={id} className="checkoutproduct">
        <img className="checkoutproduct__image" src={image} alt="" />
        <div className="checkoutproduct__info">
          <p className="checkoutproduct__title">{title}</p>
          <p className="checkoutproduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutproduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={() => removeFomeBasket(id)}>
              Remove from Basket
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
