import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import { useContext } from 'react'
import { ThemeContext } from '../App'

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Navbar expand='lg' className='navbar mt-3 mb-1' variant={theme}>
      <Container className='gap-3 ml-auto'>
        <Navbar.Brand as={Link} to='/'>
          <div className={`d-flex align-items-center ${theme}`}>
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
            <Nav.Link as={Link} to='/' className={theme}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/contact' className={theme}>
              Contact
            </Nav.Link>
            <Nav.Link className='switch'>
              <ReactSwitch
                onChange={toggleTheme}
                checked={theme === 'light'}
                onColor='#212529'
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
