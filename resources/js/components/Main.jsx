
import "../bootstrap";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import GroupIndex from "./Home/GroupIndex";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Menu from "./Auth/Menu";
import { useEffect, useState } from "react";
import Mypage from "./Mypage";

const Main = (props) => {
    const user = props.user;
    const navigate = useNavigate();
    const navi = () => {
        navigate('/');
    }
    let isrouter = (
        <>
            <Route path="/" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </>
    );

    if (user) {
        isrouter = (
            <>
                <Route path="/" element={<Menu />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Top" element={<GroupIndex />} />
                <Route path="/Mypage" element={<Mypage />} />
            </>
        )
    } else {
       navi()
    }

    return (
        <Routes>
            {isrouter}
        </Routes>
    );
}

export default Main;