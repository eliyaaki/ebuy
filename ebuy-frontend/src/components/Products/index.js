import React from "react";
import CartDrawer from "../Layout/TopBar/Cart/CartDrawer";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faSubtract } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import Filters from "./Filters";

const Products = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cartData.products);
  return (
    <div className="products">
      <CartDrawer />
      <Filters />
      <div className="products-container">
        {cartData.products.map((p) => {
          if (p) {
            return (
              <div key={p.id} className="product">
                <img src={p.img} />
                <div className="product-details">
                  <h1>{p.Title}</h1>
                  <h3>Author: {p.Author}</h3>
                  <p>Publication Date: {p.PublicationDate}</p>
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
      </div>
    </div>
  );
};

export default Products;
