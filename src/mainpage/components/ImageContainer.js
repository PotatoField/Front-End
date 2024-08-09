import React from 'react';

const ImageContainer = ({ images }) => {
    return (
        <div className="image-container">
            {images.map((image, index) => (
                <div key={index} id={image.id} className="container_top"></div>
            ))}
        </div>
    );
};

export default ImageContainer;