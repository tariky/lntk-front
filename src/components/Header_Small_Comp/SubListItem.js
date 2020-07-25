import React from "react";
import { ChevronRight } from "react-bootstrap-icons";

export default function SubListItem({ haveChild, toggle, setToggle, title }) {
  if (haveChild) {
    return (
      <div
        className="d-flex flex-row p-2 border align-items-center mb-2 justify-content-between"
        onClick={() => setToggle(!toggle)}
      >
        <div>
          <img
            alt="menu-item"
            src="http://placehold.it/200x200"
            className="rounded-circle"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
          <span className="ml-4 font-weight-bold">{title}</span>
        </div>
        <ChevronRight className="mr-2" />
      </div>
    );
  }
  return (
    <div className="d-flex flex-row p-2 border align-items-center mb-2 justify-content-between">
      <div>
        <img
          alt="menu-item"
          src="http://placehold.it/200x200"
          className="rounded-circle"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <span className="ml-4 font-weight-bold">{title}</span>
      </div>
    </div>
  );
}
