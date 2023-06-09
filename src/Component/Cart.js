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
        <div className=" empty-cart">
          <center>
            <div>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m15.3 5.01046h-4.5l-1.3-2.89664c-.1-.29965-.5-.19976-.6 0l-.3288.87589a.62521.62521 0 0 0 .0177.48193l.7111 1.53882h-2.4l1.8-3.99536c.1025-.2081.1309-.3461-.0562-.53298a2.75149 2.75149 0 0 0 -.6438-.43729c-.3-.09983-.5-.02857-.6.17117l-2.1 4.79446h-4.5a.78826.78826 0 0 0 -.8.79907v.19976a.7883.7883 0 0 0 .8.79907h.2l1.3 6.69222a.5598.5598 0 0 0 .6.49942h10.2a.5598.5598 0 0 0 .6-.49942l1.3-6.69222h.2a.78826.78826 0 0 0 .8-.79907v-.19976a.75882.75882 0 0 0 -.7-.79907m-9.9 6.69221a.47211.47211 0 0 1 -.5.49942.47211.47211 0 0 1 -.5-.49942v-3.0964a.47211.47211 0 0 1 .5-.49942.47211.47211 0 0 1 .5.49942zm3.2 0a.5.5 0 0 1 -1 0v-3.0964a.5.5 0 0 1 1 0zm3.2 0a.5.5 0 0 1 -1 0v-3.0964a.5.5 0 0 1 1 0z"/></svg>
            </div>
            <p>Your Cart is Empty.</p>
            <p>You have not added any item to your cart.</p>
          </center>
        </div>
      )}
    </div>
  );
}
