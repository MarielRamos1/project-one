import React from 'react'

const products =             [
  {
      id:1,
      title: 'Producto1',
      price:'100$',
      description:'Vainilla',
  }, {
    id:2,
    title:'Producto2',
    price:'150$',
    description:'Chocolate',
}
]

  setTimeout(() => {
    resolve(products);
}, 2000);

const Item = ({product}) => {
  return (
    <li>{product.title}</li>
  )
}

export default Item