import React from 'react';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
import 'https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap';

console.log('Header component loaded');
const Header=()=>{
    return(
        <>
            <header className="top_banner">
                쇼핑몰 새로운 소식
            </header>
            <header className="box">
                <a href="#">
                    <img src={`${process.env.PUBLIC_URL}/images/mainlogo.png`} alt="potato" width="90px" className="logo"/>
                </a>
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
                        <a href="#search"><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a href="#profile"><i className="fa-solid fa-user"></i></a>
                        <a href="#wishlist"><i className="fa-solid fa-bookmark"></i></a>
                        <a href="#cart"><i className="fa-solid fa-shopping-cart"></i></a>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;