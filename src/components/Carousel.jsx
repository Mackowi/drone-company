import Carousel from 'react-bootstrap/Carousel'
import pic1 from '../assets/image/drone.jpg'
import pic2 from '../assets/image/drone3.jpg'
import pic3 from '../assets/image/drone2.jpg'

function UncontrolledExample() {
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
              <h3>Najlepszy sprzet</h3>
              <p>Latamy na najlepszych dronach a nie na chinskim gownie!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block mx-auto w-100'
              src={pic2}
              alt='Second slide'
            />

            <Carousel.Caption>
              <h3>Profesjonalizm</h3>
              <p className=''>
                Nasi wyszkoleni piloci lataja w laczkach - tacy sa dobrzy.
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
              <h3>Dokladnosc</h3>
              <p>Jestesmy najdokladniejsi we wszystkim xD</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default UncontrolledExample
