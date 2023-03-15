
import "./bootstrap";

import ReactDOM from "react-dom/client";
import Example from "./components/Example";
import Header from "./components/Header";
import GroupIndex from "./components/GroupIndex";

function App() {
    return (
        <div>
            <Header />
            <div class="content" className="bg-bg-content">
                <GroupIndex />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);