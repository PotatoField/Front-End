import React from "react";
import createfinish from "../css/CreateFinish.module.css";

function CreateFinish(){
    return(
        <>
          <div className={createfinish.container}>
            <h1 className={createfinish.title}>회원가입이 완료 되었습니다.</h1>
            <div className={createfinish.info_box}>
              <div className={createfinish.info_item}>이름</div>
              <div className={createfinish.info_item}>아이디</div>
              <div className={createfinish.info_item}>이메일</div>
            </div>
          </div>
        </>
    );
}
export default CreateFinish;