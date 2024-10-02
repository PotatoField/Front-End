import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../css/LoginModal.module.css';

const LoginModal = ({ isModalOpen, closeModal }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // 예를 들어, JWT 토큰을 로컬 스토리지에 저장
        localStorage.setItem('token', data.token);

        // 로그인 후 원하는 페이지로 이동 (예: 대시보드)
        navigate('/');

        // 모달 닫기
        closeModal();
      } else {
        throw new Error('로그인에 실패했습니다.');
      }
    } catch (error) {
      // 에러 처리
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.');
    }
  };

  if (!isModalOpen) return null; // 모달이 열리지 않으면 아무것도 렌더링하지 않음

  return (
    <div className={Modal.modal}>
      <div className={Modal.modal_content}>
        <h1 className={Modal.title}>로그인</h1>
        <span className={Modal.close_button} onClick={closeModal}>
          &times;
        </span>
        <div className={Modal.long_line}></div>
        <input
          className={Modal.email}
          placeholder={'Email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className={Modal.password}
          placeholder={'Password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className={Modal.login_btn} onClick={handleLogin}>
          로그인
        </button>

        {error && <p className={Modal.error}>{error}</p>}
        <Link to="/findid">
          <label className={Modal.find_ID} onClick={closeModal}>
            아이디 찾기
          </label>
        </Link>
        <Link to="/findpW">
          <label className={Modal.find_PW} onClick={closeModal}>
            비밀번호 찾기
          </label>
        </Link>
        <Link to="/create">
          <label className={Modal.create} onClick={closeModal}>
            회원가입
          </label>
        </Link>
      </div>
    </div>
  );
};

export default LoginModal;
