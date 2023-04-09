
import "../bootstrap";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import GroupIndex from "./Home/GroupIndex";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from "./Auth/Menu";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Top" element={<GroupIndex />} />
        </Routes>
    );
}

export default Main;