import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PrivateRoute from "./routes/PrivateRoute";
import Home from "./routes/Home";
import UpdatePassword from "./routes/accounts/UpdatePassword";
import Register from "./routes/accounts/register";
import Navbar from "./components/Navbar";
import Template from "./routes/template";
import Profile from './routes/accounts/profile';
import Conversations from './routes/Conversations';
import UpdateBackground from './routes/accounts/UpdateBackground';
import UpdatePicture from './routes/accounts/UpdatePicture';


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
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/conversations" element={<Conversations />} />
                                <Route path="/template" element={<Template />} />
                            </Routes>
                        } />} />
                        {/* Paths here do not require login */}
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/updatepassword" element={<UpdatePassword />} />
                        <Route path="/updatepicture" element={<UpdatePicture />} />
                        <Route path="/updatebackground" element={<UpdateBackground />} />

                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
