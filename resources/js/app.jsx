
import "./bootstrap";

import ReactDOM from "react-dom/client";
import Example from "./components/Example";
import Header from "./components/Header";

function App() {
    return (
        <div>
            <Header />
            <h1 className="mb-10 text-gray-500">Hello World</h1>
            <h1 className="text-gray-500">test</h1>
            <Example />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);