import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSubtract } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const CartDrawer = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <div className="cart-page">
        <div
          className={` ${
            cartData.showCart
              ? `cart-overlay-show`
              : show
              ? `cart-overlay-hide`
              : "cart-overlay-hide-fast"
          }`}
          onClick={() => dispatch(cartActions.ToggelCart())}
        />
        <div
          className={`cart-drawer ${
            cartData.showCart
              ? ` cart-drawer-show`
              : show
              ? ` cart-drawer-hide`
              : "cart-drawer-hide-fast"
          }`}
        >
          {cartData.products.map((p) => {
            if (p.quntity > 0) {
              return (
                <div key={p.id} className="product">
                  <img src={p.img} />
                  <div className="product-details">
                    <h1>{p.Title}</h1>
                    <h3>Author: {p.Author}</h3>
                    <p>Price: {p.price}$</p>
                    <div className="actions">
                      <FontAwesomeIcon
                        icon={faAdd}
                        color="rgb(32, 117, 3)"
                        onClick={() => dispatch(cartActions.AddProduct(p.id))}
                      />
                      <p>{p.quntity}</p>
                      <FontAwesomeIcon
                        icon={faSubtract}
                        color="rgb(177, 3, 3)"
                        onClick={() => dispatch(cartActions.SubProduct(p.id))}
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <h1>Total Price: {cartData.totalPrice}$</h1>
          <button>CheckOut</button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
