import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AccountRegister from "./pages/AccountRegister";

export default function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<AccountRegister />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
