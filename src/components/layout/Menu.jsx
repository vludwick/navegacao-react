/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { Link } from "react-router-dom"

import "./Menu.css";

export default (props) => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/param/1">Param #01</Link></li>
          <li><Link to="/param/2">Param #02</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/naoExiste">Não Existe</Link></li>
        </ul>
      </nav>
    </aside>
  );
};
