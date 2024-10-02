import React from 'react';
import main from '../main.module.css';
import ImageContainer from './ImageContainer';
import SearchBar from "../../global_component/SearchBar";
import Grid from "../../write/grid";
import {useNavigate} from "react-router-dom";

console.log('Main component loaded');
const generateItems = (count,prefix) => {
    return Array.from({length:count},(_, index) =>({
        id: `${prefix}_${index + 1}`
    }));
};

const Main = () => {
    const navigate = useNavigate();
    const imageData = [
        { id: '1', url: 'path_to_image1.jpg', hashTags: '#BEST #인기코디', title: '이번주 BEST 코디' },
        { id: '2', url: 'path_to_image2.jpg', hashTags: '#성수 #00동', title: '이번주 핫플 코디' },
        { id: '3', url: 'path_to_image3.jpg', hashTags: '#남친룩 #여친룩', title: '데이트룩' },
        { id: '4', url: 'path_to_image4.jpg', hashTags: '#시험기간 #00생 코디', title: '캠퍼스룩' },
        { id: '5', url: 'path_to_image5.jpg', hashTags: '#추가 코디', title: '추가된 코디' },
        { id: '6', url: 'path_to_image6.jpg', hashTags: '#추가 코디 2', title: '또 다른 코디' },
        { id: '7', url: 'path_to_image7.jpg', hashTags: '#추가 코디 3', title: '마지막 코디' },
    ];
    const handlePostClick = () => {
        navigate("/post");
    };

    return(
        <main>
            <div id={main.container1}>
                <div id={main.leftbox}>
                    <p id={main.logotext}>
                        <span id={main.subname}>Fashion</span>
                        <span id={main.name}>GAMJABATS!</span><br/>
                        <span id={main.intro}>
        Ready to refresh your wardrobe? The latest styles harvested from
        Gamjabat are here! Trendsetters, it's time to make your move!
      </span>
                    </p>
                    <button id={main.writeButton} onClick={handlePostClick}>
                        ✏ write
                    </button>
                </div>

                <div id={main.rightbox}>
                </div>
            </div>

            <h1 id={main.text1}>카테고리 BEST 코디 구경하기</h1>
            <ImageContainer images={imageData.slice(0, 6)}/>
            <div>
                <h1 id={main.text1}>게시글</h1>
                <Grid/>
            </div>
        </main>
    );
};

export default Main;