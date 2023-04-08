
import React from 'react'

function Product(props) {
  const {products} = props;
  return (
    <div>
        {products.map((product)=>(
            <div>
                {product.no}.
                <ul>
                <li>Name : {product.name}</li>
                <li>Price : {product.price}</li>
                <li>Image : {product.img}</li>
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Product