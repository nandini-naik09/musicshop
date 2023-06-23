import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../index.css";

export default function Menu() {
  const { cartProductIds } = useSelector((state) => state.cart);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Music Store Portal
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item push" >
              <Link className="nav-link" to="/Cart" >
               Cart
                <sup className="badge">{cartProductIds.length}</sup>
              </Link>
            </li>
          </ul>
          {/* <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
