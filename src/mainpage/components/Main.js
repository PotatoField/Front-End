import React from 'react';
import main from '../main.module.css';
import ImageContainer from './ImageContainer';
import Footer from './Footer'
import ProductContainer from './ProductContainer';

console.log('Main component loaded');
const generateItems = (count,prefix) => {
    return Array.from({length:count},(_, index) =>({
        id: `${prefix}_${index + 1}`
    }));
};

const Main = () => {
    const images = generateItems(12, 'img');
    const products = generateItems(8, 'product').map((item,index) => ({
        ...item,
        productId: `id_${index + 1}`
    }));

    return(
        <main>
            <div id={main.container1}>
                <div id={main.mainImage}></div>
            </div>
            <p>BEST CODIES</p>
            <ImageContainer images={images.slice(0,6)}/>
            <div id={main.container2}>
                <div id={main.photo1}/>
                <div id={main.photo2}/>
            </div>
            <div id={main.container3}>
                <div id={main.photo3}/>
                <div id={main.photo4}/>
                <div id={main.photo5}/>
                <div id={main.photo6}/>
            </div>
            <h1 className={main.h1}>새로운 소식</h1>
            <div id={main.container4}>
                <div id={main.photo7}/>
            </div>
            <p id={main.b_post}>인기 게시글</p>
            <div id={main.container5}>
                <div id={main.post1}/>
                <div id={main.post2}/>
                <div id={main.post3}/>
            </div>
            <h1 className={main.h1}>인기있는 아이템</h1>
            <div id={main.container6}>
                <div id={main.item1} className={main.item}/>
                <div id={main.item2} className={main.item}/>
                <div id={main.item3} className={main.item}/>
                <div id={main.item4} className={main.item}/>
                <div id={main.item5} className={main.item}/>
                <div id={main.item6} className={main.item}/>
                <div id={main.item7} className={main.item}/>
                <div id={main.item8} className={main.item}/>
            </div>
        </main>
    );
};

export default Main;