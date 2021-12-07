import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import { GrAddCircle, GrSubtractCircle } from "react-icons/gr";
export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  //const shippingPrice = itemsPrice > 20 ? 10 : 20;

  const url = "https://localhost:8888/api/Shipping/shippingcost/" + itemsPrice;
  const [shippingCost, setShippingCost] = useState(0);
  useEffect(() => {
    axios.get(url).then((response) => {
      setShippingCost(response.data);
    });
  }, [itemsPrice]);

  const totalPrice = itemsPrice + shippingCost;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div>
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div>
                <GrSubtractCircle
                  onClick={() => onRemove(item)}
                ></GrSubtractCircle>{" "}
                <GrAddCircle onClick={() => onAdd(item)}></GrAddCircle>
              </div>
              <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
            <hr />
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">${shippingCost.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-1 text-right">
                <Button onClick={() => alert("Implement Checkout!")}>
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
