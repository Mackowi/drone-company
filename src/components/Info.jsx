import dron from '../assets/image/dron.jpg'

function Info() {
  return (
    <>
      <section className='py-5 info'>
        <div className='overlay'>
          <div className='row pt-5'>
            <div className='col'>
              <div className='container pt-5'>
                <h1>Explore the Skies with Confidence</h1>
                <div className='p'>
                  Our skilled team guarantees precise aerial measurements that
                  will surpass all your expectations. Prepare to be amazed by
                  the accuracy and reliability of our drone services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 align-self-center text-center'>
              <h3>Unleash the Power of Quality</h3>
              <p>
                Experience unparalleled satisfaction as our professional drone
                pilots deliver exceptional results. Trust in our commitment to
                providing top-notch services that go above and beyond.
              </p>
            </div>
            <div className='col-md-6 my-3'>
              <img
                src={dron}
                alt='drone'
                className='img-fluid'
                style={{ borderRadius: '15px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Info
