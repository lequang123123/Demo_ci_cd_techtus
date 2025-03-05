// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Trang chủ CI CD </h1>
            <Link to="/about">Đi đến About</Link>
        </div>
    );
};

export default Home;
