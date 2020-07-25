import React, { useState, useRef } from "react";
import {
  X,
  Truck,
  ArrowRepeat,
  CashStack,
  PatchQuestion,
  Person,
  PersonPlus,
} from "react-bootstrap-icons";
import BigItem from "./BigItem";
import SubList from "./SubList";
import MenuCloseBtn from "./MenuCloseBtn";

export default function MainMenu({ mainMenu, setMainMenu }) {
  return (
    <div
      className="fixed-top overflow-auto bg-white p-3"
      style={{ height: "100vh", display: mainMenu }}
    >
      <div className="d-flex flex-column">
        <div className="d-flex flex-row justify-content-between align-items-center fixed-top bg-white border-bottom pb-2 pt-2">
          <div></div>
          <div className="pl-5">
            <span>Menu</span>
          </div>
          <MenuCloseBtn setMainMenu={setMainMenu} />
        </div>
        <div className="d-flex flex-column pt-3 mt-5">
          <SubList title={"Odjeca"} setMainMenu={setMainMenu} />
        </div>
        <div className="d-flex flex-column pt-3">
          <div className="d-flex flex-column p-3 bg-white border rounded">
            <div className="pb-2 mb-2 border-bottom d-flex flex-row align-items-center">
              <Person size={25} className="ml-3" />
              <span className="ml-3 font-wight-bold">Prijavi se</span>
            </div>
            <div className="d-flex flex-row align-items-center">
              <PersonPlus size={25} className="ml-3" />
              <span className="ml-3 font-wight-bold">Registracija</span>
            </div>
          </div>
          <div className="d-flex flex-column p-3 bg-white border rounded mt-3">
            <div className="pb-2 mb-2 border-bottom d-flex flex-row align-items-center">
              <Truck size={25} className="ml-3" />
              <span className="ml-3 font-wight-bold">Dostava</span>
            </div>
            <div className="pb-2 mb-2 border-bottom d-flex flex-row align-items-center">
              <ArrowRepeat size={25} className="ml-3" />
              <span className="ml-3 font-wight-bold">Zamjena</span>
            </div>
            <div className="pb-2 mb-2 border-bottom d-flex flex-row align-items-center">
              <CashStack size={25} className="ml-3" />
              <span className="ml-3 font-wight-bold">Placanje</span>
            </div>
            <div className=" d-flex flex-row align-items-center">
              <PatchQuestion size={25} className="ml-3" />
              <span className="ml-3 font-wight-bold">
                Kako kupiti na web stranici
              </span>
            </div>
          </div>
          <div className="mt-3 d-flex flex-row">
            <div className="p-2">
              <img
                src="https://image.flaticon.com/icons/svg/145/145802.svg"
                alt="facebook-icon"
                style={{ width: "32px", height: "auto" }}
                className="mr-2"
              />
            </div>
            <div className="p-2">
              <img
                src="https://image.flaticon.com/icons/svg/2111/2111463.svg"
                alt="facebook-icon"
                style={{ width: "32px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
