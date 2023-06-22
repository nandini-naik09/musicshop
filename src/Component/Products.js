import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../Data/ProductSlice";
import cartSlice from "../Data/cartslice";
import "./product.css";

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
      <h3>Products</h3>
      {proditems.map((item, i) => (
        <div key={item.id} className="MusicItem">
          <div className="row">
            <div>
              <img className="item-img-top" src={item.img} alt={item.name} />
            </div>
            <hr />
          </div>

          <div className="item-body">
            <p> {item.name}</p>
            <p>Rs. {item.price}</p>
            {!cart.cartProductIds.includes(item.id) && (
              <button className="btn btn-primary"
                type="submit"
                onClick={() => dispatch(addToCart(item.id))}
              >
                Add to Cart
              </button>
            )}
            {cart.cartProductIds.includes(item.id) && (
              <button className="btn btn-secondary"
                type="submit"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove from Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
