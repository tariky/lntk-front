import React, { useState } from "react";
import { X } from "react-bootstrap-icons";

export default function Cart({ cartToggle, setCartToggle }) {
  return (
    <div
      className="fixed-top overflow-auto bg-white p-3"
      style={{ height: "100vh", display: cartToggle }}
    >
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between align-items-center fixed-top bg-white border-bottom pb-2 pt-2">
          <div></div>
          <div className="pl-5">
            <span>Kosarica</span>
          </div>
          <div className="p-2 mr-2" onClick={() => setCartToggle("none")}>
            <X size={26} />
          </div>
        </div>
        <div className="d-flex flex-column mt-5 pt-3">
          <div className="d-flex flex-row align-items-center pb-2 border-bottom">
            <img
              src="http://placehold.it/200x300"
              alt="product"
              style={{ width: "80px", height: "110px", objectFit: "cover" }}
            />
            <div className="d-flex flex-column ml-3">
                <span className="font-weight-bold mb-1">Product title</span>
                <span>15.95KM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
