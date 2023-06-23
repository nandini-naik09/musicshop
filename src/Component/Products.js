import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../Data/ProductSlice";
import cartSlice from "../Data/cartslice";
import "@blueprintjs/core/lib/css/blueprint.css";
import { Button } from "@blueprintjs/core";
// import "./product.css";
import "../index.css";

export default function Products() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { cart, products } = state;
  const { addToCart, removeFromCart } = cartSlice.actions;
  let proditems = products.data;

  useEffect(() => {
    dispatch(fetchAllProducts("http://localhost:3005/Instruments"));
  }, [dispatch]);

  return (
    <div>
      <center>
        <h1>Products</h1>

        <hr />
      </center>
      {proditems.map((item, i) => (
        <div key={item.id} className="card MusicItem">
          <img src={item.img} class="card-img-top item-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Rs.{item.price}</p>
            {!cart.cartProductIds.includes(item.id) && (
              <Button
                className="btn btn-primary"
                type="submit"
                onClick={() => dispatch(addToCart(item.id))}
              >
                Add to Cart
              </Button>
            )}
            {cart.cartProductIds.includes(item.id) && (
              <Button
                className="btn btn-secondary"
                type="submit"
                onClick={() => dispatch(removeFromCart(item.id))}
                icon="trash"
              >
                Remove from Cart
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
