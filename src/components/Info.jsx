import dron from '../assets/image/dron.jpg'

function Info() {
  return (
    <>
      <section id='info' className='py-5'>
        <div className='overlay'>
          <div className='row pt-5'>
            <div className='col'>
              <div className='container pt-5'>
                <h1>Jestes jeszcze niezdecydowany?</h1>
                <div className='p'>
                  Damian zapewnia ze odjebie taki pomiar, ze wszystkie
                  poprzednie pomiary wykonane w twoim zyciu beda przy nim
                  wygladac jak smieszny zart.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 align-self-center'>
              <h3>Jakosc nie ilosc</h3>
              <p>
                Bedzie pan tak zadowolony jak pan jeszcze nigdy nie byl.
                Gwarancja zadowolenia i radosci z naszych uslug!
              </p>
            </div>
            <div className='col-md-6'>
              <img
                src={dron}
                alt='dron'
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
