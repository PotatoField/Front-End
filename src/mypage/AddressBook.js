import React from "react";
import Header from "../mainpage/components/Header";
import Sidebar from "./Sidebar";
import MypageContainer from "./MypageContainer";
import mypage from './mypage.module.css';

const Address = () => {
    return(
        <>
            <Header/>
            <div className={mypage.address}>
                <Sidebar/>
                <MypageContainer
                    pageText="주소록"
                    page1Text="새 배송지 추가"
                    optionTexts={[
                        { text: "서울특별시 노원구 .." }
                    ]}/>
            </div>
        </>
    );
}

export default Address;