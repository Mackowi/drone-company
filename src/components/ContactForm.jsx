function ContactForm() {
  return (
    <section className='py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 pb-4'>
            <div className='card'>
              <div className='card-body text-center'>
                <h4>Skontaktuj sie</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <h4>Address</h4>
                <p>Goslaw, Wodzislaw Slaski</p>
                <h4>Email</h4>
                <p>damian@gmail.com</p>
                <h4>Phone</h4>
                <p>0700-880-994</p>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='card p-4'>
              <div className='card-body'>
                <h3 class='text-center'>
                  Wypelnij ten formularz w celu kontaktu z nami
                </h3>
                <div className='row py-3'>
                  <div className='col-md-6 mb-2'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Imie'
                    />
                  </div>
                  <div className='col-md-6 mb-2'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Nazwisko'
                    />
                  </div>
                  <div className='col-md-6 mb-2'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div className='col-md-6 mb-2'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Numer telefonu'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div class='col-md-12 mb-4'>
                    <textarea class='form-control' placeholder='Message' />
                  </div>
                  <div class='col-md-12 text-center'>
                    <input
                      type='submit'
                      value='Submit'
                      class='btn btn-secondary'
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
