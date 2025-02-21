import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <img src="icon.png" alt="JvThunder" className="logo" />
                    JvBlogs
                </Link>
            </div>
        </header>
    );
}

export default Header;