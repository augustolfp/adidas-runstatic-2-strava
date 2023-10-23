import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import CodeReceiver from "./Pages/CodeReceiver";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/code" element={<CodeReceiver />} />
            </Routes>
        </Router>
    );
}

export default App;
