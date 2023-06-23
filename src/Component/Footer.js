import React from 'react'

import cartSlice from "../Data/cartslice";
import {  useDispatch } from "react-redux";
import "./cart.css";

export default function Footer() {

    
  const dispatch = useDispatch();
  const {  clearAllItems } = cartSlice.actions;

  return (
    <div class="text-center">
       <button
              className="btn btn-success checkbtn"
              onClick={() => dispatch(clearAllItems())}
            >
              CHECKOUT
            </button>
      
    </div>
  )
}