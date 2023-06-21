import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../Data/cartslice";

import "./product.css";

const ProductList = (props) => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  console.log(cartProductIds);

  const renderList = ({ prodlist }) => {
    if (prodlist) {
      return prodlist.map((data) => {
        return (
          <div key={data.id} className="MusicItem">
            <div className="row">
              <div>
                <img className="item-img-top" src={data.img} alt={data.name} />
              </div>
              <hr />
            </div>
            <div className="item-body">
              <p> {data.name}</p>
              <p>Rs. {data.price}</p>
              {!cartProductIds.includes(data.id) && (
                <button
                  type="submit"
                  onClick={() => dispatch(addToCart(data.id))}
                >
                  Add to Cart
                </button>
              )}
              {cartProductIds.includes(data.id) && (
                <button
                  type="submit"
                  onClick={() => dispatch(removeFromCart(data.id))}
                >
                  Remove from Cart
                </button>
              )}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <div className="row">{renderList(props)}</div>
    </div>
  );
};

export default ProductList;
