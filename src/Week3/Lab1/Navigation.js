import React from "react";
import {Route, Routes, Link} from "react-router-dom";
import Homepage from "./Homepage";
import Contact from "./Contact";
import AboutLittleLemon from "./AboutLittleLemon";


function Navigation () {

    return(
        <div>
            <nav>
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/about" className="nav-item">About Little Lemon</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/about" element={<AboutLittleLemon />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
    )
}

export default Navigation;