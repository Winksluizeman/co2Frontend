import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AccountRegister from "./Pages/Account/AccountRegister.jsx";
import Login from "./Pages/Account/Login.jsx";
import DashboardMenu from "./Pages/Dashboard/DashboardMenu.jsx";
import Navbar from "./Pages/Navbar.jsx"; // Zorg dat dit pad klopt

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<AccountRegister />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/DashboardMenu" element={<DashboardMenu />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
