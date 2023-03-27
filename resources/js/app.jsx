
import "./bootstrap";
import ReactDOM from "react-dom/client";
import Example from "./components/Example";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GroupIndex from "./components/GroupIndex";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                    <Routes>
                        <Route path="/" element={<GroupIndex />}/>
                        <Route path="/a" element={<Register />} />
                        <Route path="/b" element={<Login/>} />
                    </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);