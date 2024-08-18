import React from "react";
import page from './mypage.module.css';

const MypageContainer= ({pageText,page1Text,optionTexts})=>{
    return(
        <>
            <div className={page.mypage}>
                <div className={page.pagetitle}>{pageText}</div>
                <div className={page.pageoption}>
                    <a href="#new_address">{page1Text}</a>
                </div>
                <hr/>
                <div>
                    {optionTexts.map((option, index) => (
                        <a href={option.link} className={page.option} key={index}>
                            {option.text}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default MypageContainer;