import React, { Component } from 'react';

import Dashboard from '../../Pages/Dashboard';
import AboutUs from '../../Pages/AboutUs'
import './style.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


export default function index() {
    return (
        <Router className='Header'>
            <Link to='/'>Dashboard</Link> <br />
            <Link to='/aboutus'>About</Link>
            <Routes>
                <Route exact path="/" element={<Dashboard />}>
                </Route>
                <Route exact path="/aboutus" element={<AboutUs />} >
                </Route>
            </Routes>
        </Router>
    )
}
