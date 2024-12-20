import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../css/LoginModal.module.css";
import axios from "axios";

const LoginModal = ({ isModalOpen, closeModal }: any) => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;
  const [alertInfo, setAlertInfo] = useState<{
    show: boolean;
    message: string;
    onConfirm?: () => void;
  }>({ show: false, message: "" });

  const showAlert = (message: string, onConfirm?: () => void) => {
    setAlertInfo({ show: true, message, onConfirm });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${API_URL}/api/members/login`,
        {
          userID,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      localStorage.setItem("token", data.token || "");
      setIsLoggedIn(true);
      showAlert("로그인 성공!", () => {
        closeModal();
        // navigate("/mypage/logininfo");
        navigate("/");
      });
    } catch (error: any) {
      setIsLoggedIn(false);
      if (error.response?.status === 401) {
        showAlert("이메일 또는 비밀번호가 잘못되었습니다.");
      } else if (error.response?.status) {
        showAlert("서버 오류가 발생했습니다. 나중에 다시 시도하세요.");
      } else {
        showAlert("네트워크 오류가 발생했습니다. 인터넷 연결을 확인하세요.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (isLoggedIn) {
        navigate("/mypage/logininfo");
        // navigate("/");
      }
      if (!isLoggedIn) {
      }
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className={Modal.modal} onClick={handleModalClick}>
      {alertInfo.show && (
        <>
          <div className={Modal.alert_overlay} />
          <div className={Modal.alert}>
            <p className={Modal.alert_message}>{alertInfo.message}</p>
            <button
              className={Modal.alert_button}
              onClick={() => {
                setAlertInfo({ show: false, message: "" });
                alertInfo.onConfirm?.();
              }}
            >
              확인
            </button>
          </div>
        </>
      )}
      <div className={Modal.modal_content}>
        <h1 className={Modal.title}>로그인</h1>
        <div className={Modal.long_line}></div>

        <div className={Modal.input_container}>
          <input
            className={Modal.email}
            placeholder="이메일을 입력하세요"
            type="text"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>

        <div className={Modal.input_container}>
          <input
            className={Modal.password}
            placeholder="비밀번호를 입력하세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className={Modal.login_btn}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "로그인 중..." : "로그인"}
        </button>

        {error && <p className={Modal.error}>{error}</p>}

        <div className={Modal.links_container}>
          <div>
            <Link to="/findid" className={Modal.find_ID}>
              <span className={Modal.find_ID} onClick={closeModal}>
                아이디 찾기
              </span>
            </Link>
            <Link to="/findpw" className={Modal.find_PW}>
              <span className={Modal.find_PW} onClick={closeModal}>
                비밀번호 찾기
              </span>
            </Link>
          </div>
          <Link to="/create" className={Modal.create}>
            <span className={Modal.create} onClick={closeModal}>
              회원가입
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
