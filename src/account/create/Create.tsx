// import React from "react";
// import create from "../../css/Create.module.css";
// import FormGroup from "./FormGroup";
// import TermExplain from "./TermExplain";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const Create: React.FC = () => {
//   const navigate = useNavigate();

//   const API_URL = process.env.REACT_APP_API_URL;

//   // const handleClick = () => {
//   //   navigate("/create-finish");
//   // };

//   const [formData, setFormData] = useState({
//     name: "",
//     userID: "",
//     password: "",
//     confirmPassword: "",
//     number: "",
//     email: "",
//   });

//   const [alertInfo, setAlertInfo] = useState<{
//     show: boolean;
//     message: string;
//     onConfirm?: () => void;
//   }>({ show: false, message: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const showAlert = (message: string, onConfirm?: () => void) => {
//     setAlertInfo({ show: true, message, onConfirm });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     console.log("FormData:", formData);

//     // if (formData.password !== formData.confirmPassword) {
//     //   showAlert("비밀번호가 일치하지 않습니다.");
//     //   return;
//     // }

//     try {
//       const response = await axios.post(
//         `${API_URL}/api/members/register`,
//         {
//           email: formData.email.trim(),
//           password: formData.password.trim(),
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Response:", response.data);
//       showAlert("회원가입 성공!", () => navigate("/"));
//     } catch (error: any) {
//       console.error("Error:", error.response?.data || error.message);
//       showAlert(
//         "회원가입 실패: " + (error.response?.data?.error || "오류 발생")
//       );
//     }
//   };

//   return (
//     <>
//       {alertInfo.show && (
//         <>
//           <div className={create.alert_overlay} />
//           <div className={create.alert}>
//             <p className={create.alert_message}>{alertInfo.message}</p>
//             <button
//               className={create.alert_button}
//               onClick={() => {
//                 setAlertInfo({ show: false, message: "" });
//                 alertInfo.onConfirm?.();
//               }}
//             >
//               확인
//             </button>
//           </div>
//         </>
//       )}
//       <div id={create.container_top}>
//         <p className={create.title}>회원가입</p>
//         {/* <FormGroup
//           label="회원인증"
//           type="text"
//           id={"member"}
//           onChange={handleChange}
//         /> */}
//         <FormGroup
//           label="이름"
//           type="text"
//           id={"name"}
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <FormGroup
//           label="아이디"
//           type="text"
//           id={"userID"}
//           value={formData.userID}
//           onChange={handleChange}
//           info="(영문소문자/숫자, 4~16자)"
//         />
//         <FormGroup
//           label="비밀번호"
//           type="password"
//           id={"password"}
//           value={formData.password || ""}
//           onChange={handleChange}
//           info="(영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8~16자)"
//         />
//         {/* <FormGroup
//           label="비밀번호 확인"
//           type="password"
//           id={"confirmPassword"}
//           value={formData.confirmPassword || ""}
//           onChange={handleChange}
//         /> */}

//         <FormGroup
//           label="전화번호"
//           type="text"
//           id={"number"}
//           value={formData.number}
//           onChange={handleChange}
//         />
//         <FormGroup
//           label="이메일"
//           type="text"
//           id={"email"}
//           value={formData.email || ""}
//           onChange={handleChange}
//         />
//       </div>

//       <TermExplain />

//       <form onSubmit={handleSubmit}>
//         <button id={create.create_btn} type={"submit"} onClick={handleSubmit}>
//           회원가입
//         </button>
//       </form>
//     </>
//   );
// };

// export default Create;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import create from "../../css/Create.module.css";
import FormGroup from "./FormGroup";
import TermExplain from "./TermExplain";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

  const [formData, setFormData] = useState({
    name: "",
    userID: "",
    password: "",
    confirmPassword: "",
    number: "",
    email: "",
  });

  const [alertInfo, setAlertInfo] = useState<{
    show: boolean;
    message: string;
    onConfirm?: () => void;
  }>({ show: false, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const showAlert = (message: string, onConfirm?: () => void) => {
    setAlertInfo({ show: true, message, onConfirm });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      showAlert("이름을 입력하세요.");
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      showAlert("올바른 이메일 주소를 입력하세요.");
      return false;
    }
    if (!formData.password.trim() || formData.password.length < 8) {
      showAlert("비밀번호는 8자 이상이어야 합니다.");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      showAlert("비밀번호가 일치하지 않습니다.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/members/register`,
        {
          name: formData.name.trim(),
          userID: formData.userID.trim(),
          password: formData.password.trim(),
          number: formData.number.trim(),
          email: formData.email.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      showAlert("회원가입 성공!", () => navigate("/create-finish"));
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      showAlert(
        "회원가입 실패: " + (error.response?.data?.error || "오류 발생")
      );
    }
  };

  return (
    <>
      {alertInfo.show && (
        <>
          <div className={create.alert_overlay} />
          <div className={create.alert}>
            <p className={create.alert_message}>{alertInfo.message}</p>
            <button
              className={create.alert_button}
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
      <div id={create.container_top}>
        <p className={create.title}>회원가입</p>
        <FormGroup
          label="이름"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormGroup
          label="아이디"
          type="text"
          id="userID"
          value={formData.userID}
          onChange={handleChange}
          info="(영문소문자/숫자, 4~16자)"
        />
        <FormGroup
          label="비밀번호"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          info="(영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8~16자)"
        />
        <FormGroup
          label="비밀번호 확인"
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <FormGroup
          label="전화번호"
          type="text"
          id="number"
          value={formData.number}
          onChange={handleChange}
        />
        <FormGroup
          label="이메일"
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <TermExplain />

      <form onSubmit={handleSubmit}>
        <button id={create.create_btn} type="submit">
          회원가입
        </button>
      </form>
    </>
  );
};

export default Create;
