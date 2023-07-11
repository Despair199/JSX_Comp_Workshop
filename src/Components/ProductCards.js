import React from 'react'
import Name1 from './Name1'
import Description1 from './Description1'
import Price1 from './Price1'
import Image1 from './Image1'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCards = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Image1/>
        <Card.Body>
        <Name1/>
        <Description1/>
        <Price1/>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default ProductCards