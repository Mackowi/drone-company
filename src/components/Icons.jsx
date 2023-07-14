import {
  FaAmericanSignLanguageInterpreting,
  FaBuilding,
  FaDesktop,
} from 'react-icons/fa'

function Icons() {
  return (
    <section>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4 text-center mb-5'>
            <FaAmericanSignLanguageInterpreting size={90} className='mb-3' />
            <h3>Dogadane Na Tip Top</h3>
            <p>Z nasza wyspecjalizowana kadra wszystko bedzie cacy!</p>
          </div>
          <div className='col-md-4 text-center mb-5'>
            <FaBuilding size={90} className='mb-3' />
            <h3>Wszystkie budynki</h3>
            <p>Zmierzymy kazdy rodzaj budynku.</p>
          </div>
          <div className='col-md-4 text-center mb-5'>
            <FaDesktop size={90} className='mb-3' />
            <h3>Obrobka danych</h3>
            <p>
              Wszelkie pomiary zostaja dostarczone po profesjonalnej obrobce.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Icons
