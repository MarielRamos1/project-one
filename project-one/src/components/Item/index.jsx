import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Item = ({prod}) => {

  const {id, nombre, precio, imagen} = prod
  return (
<Card style={{ width: '18rem', margin: 20 }}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
      precio:{precio}
    </Card.Text>
    <Button variant="primary">Ver Detalle</Button>
  </Card.Body>
</Card>
  )
}

export default Item