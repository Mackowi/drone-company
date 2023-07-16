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
            <h3>Precise Aerial Inspections</h3>
            <p>
              With our specialized team, everything will be in perfect order!
            </p>
          </div>
          <div className='col-md-4 text-center mb-5'>
            <FaBuilding size={90} className='mb-3' />
            <h3>Building Surveys</h3>
            <p>We will measure every type of building accurately.</p>
          </div>
          <div className='col-md-4 text-center mb-5'>
            <FaDesktop size={90} className='mb-3' />
            <h3>Data Processing</h3>
            <p>
              All measurements are provided after professional data processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Icons
