import React from "react";

import "./product.css";

const ProductList = (props) => {
  const renderList = ({ prodlist }) => {
    if (prodlist) {
      return prodlist.map((data) => {
        return (
          <div key={data.id} className="MusicItem">
            <div class="row">
              <div>
                <img class="item-img-top" src={data.img} alt={data.name} />
              </div>
              <hr />
            </div>
            <div class="item-body">
              <h4 class="topTemp"> {data.name}</h4>
              <h6>{data.type}</h6>
              <p class="price-buy">Rs. {data.price}</p>
            </div>
          </div>
        );
      });
    }
  };
  return (
    <div className="container">
      <div className="row">{renderList(props)}</div>
    </div>
  );
};

export default ProductList;
