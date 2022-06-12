import React from "react";
import logo from "./hogwarts.png";
import "./styles/Header.css";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import GroupIcon from "@mui/icons-material/Group";
import ListIcon from "@mui/icons-material/List";
import HelpIcon from "@mui/icons-material/Help";

function Header({ tabActive, setTabActive }) {
  return (
    <div className="Header">
      <div className="Header_left">
        <img src={logo} className="App-logo" id="icon_hogwart" alt="logo" />
      </div>
      <div className="Header_middle">
        <div className="header__option">
          <AutoFixHighIcon
            fontSize="large"
            className="magic_icon"
            onClick={(e) => {
              e.preventDefault();
              setTabActive(1);
            }}
          />
        </div>
        <div className="header__option">
          <GroupIcon
            fontSize="large"
            className="magic_icon"
            onClick={(e) => {
              e.preventDefault();
              setTabActive(2);
            }}
          />
        </div>
        <div className="header__option">
          <ListIcon
            fontSize="large"
            className="magic_icon"
            onClick={(e) => {
              e.preventDefault();
              setTabActive(3);
            }}
          />
        </div>
      </div>

      <div className="Header_right">
        <div className="header__option">
          <HelpIcon fontSize="large" className="magic_icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
