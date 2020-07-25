import React, { useState } from "react";
import { X, ChevronLeft } from "react-bootstrap-icons";
import SubListItem from "./SubListItem";
import BigItem from "./BigItem";

export default function SubSubList({ title, setMainMenu }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <SubListItem title={title} toggle={toggle} setToggle={setToggle} haveChild={true} />
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
              <span>{title}</span>
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
            <SubListItem title={"Pernice"} />
            <SubListItem title={"Olovke"} />
          </div>
        </div>
      </div>
    </>
  );
}
