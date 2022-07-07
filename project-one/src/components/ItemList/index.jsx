import React from 'react'
import ItemList from './ItemList'

const ItemList = ({productos}) => {
  return (
    <div style={{display:'flex', justifyContent: 'center'}}>
      {productos?.map(prod => <Item key={prod.id} prod={prod}/>)}
    </div>
    )
}

export default ItemList