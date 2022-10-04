import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PrivateRoute from "./routes/PrivateRoute";
import Home from "./routes/Home";
import UpdatePassword from "./routes/accounts/UpdatePassword";
import Login from "./components/LoginForm";
import Register from "./routes/accounts/register";
import Navbar from "./components/Navbar";
import Template from "./routes/template";
import Profile from './routes/accounts/profile';
import Conversations from './routes/Conversations';

class App extends Component {
    render() {
        return (
            <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="*" element={<PrivateRoute component={
                            <Routes>
                                {/* Paths here require login */}
                                <Route path="/" element={<Home />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/conversations" element={<Conversations />} />
                                <Route path="/template" element={<Template />} />
                            </Routes>
                        } />} />
                        {/* Paths here do not require login */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/updatepassword" element={<UpdatePassword />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
