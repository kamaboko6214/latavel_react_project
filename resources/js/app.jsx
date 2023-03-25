
import "./bootstrap";
import ReactDOM from "react-dom/client";
import Example from "./components/Example";
import Header from "./components/Header";
import GroupIndex from "./components/GroupIndex";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<GroupIndex />}/>
                    <Route path="#" />
                    <Route path="#" />
                    <Route path="#" />
                    <Route path="#" />
                </Routes>

            </div>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);