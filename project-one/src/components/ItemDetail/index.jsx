import React from 'react'

const ItemDetail = ({product}) => {
  console.log(product);
  return (
    <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
    </div>
  )
}

export default ItemDetail