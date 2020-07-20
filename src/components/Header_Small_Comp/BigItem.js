import React from "react";

export default function BigItem({ title }) {
  return (
    <div className="d-flex flex-row align-items-center p-3 border mb-2">
      <img
        src="http://placehold.it/200x200"
        alt="img"
        style={{
          width: "70px",
          height: "70px",
          objectFit: "cover",
          borderRadius: "100%",
        }}
      />
      <span className="ml-3 font-weight-bold fz-1">{title}</span>
    </div>
  );
}
