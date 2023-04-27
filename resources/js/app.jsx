
import "./bootstrap";
import ReactDOM from "react-dom/client";
import "./bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import { CookiesProvider } from 'react-cookie';

function App() {
    const [user, setuser] = useState('')

    useEffect(() => {
        getUser()
    },[])
    
    const getUser = () => {        
        axios.get('/api/user').then(response => {
            if(response.status == 200) {
                const newuser = response.data
                setuser(newuser)
                console.log(newuser)
            } else {
                console.log('dame')
                navi()
            }
        });
    }

    return (
        <BrowserRouter>
            <CookiesProvider>
                <div>
                    <Header/>
                    <Main user={user}/>
                    <Footer />
                </div>
            </CookiesProvider>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);