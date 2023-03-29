/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import "./Menu.css";

export default (props) => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/sobre">Sobre</a></li>
        </ul>
      </nav>
    </aside>
  );
};
