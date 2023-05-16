import "./bootstrap";
import ReactDOM from "react-dom/client";
import { createContext } from 'react'
import RouterMain from "./components/RouterMain"

export const AuthContext = createContext();

function App() {
    return (
        <RouterMain />
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);