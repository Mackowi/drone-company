import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand='lg' className=' navbar bg-body-tertiary my-3'>
      <Container className='gap-3 ml-auto'>
        <Navbar.Brand as={Link} to='/'>
          <div className='d-flex align-items-center'>
            <img
              alt='logo'
              src={logo}
              width='35'
              height='35'
              className='d-inline-block align-top'
            />
            <h2 className='mb-0'>Drone Company</h2>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='d-flex flex-row justify-content-around border-top border-bottom'>
            <Nav.Link as={Link} to='/'>
              Strona Glowna
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
