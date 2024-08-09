import React from 'react';

const Product = ({ id, productId }) => {
    return (
        <div className="container_bottom">
            <div id={id} className="product"></div>
            <div id={productId} className="id">id</div>
        </div>
    );
};

export default Product;