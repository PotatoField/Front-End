import React from "react";
import sidebar from './mypage.module.css'

const Sidebar = () => {
    return(
        <div className={sidebar.bar}>
            <div className={sidebar.logo}>로고</div>
            <div className={sidebar.title}>마이 페이지</div>
            <div className={sidebar.subtitle}>
                <a href="#login_info">로그인 정보</a>
                <a href="#profile_edit">프로필 관리</a>
                <a href="#address">주소록</a>
                <a href="/mypage/notification">알림</a>
            </div>
        </div>
    );
}

export default Sidebar;