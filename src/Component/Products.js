import ProductList from "./ProductListing";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [StoreProducts, setStoreProducts] = useState([]);

  useEffect(() => {
    getDataFromAPI();
  }, []);

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
  console.log(StoreProducts);
  return (
    <div>
      <center>
        <h3>{Products}</h3>{" "}
      </center>
      <ProductList prodlist={StoreProducts} />
    </div>
  );
}
