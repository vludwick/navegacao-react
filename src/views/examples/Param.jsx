/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import { useParams } from "react-router-dom"

export default (props) => {
const { id } = useParams()
  return (
    <div>
      <h1>Param</h1>
      <h2>Valor: {id}!</h2>
    </div>
  );
};
