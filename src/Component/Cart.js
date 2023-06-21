import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../Data/cartslice";
import axios from "axios";

export default function Cart() {
  const [StoreProducts, setStoreProducts] = useState([]);
  const dispatch = useDispatch();
  const { removeFromCart } = cartSlice.actions;
  const { cartProductIds } = useSelector((state) => state.cart);

  useEffect(() => {
    getDataFromAPI();
  }, []);

  //method to get the users from API
  const getDataFromAPI = () => {
    axios
      .get("http://localhost:3005/Instruments")
      .then((result) => {
        if (result.status === 200) {
          setStoreProducts(result.data);
        }
      })
      .catch((error) => {
        console.log("rejected");
        console.log(error);
      });
  };

  const cartProductData = StoreProducts.filter((product) =>
    cartProductIds.includes(product.id)
  );

  return (
    <div>
      <div>
        {cartProductData.length > 0 &&
          cartProductData.map((product, i) => (
            <div key={product.id} className="MusicItem">
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
                  type="submit"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
      </div>

      {cartProductData.length<1 &&  (
        <div className="text-center empty-cart"> 
        <center>
          <br/>
        <p>Your Cart is Empty.</p>
        <p>You have not added any item to your cart.</p>,
       </center>
      </div>)}

    </div>
  );
}
