import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import homeImg1 from '../images/homeImg1.jpg'
import homeImg2 from '../images/homeImg2.jpg'
import homeImg3 from '../images/homeImg3.jpg'


const CarouselHome = () => {
  return (
    <div style={{ backgroundColor: '#EEEEEE' }}>
    <Carousel fade >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={homeImg1}
          alt="First slide"
        />
      </Carousel.Item >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={homeImg2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={homeImg3}
          alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default CarouselHome