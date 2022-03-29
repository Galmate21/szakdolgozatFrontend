import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../Css/Navbarcomp.css';

function Navbarcomps() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">G and B Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Főoldal</Nav.Link>
            <Nav.Link href="/Informacio">Információ</Nav.Link>
            <NavDropdown title="Termékek" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Pulover">Pulóverek</NavDropdown.Item>
              <NavDropdown.Item href="/Nadrag">Nadrágok</NavDropdown.Item>
              <NavDropdown.Item href="/Polo">Pólók</NavDropdown.Item>
              <NavDropdown.Item href="/Kabat">Kabátok</NavDropdown.Item>
              <NavDropdown.Item href="/Cipo">Cipők</NavDropdown.Item>
              <NavDropdown.Item eventKey="disabled" disabled href="/Kiegeszitok">Kiegeszitők</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Profil" id="collasible-nav-dropdown">
            </NavDropdown>
            <Nav.Link href="/Bejelentkezes">Bejelentkezés</Nav.Link>
            <Nav.Link eventKey={2} href="/Regisztracio">Regisztráció</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
export default Navbarcomps;