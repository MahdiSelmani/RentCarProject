import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function CarCard({ car }) {
    return (
        <div >
            <Card style={{ width: '18rem', margin: '10px', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' , minHeight:'400px'}}>
                <Card.Img variant="top" src={car.image || "https://cdn3.iconfinder.com/data/icons/car-icons-front-views/505/Mid-Size_Car_Front_View-512.png"} />
                <Card.Body style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card.Title>{car.name}</Card.Title>
                </Card.Body>
                <Link to={`/car/${car._id}`}><Button variant="primary" style={{ marginLeft: '70px', marginBottom: '10px' }} >More Details</Button></Link>
            </Card>
        </div>
    )
}

export default CarCard;