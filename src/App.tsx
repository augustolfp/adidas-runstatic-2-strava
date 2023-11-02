import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Dashboard from "./Pages/Dashboard";
import CodeReceiver from "./Pages/CodeReceiver";
import Footer from "./Components/Footer";
import Instructions from "./Pages/Instructions";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
    return (
        <Router>
            <AppProvider>
                <Navbar />
                <Routes>
                    <Route path="/upload-tool" element={<Dashboard />} />
                    <Route path="/instructions" element={<Instructions />} />
                    <Route path="/code" element={<CodeReceiver />} />
                </Routes>
                <Footer />
            </AppProvider>
        </Router>
    );
}

export default App;
