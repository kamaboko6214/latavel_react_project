
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
import PrivateRoute from "./PrivateRoute";

const RouterMain = (props) => {
    const [user, setuser] = useState(props.user)
    const navigate = useNavigate();

    const navi = () => {
        navigate('/');
    }

    useEffect(() => {
        getUser()
    },[])
    
    const getUser = () => {        
        axios.get('/api/user').then(response => {
            if(response.status == 200) {
                const newuser = response.data

                setuser(newuser)
            } else {
                navi()
            }
        });
    }

    return (
        <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Top" element={<GroupIndex />} />
            <Route path="/Mypage" element={<Mypage />}  />
        </Routes>
    );
}

export default RouterMain;