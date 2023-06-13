
import "../bootstrap";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import GroupIndex from "./Home/GroupIndex";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Menu from "./Auth/Menu";
import { createContext, useContext, useEffect, useState } from "react";
import Mypage from "./Mypage";
import Notfound from "./Notfound/Notfound";
import axios from "axios";

export const AuthContext = createContext();

const RouterMain = () => {
    useEffect(() => {
        loggedinCheck()
        }
    )

    const [isAuth, setIsAuth] = useState(false);

    const loggedinCheck = async () => {
        await axios.get("/sanctum/csrf-cookie").then(() => {
             axios.get('/api/user')
            .then((res) => {
                if(res){
                    setIsAuth(true)
                } else {
                    setIsAuth(false);
                }
            })
        })
    }

    const value = {
        isAuth, setIsAuth
    }
    const privateRoute = (    
        <Routes>
            <Route path="/" element={<GroupIndex />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Top" element={<GroupIndex />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/*" element={<Notfound />} />
        </Routes>
    )

    const guestRoute = (
    <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Notfound />} />
    </Routes>
    )

    return (
        <AuthContext.Provider value={value} >
            <BrowserRouter>
                <div>
                    <Header />
                        <div className="flex flex-col min-h-screen">
                            {isAuth ? privateRoute : guestRoute}
                        </div>
                    <Footer />
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default RouterMain;