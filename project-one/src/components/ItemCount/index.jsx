import React, { useState } from 'react'

function ItemCount ({handleAdd, initial, stock}) {

    const [count, setCount] = useState(initial)

    function onAdd () {
        const newValue = count + 1;
        if (newValue<=10)
        setCount (newValue)
    } 

    const onDecrement = () => {
        const newValue = count - 1;
        if (newValue>=1)
        setCount (newValue)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={onAdd}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={()=> handleAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount