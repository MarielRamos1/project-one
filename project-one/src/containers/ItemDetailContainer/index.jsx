import React from 'react'
import ItemDetail from '../../components/ItemDetail'

const ItemDetailCointainer = () => {

    const [productDetail, setProductDetail] = useState({1: Any})
    const [error, setError] = useState ("")

    useEffect(()=> {
        const getProductos = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/1')
                const data = await response.json();
                setProductDetail(data)
            } catch (error) {
                console.log(error)
                setError(error.message)
            }
        }
        
        getProductos();
    }, [])

  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailCointainer