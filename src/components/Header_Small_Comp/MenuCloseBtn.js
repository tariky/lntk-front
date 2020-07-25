import React from "react";
import {
  X,
} from "react-bootstrap-icons";

export default function MenuCloseBtn({ setMainMenu }) {
  return (
    <button className="btn btn-default">
      <X style={{ fontSize: "26px" }} onClick={() => setMainMenu("none")} />
    </button>
  );
}
