import React from 'react';
import ImageContainer from './ImageContainer';
import ProductContainer from './ProductContainer';

console.log('Main component loaded');
const generateItems = (count,prefix) => {
    return Array.from({length:count},(_, index) =>({
        id: `${prefix}_${index + 1}`
    }));
};

const Main = () => {
    const images = generateItems(3, 'img');
    const products = generateItems(8, 'product').map((item,index) => ({
        ...item,
        productId: `id_${index + 1}`
    }));

    return(
        <main>
            <div id="container1">
                <img src="#" alt="main page"/>
            </div>
            <ImageContainer images={images}/>
            <p>best codies</p>
            <ProductContainer products={products.slice(0,4)}/>
            <ProductContainer products={products.slice(4)}/>
        </main>
    );
};

export default Main;