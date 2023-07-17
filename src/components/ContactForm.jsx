import { useContext } from 'react'
import { ThemeContext } from '../App'

function ContactForm() {
  const { theme } = useContext(ThemeContext)

  return (
    <section className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mb-4 '>
            <div id={theme} className='card h-100'>
              <div className='card-body text-center'>
                <h3>Contact Us</h3>
                <p>Drone Company</p>
                <h3>Address</h3>
                <p>123 Drone Street, Drone City</p>
                <h3>Email</h3>
                <p>information@dronecompany.com </p>
                <h3>Phone</h3>
                <p>+1 123-456-7890</p>
              </div>
            </div>
          </div>
          <div className='col-md-8 mb-4'>
            <div id={theme} className='card p-4 h-100'>
              <div className='card-body'>
                <h3 className='text-center'>
                  Fill out this form to get in touch with us
                </h3>
                <div className='row pt-3'>
                  <div className='col-md-6 mb-2'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='col-md-6 mb-2'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Last Name'
                    />
                  </div>
                  <div className='col-md-6 mb-2'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div className='col-md-6 mb-2'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Phone Number'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-12 mb-4'>
                    <textarea className='form-control' placeholder='Message' />
                  </div>
                  <div className='col-md-12 text-center'>
                    <input
                      type='submit'
                      value='Submit'
                      className='btn btn-secondary'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md8'>
            <h3>Our Location</h3>
            <p className='mb-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              deserunt recusandae iure officiis quia saepe at velit ad eum
              tenetur magnam, nihil voluptate sit totam ut reiciendis iusto
              harum doloribus.
            </p>
            <div className='map'>
              <iframe
                src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Stationsplein,%201012%20AB%20Amsterdam+(Amsterdam%20Central)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactForm
