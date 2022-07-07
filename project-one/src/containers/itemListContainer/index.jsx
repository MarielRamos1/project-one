import React, { useEffect, useState } from 'react'
import ItemCount from '../../components/ItemCount'

const ItemListContainer = ({greeting}) => {

  const [data, setData] = useState([null])

  const productos = [
    {id:1, nombre: 'producto1', precio: 100, Image},
    {id:1, nombre: 'producto1', precio: 100, Image},
  ]

  const task = new Promise ((res, rej) => {
    setTimeout(() => {
    res(productos)
  }, 2000)
  })

  const fetchData = async () => {
    try {
      let res = await task
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect (() => {
  fetchData()
  }, []);

  console.log(data)

  const handleAdd = (count) => {
    console.log(`Se agrego al carrito ${count} productos`)
  }

  return (
  <div style={{textalign: 'center', marginTop:200}}>
    <><h1>{greeting}</h1><ItemCount handleAdd={handleAdd} initial={1} stock={10} /></>
    <ItemList productos={data}/>
    </div>
  )
 }

export default ItemListContainer;