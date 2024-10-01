import React, { useState } from 'react';
import Header from '../mainpage/components/Header';
import MypageContainer from './MypageContainer';

const Notification = () => {
  const [optionTexts, setOptionTexts] = useState([
    { text: '푸시 알림', link: '#push-notifications', isActive: false },
    { text: '이메일 알림', link: '#email-notifications', isActive: false },
  ]);

  // 토글 상태 변경 함수
  const onToggleSwitch = (index) => {
    setOptionTexts((prevState) =>
      prevState.map((option, idx) =>
        idx === index ? { ...option, isActive: !option.isActive } : option
      )
    );
  };

  return (
    <>
      <Header />
      <div className={mypage.notification}>
        <MypageContainer
          pageText="알림"
          optionTexts={optionTexts}
          onToggleSwitch={onToggleSwitch}
        />
      </div>
    </>
  );
};

export default Notification;
