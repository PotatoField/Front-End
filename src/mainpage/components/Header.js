/*
import React, {useState} from 'react';
import Main from '../main.module.css';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom';
import LoginModal from '../../account/login/LoginModal';

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
      <>
        <header>
          <div className={Main.top_banner}>
            쇼핑몰 새로운 소식~~~~
          </div>
          <div className={Main.box}>
            <button className={Main.logoButton} onClick={handleClick}>
              <p className={Main.logo}>로고</p>
            </button>
            <nav className={Main.menuContainer}>
              <ul className={Main.menu}>
                <li>
                  <a href="#gender">Gender</a>
                  <ul className={Main.submenu}>
                    <li><a href="#men">Men</a></li>
                    <li><a href="#women">Women</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#place">Place</a>
                  <ul className={Main.submenu}>
                    <li><a href="#date">와글와글</a></li>
                    <li><a href="#campus">붕어방</a></li>
                    <li><a href="#vacation">미래관</a></li>
                    <li><a href="#office">다빈치관</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#info">Info</a>
                  <ul className={Main.submenu}>
                    <li><a href="#q&a">Q&A</a></li>
                    <li><a href="#review">Review</a></li>
                  </ul>
                </li>
              </ul>
              <div className={Main.icons}>
                <Link to="/search"><FaSearch className={Main.icons}/></Link>
                <FaUser className={Main.icons} onClick={openModal}/>
                <Link to="/like"><FaHeart className={Main.icons}/></Link>
                <a href="#cart"><FaShoppingCart className={Main.icons}/></a>
              </div>
            </nav>
          </div>
        </header>
        <LoginModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </>
  );
};

export default Header;*/


import React, {useState} from 'react';
import Main from '../main.module.css';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom';
import LoginModal from '../../account/login/LoginModal';

const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
      <>
        <header>
          <div className={Main.top_banner}>
            쇼핑몰 새로운 소식~~~~
          </div>
          <div className={Main.box}>
            <button className={Main.logoButton} onClick={handleClick}>
              <p className={Main.logo}>로고</p>
            </button>
            <nav className={Main.menuContainer}>
              <ul className={Main.menu}>
                <li>
                  <a href="#gender">Gender</a>
                  <ul className={Main.submenu}>
                    <li><a href="#men">Men</a></li>
                    <li><a href="#women">Women</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#place">Place</a>
                  <ul className={Main.submenu}>
                    <li><a href="#date">와글와글</a></li>
                    <li><a href="#campus">붕어방</a></li>
                    <li><a href="#vacation">미래관</a></li>
                    <li><a href="#office">다빈치관</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#info">Info</a>
                  <ul className={Main.submenu}>
                    <li><a href="#q&a">Q&A</a></li>
                    <li><a href="#review">Review</a></li>
                  </ul>
                </li>
              </ul>
              <div className={Main.icons}>
                <Link to="/search"><FaSearch className={Main.icons}/></Link>
                <FaUser className={Main.icons} onClick={openModal}/>
                <Link to="/bookmark"><FaHeart className={Main.icons}/></Link>
                <a href="#cart"><FaShoppingCart className={Main.icons}/></a>
              </div>
            </nav>
          </div>
        </header>
        <LoginModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </>
  );
};

export default Header;