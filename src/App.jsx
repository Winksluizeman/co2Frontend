import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AccountRegister from "./Pages/Account/AccountRegister.jsx";
import Login from "./Pages/Account/Login.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<AccountRegister />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
