
import "./bootstrap";
import ReactDOM from "react-dom/client";
import Example from "./components/Example";
import Header from "./components/Header";
import GroupIndex from "./components/GroupIndex";
import {BrowserRouter} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
        <div>
            <Header />
            <div class="content" className="bg-bg-content">
                <GroupIndex />
            </div>
        </div>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);