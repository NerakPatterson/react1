import {useState} from 'react';

function ProductItem({product}) {
    const [quantity, setQuantity] = useState(1);
    const total = (product.price*quantity).toFixed(2);

    return (
        <div className="product-item">
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductItem;