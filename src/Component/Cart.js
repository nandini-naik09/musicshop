import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../Data/cartslice";
import { fetchAllProducts } from "../Data/ProductSlice";
import "./cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const { removeFromCart, clearAllItems } = cartSlice.actions;
  const state = useSelector((state) => state);
  const { cart, products } = state;

  useEffect(() => {
    dispatch(fetchAllProducts("http://localhost:3005/Instruments"));
  }, [dispatch]);

  const cartProductData = products.data?.filter((product) =>
    cart.cartProductIds.includes(product.id)
  );

  return (
    <div>
      <div>
        <h3>Cart Items</h3>
        {cartProductData.length > 0 && (
          <div>
            {cartProductData.map((product, i) => (
              <div key={product.id} className="MusicItemCart">
                <div className="row">
                  <div>
                    <img
                      className="item-img-top"
                      src={product.img}
                      alt={product.name}
                    />
                  </div>
                  <hr />
                </div>
                <div className="item-body">
                  <p> {product.name}</p>
                  <button
                    className="btn btn-secondary"
                    type="submit"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    <i className="bi bi-trash-fill" />
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
            <br /> <br />
            <br /> <br />
            <div>
              <footer className="text-center">
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(clearAllItems())}
                >
                  CHECKOUT
                </button>
              </footer>
            </div>
          </div>
        )}
      </div>

      {cartProductData.length < 1 && (
        <div className="text-center empty-cart">
          <center>
            <br />
            <p>Your Cart is Empty.</p>
            <p>You have not added any item to your cart.</p>,
          </center>
        </div>
      )}
    </div>
  );
}
