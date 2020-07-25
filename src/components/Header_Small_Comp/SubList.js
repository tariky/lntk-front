import React, { useState } from "react";
import { X, ChevronLeft } from "react-bootstrap-icons";
import SubListItem from "./SubListItem";
import BigItem from "./BigItem";
import SubSubList from "./SubSubList";

export default function SubList({ title, setMainMenu }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <BigItem title={title} setToggle={setToggle} toggle={toggle} />
      <div
        className="fixed-top overflow-auto bg-white p-3"
        style={{
          height: "100vh",
          display: toggle ? "block" : "none",
        }}
      >
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between align-items-center fixed-top bg-white border-bottom pb-2 pt-2">
            <button
              className="btn btn-default"
              onClick={() => setToggle(!toggle)}
            >
              <ChevronLeft style={{ fontSize: "26px" }} />
            </button>
            <div>
              <span>Odjeca</span>
            </div>
            <button
              className="btn btn-default"
              onClick={() => {
                setMainMenu("none");
                setToggle(!toggle);
              }}
            >
              <X style={{ fontSize: "26px" }} />
            </button>
          </div>
          <div className="d-flex flex-column mt-5 pt-3">
            <SubListItem title={"Majice"} />
            <SubSubList setMainMenu={setMainMenu} title={"School stuff"} />
          </div>
        </div>
      </div>
    </>
  );
}
