import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket);

  // if(basket.length==0){
  //   document.getElementById('disable').
  // }
  return (
    <div className="Subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            {basket.length && user ? (
              <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
            ) :"" }
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandsSeparated={true}
        prefix={"$"}
      />
      <button
        disabled={basket.length < 1 || !user}
        onClick={(e) => history.push("/payment")}
      >
        Proceed to checkout
      </button>
      <div className='condition'>{basket.length && user ? "" : "Sign Up /Sign In first"}</div>
    </div>
  );
}

export default Subtotal;
