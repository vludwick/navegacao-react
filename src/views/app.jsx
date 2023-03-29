/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Menu from "../components/layout/Menu"
import Content from "../components/layout/Content"

import "./App.css";

export default (props) => {
  return <div className="app">
    <Menu />
    <Content />
    </div>;
};
