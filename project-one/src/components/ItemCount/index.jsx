import React, { useState } from 'react'

function ItemCount ({handleAdd, initialStock}) {

    const [count, setCount] = useState(0)

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
            <button onClick={handleAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount