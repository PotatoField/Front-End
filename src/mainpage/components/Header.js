import React from 'react';
import '../front_main.css';
import { FaSearch, FaUser, FaBookmark, FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header className="top_banner">
                쇼핑몰 새로운 소식~~~~
            </header>
            <header className="box">
                <button className="logo-button" onClick={() => { /* 필요한 동작 */
                }}>
                    <p className="logo">로고</p>
                </button>
                <nav className="menu-container">
                    <ul className="menu">
                        <li>
                            <a href="#gender">Gender</a>
                            <ul className="submenu">
                                <li><a href="#men">Men</a></li>
                                <li><a href="#women">Women</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#place">Place</a>
                            <ul className="submenu">
                                <li><a href="#date">와글와글</a></li>
                                <li><a href="#campus">붕어방</a></li>
                                <li><a href="#vacation">미래관</a></li>
                                <li><a href="#office">다빈치관</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#info">Info</a>
                            <ul className="submenu">
                                <li><a href="#q&a">Q&A</a></li>
                                <li><a href="#review">Review</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="icons">
                        <a href="#search"><FaSearch className="icon"/></a>
                        <a href="#profile"><FaUser className="icon"/></a>
                        <a href="#wishlist"><FaBookmark className="icon"/></a>
                        <a href="#cart"><FaShoppingCart className="icon"/></a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;