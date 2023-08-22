import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data';


const imgCard = () => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={data[0].imgUrl} />
    <Card.Body>
      <Card.Title>{data[0].title}</Card.Title>
      <Card.Text>
      {data[0].desc}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </div>
  )
}



export default imgCard;