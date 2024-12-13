import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../../css/LoginModal.module.css';

const LoginModal = ({ isModalOpen, closeModal }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true); // 로딩 시작
    setError(''); // 이전 에러 메시지 초기화

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // JWT 토큰을 로컬 스토리지에 저장
        localStorage.setItem('token', data.token);

        // 로그인 후 원하는 페이지로 이동
        navigate('/');

        // 모달 닫기
        closeModal();
      } else if (response.status === 401) {
        setError('이메일 또는 비밀번호가 잘못되었습니다.');
      } else {
        setError('서버 오류가 발생했습니다. 나중에 다시 시도하세요.');
      }
    } catch (error) {
      setError('네트워크 오류가 발생했습니다. 인터넷 연결을 확인하세요.');
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };
  if (!isModalOpen) return null;

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
