import React, { useState } from "react";
import { Justify, Bag } from "react-bootstrap-icons";
import MainMenu from "./Header_Small_Comp/MainMenu";
import SubList from "./Header_Small_Comp/SubList";
import Cart from "./Header_Small_Comp/Cart";

export default function Header() {
  const [mainMenu, setMainMenu] = useState("none");
  const [cartToggle, setCartToggle] = useState("none");

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="p-3">
            <Justify size={26} onClick={() => setMainMenu("block")} />
          </div>
          <span style={{ fontSize: "25px", fontWeight: "bold" }}>Lunatik</span>
          <div className="p-3" onClick={() => setCartToggle("block")}>
            <Bag size={26} />
          </div>
        </div>
      </div>
      <MainMenu mainMenu={mainMenu} setMainMenu={setMainMenu} />
      <Cart cartToggle={cartToggle} setCartToggle={setCartToggle} />
      {/* <SubList /> */}
    </div>
  );
}
