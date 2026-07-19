import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import Loans from "./pages/Loans";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/books" element={<Books />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/loans" element={<Loans />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;