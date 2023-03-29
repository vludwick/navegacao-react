/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Menu from "../components/layout/Menu"
import Content from "../components/layout/Content"

import { BrowserRouter } from  'react-router-dom'

import "./App.css";

export default (props) => {
  return <div className="app">
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
    </div>;
};
