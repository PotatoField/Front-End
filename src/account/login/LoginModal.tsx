/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from "../../css/LoginModal.module.css";
import { FaUser } from "react-icons/fa";
import Main from '../../mainpage/main.module.css';

const LoginModal = () => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
      <div>
        {/!*<button onClick={openModal}>Open Modal</button>*!/}
        <FaUser className={Main.icons} onClick={openModal}/>

        {isModalOpen && (
            <div className={Modal.modal}>
              <div className={Modal.modal_content}>
                <h1 className={Modal.title}>로그인</h1>
                <span className={Modal.close_button} onClick={closeModal}>&times;</span>
                <div className={Modal.long_line}></div>
                <input className={Modal.email} placeholder={"Email"}></input>
                <input className={Modal.password} placeholder={"Password"}></input>
                <button className={Modal.login_btn}>로그인</button>
                <Link to="/findiD"><label className={Modal.find_ID}>아이디 찾기</label></Link>
                <Link to="/findpW"><label className={Modal.find_PW}>비밀번호 찾기</label></Link>
                <Link to="/create"><label className={Modal.create}>회원가입</label></Link>
              </div>
            </div>
        )}
      </div>
  );
};

export default LoginModal;
*/

import React from 'react';
import { Link } from 'react-router-dom';
import Modal from "../../css/LoginModal.module.css";

const LoginModal = ({ isModalOpen, closeModal }:any) => {
  if (!isModalOpen) return null; // 모달이 열리지 않으면 아무것도 렌더링하지 않음

  return (
      <div className={Modal.modal}>
        <div className={Modal.modal_content}>
          <h1 className={Modal.title}>로그인</h1>
          <span className={Modal.close_button} onClick={closeModal}>&times;</span>
          <div className={Modal.long_line}></div>
          <input className={Modal.email} placeholder={"Email"}></input>
          <input className={Modal.password} placeholder={"Password"}></input>
          <button className={Modal.login_btn}>로그인</button>
          <Link to="/findiD"><label className={Modal.find_ID}>아이디 찾기</label></Link>
          <Link to="/findpW"><label className={Modal.find_PW}>비밀번호 찾기</label></Link>
          <Link to="/create"><label className={Modal.create}>회원가입</label></Link>
        </div>
      </div>
  );
};

export default LoginModal;
