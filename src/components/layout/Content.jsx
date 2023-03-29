/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";

import "./Content.css";

export default (props) => {
    return <main className="content">
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
}