import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../assets/image/drone.jpg'
import pic2 from '../assets/image/drone3.jpg'
import pic3 from '../assets/image/drone2.jpg'

function DroneCarousel() {
  return (
    <section>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block mx-auto w-100'
              src={pic1}
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>Premium Drone Equipment</h3>
              <p>We fly with the best drones, not cheap knock-offs!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block mx-auto w-100'
              src={pic2}
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Professionalism</h3>
              <p>
                Our trained pilots fly with precision - that's what makes them
                great.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block mx-auto w-100'
              src={pic3}
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Accuracy</h3>
              <p>We are the most accurate in everything we do. Trust us!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default DroneCarousel
