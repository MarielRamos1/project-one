import React from 'react'

const products = [
    {
      id: 'producto1',
      name: 'Nombre',
      descripción: 'Descripcion',
      stock: 1,
    },
    {
      id: 'producto2',
      name: 'Nombre2',
      descripción: 'Descripcion2',
      stock: 5,
    },
  ];

  setTimeout(() => {
    resolve(products);
}, 3000);

const getProduct = async () => {
    try {
        response = await promesaDeProductos;
        console.log(response);
    } catch (err) {
        console.log('Error' + err);
      }
    };

    getProduct();

const Item = ({product}) => {
  return (
    <li>{product.title}</li>
  )
}

export default Item