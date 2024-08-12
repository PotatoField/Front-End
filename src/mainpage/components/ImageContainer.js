
import React from 'react';
import Main from '../main.module.css';

const ImageContainer = ({ images }) => {
    return (
        <div className={Main.image_container}>
            {images.map((image, index) => (
                <div key={index} id={image.id} className={Main.container_top}>
                    <div className={Main.image_box} style={{backgroundImage: `url(${image.url})`}}></div>
                    <div className={Main.image_id}>{image.id}</div>
                </div>
            ))}
        </div>
    );
};

export default ImageContainer;