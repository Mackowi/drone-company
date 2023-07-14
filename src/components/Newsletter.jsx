function Newsletter() {
  return (
    <section className='bg-dark p-5 text-center text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Zapisz sie do newslettera</h1>
            <p>
              Radze ci chlopie zapisz sie, nic ci nie umknie, bedziesz zawsze na
              biezaco z najnowszymi informacjami z Drone Company.
            </p>
            <form className='d-flex flex-row gap-2'>
              <input type='text' className='form-control' placeholder='Imie' />
              <input type='text' className='form-control' placeholder='Email' />
              <button className='btn btn-secondary'>Przeslij</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Newsletter
