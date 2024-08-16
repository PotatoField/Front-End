import React from "react";
import ID from '../css/FindId.module.css';

const FindId: React.FC = () => {
  return(
      <>
        <div className={ID.scroll_container}>
          <div className={ID.main_content}>
            <h1>아이디 찾기</h1>
            <p>
              회원님의 정보를 안전하게 보호하기 위해 아이디 찾기{" "}
              <span className={ID.new_line}>
          절차를 진행합니다. 필요한 정보를 입력해 주세요.
        </span>
            </p>
            <hr />
            <form>
              <label htmlFor="name">이름</label>
              <input type="text" id={ID.name} placeholder="이름" />

              <label htmlFor="email">이메일</label>
              <input type="email" id={ID.email} placeholder="이메일" />

              <button type="submit">확인</button>
            </form>
          </div>
          <hr className={ID.long_line} />
        </div>
      </>

  );
};

export default FindId;