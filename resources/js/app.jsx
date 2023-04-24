
import "./bootstrap";
import ReactDOM from "react-dom/client";
import "./bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";

function App() {
    const [user, setuser] = useState('')

    useEffect(() => {
        usercheck()
    }, [])

    const usercheck = () => {
        axios.get('api/user').then((response) => {
            setuser(response.data.name)
        })
    }

    return (
        <BrowserRouter>
            <div>
                <Header user={user}/>
                <Main user={user}/>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);