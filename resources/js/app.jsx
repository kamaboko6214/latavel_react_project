import "./bootstrap";
import ReactDOM from "react-dom/client";
import "./bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import Menu from "./components/Auth/Menu";
import GroupIndex from "./components/Home/GroupIndex";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Mypage from "./components/Mypage";
import Notfound from "./components/Notfound/Notfound"
import { CookiesProvider } from 'react-cookie';
// import AuthProvider from './hooks/AuthContext';
import { createContext } from 'react'

export const AuthContext = createContext();

function App() {
    const queryClient = new QueryClient();
    const [user, setuser] = useState('')
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        getUser()
    }, [])

    const value = {
        isAuth, setIsAuth
    }

    const getUser = () => {
        axios.get('/api/user').then(response => {
            if (response.status == 200) {
                const newuser = response.data
                setuser(newuser)
            } else {
                console.log('dame')
                navi()
            }
        });
    }

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <CookiesProvider>
                    <AuthContext.Provider value={value} >
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
                    </AuthContext.Provider>
                </CookiesProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);