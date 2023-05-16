
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
import { QueryClient, QueryClientProvider } from 'react-query';
import Notfound from "./Notfound/Notfound";

export const AuthContext = createContext();

const RouterMain = () => {
    const queryClient = new QueryClient();
    const [isAuth, setIsAuth] = useState(false)
    const value = {
        isAuth, setIsAuth
    }
    
    return (
        <AuthContext.Provider value={value} >
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                        <div>
                            <Header />
                            <div className="flex flex-col min-h-screen">
                                <Routes>
                                    <Route path="/" element={<Menu />} />
                                    <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="/Top" element={<GroupIndex />} />
                                    <Route path="/Mypage" element={<Mypage />} />
                                    <Route path="/*" element={<Notfound />} />
                                </Routes>
                            </div>
                            <Footer />
                        </div>
                </BrowserRouter>
            </QueryClientProvider>
        </AuthContext.Provider>
    );
}

export default RouterMain;