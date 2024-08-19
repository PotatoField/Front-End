import React from "react";
import Header from "../mainpage/components/Header";
import Sidebar from "./Sidebar";
import MypageContainer from "./MypageContainer";
import mypage from './mypage.module.css';

const Notification = () => {
    return(
        <>
            <Header/>
            <div className={mypage.notification}>
                <Sidebar/>
                <MypageContainer
                    pageText="알림"
                    optionTexts={[
                        { text: "푸시 알림", link: "#push-notifications" },
                        { text: "이메일 알림", link: "#email-notifications" }
                    ]}/>
            </div>
        </>
    );
}

export default Notification;
