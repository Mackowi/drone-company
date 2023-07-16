function Newsletter() {
  return (
    <section className='bg-dark p-5 text-center text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Subscribe to Our Newsletter</h1>
            <p>
              Don't miss out! Stay up-to-date with the latest news and updates
              from our Drone Company. Sign up now and be the first to know!
            </p>
            <form className='d-flex flex-row gap-2'>
              <input type='text' className='form-control' placeholder='Name' />
              <input type='text' className='form-control' placeholder='Email' />
              <button className='btn btn-secondary'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Newsletter
