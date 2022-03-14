import React, { useEffect } from 'react'
import { Button, Carousel } from 'react-bootstrap';

function Home() {



  return (
    <div style={{minHeight:'100vh'}}>
      <h2>Premium rent a car, an agency to serve his clients. Feel free to choose the car you like ! </h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp2775459.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp2775459.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp2775459.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={{display:'flex', justifyContent:'center'}}>
        <Button variant='dark' style={{ marginTop: '10px' }}>Check out all cars </Button>
      </div>
      <h2> Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum Lorem upseum </h2>
    
    </div>

  )
}

export default Home;