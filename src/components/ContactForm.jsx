import { useContext } from 'react'
import { ThemeContext } from '../App'

function ContactForm() {
  const { theme } = useContext(ThemeContext)

  return (
    <section className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 mb-4 '>
            <div id={theme} className={`card`}>
              <div className='card-body text-center'>
                <h4>Contact Us</h4>
                <p>Drone Company</p>
                <h4>Address</h4>
                <p>123 Drone Street, Drone City</p>
                <h4>Email</h4>
                <p>information@dronecompany.com</p>
                <h4>Phone</h4>
                <p>+1 123-456-7890</p>
              </div>
            </div>
          </div>
          <div className='col-md-8 mb-4'>
            <div id={theme} className={`card p-4`}>
              <div className='card-body'>
                <h3 className='text-center'>
                  Fill out this form to get in touch with us
                </h3>
                <div className='row py-3'>
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
                  <div className='col-md-12 mb-2'>
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
    </section>
  )
}
export default ContactForm
