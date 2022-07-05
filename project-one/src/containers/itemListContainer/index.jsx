import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList'
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState(null)

  useEffect(() => {

    const getProductos = async () => {
      try {
        const response = await fetch('/mocks/data.json');
        const data = await response.json();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }

    getProductos()

  }, [])

  const handleAdd = (count) => {
    console.log(`Se agrego al carrito ${count} productos`)
  }

return (
    <><h1>{greeting}</h1><ItemCount handleAdd={handleAdd} initial={1} stock={10}/></>
    {productos ?
      <ItemList products={productos} />
      :
      null}

export default ItemListContainer