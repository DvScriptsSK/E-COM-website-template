import React from 'react';
import productr from '../../data/products.json';
const Product = (props) => {
    // Extract the ID from the current URL
    const id = window.location.pathname.split('/').pop();
    const product = productr.find(product => product.id === parseInt(id));
    return (
        <div>
            Product ID: {product.id}
            <br/>
            Product Name: {product.name}
            <br/>

            Product Price: {product.price}

        </div>
    );
};

export default Product;