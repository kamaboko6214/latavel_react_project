
import "../bootstrap";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import GroupIndex from "./Home/GroupIndex";
import Login from "./Auth/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<GroupIndex />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default Main;