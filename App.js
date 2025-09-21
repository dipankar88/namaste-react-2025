import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import { BrowserRouter, createBrowserRouter, Route, Routes, RouterProvider } from "react-router";

const AppLayout = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <div className="content" style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Body />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
