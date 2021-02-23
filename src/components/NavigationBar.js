import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const NavigationBar = () => {
    return(
        <div className="navbar">
            <Link to="/home" className="space">Home</Link>
            <Link to="/about" className="space">About</Link>
            <Link to="/faq" className="space">F.A.Q</Link>
            <Link to="/store" className="space">Store</Link>
        </div>
    );
}

export default NavigationBar;