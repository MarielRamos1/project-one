import React from 'react'
import ItemCount from '../../components/ItemCount';

const ItemListContainer = ({greeting}) => {


  const handleAdd = (count) => {
    console.log(`Se agrego al carrito ${count} productos`)
  }

return (
    <><h1>{greeting}</h1><ItemCount handleAdd={handleAdd} initial={1} stock={10}/></>
    )
}

export default ItemListContainer