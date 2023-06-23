import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../Data/cartslice";
import { fetchAllProducts } from "../Data/ProductSlice";
import Footer from "./Footer";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Button } from "@blueprintjs/core";
import "./cart.css";


export default function Cart() {
  const dispatch = useDispatch();
  const { removeFromCart } = cartSlice.actions;
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
        <center>
          <h1>Cart Items</h1>
          <hr />
        </center>
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
                  <Button
                className="btn btn-secondary"
                type="submit"
                onClick={() => dispatch(removeFromCart(product.id))}
                icon="trash"
              >
                Remove from Cart
              </Button>
                </div>
              </div>
            ))}
            <br />
            <div>
              <Footer />
            </div>

            {/* <footer>
            <button
              className="btn btn-success checkbtn"
              onClick={() => dispatch(clearAllItems())}
            >
              CHECKOUT
            </button>
          </footer> */}
          </div>
        )}
        <div></div>
      </div>

      {cartProductData.length < 1 && (
        <div className="text-center empty-cart">
          <center>
            <br />
            <img src="https://github.com/nandini-naik09/musicshop/blob/master/src/Component/basket.SVG" alt="cart"/>
            <p>Your Cart is Empty.</p>
            <p>You have not added any item to your cart.</p>
          </center>
        </div>
      )}
    </div>
  );
}
