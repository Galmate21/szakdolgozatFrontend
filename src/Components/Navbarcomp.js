import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import '../Css/Navbarcomp.css';
import {useEffect,useState} from 'react'



function Navbarcomps() {
  const [admin,setAdmin]=useState(false)
  const [udv,setUdv]=useState([])
  
  


  useEffect(()=>{
    const userinfo=localStorage.getItem("userinfo");
    var prof=document.getElementById("prof");
    var d=JSON.parse(userinfo);
    if(userinfo){
      
      var log=document.getElementById("bejelentkezes_nav");
      log.style.display="none";
      var reg=document.getElementById("reg_nav");
      reg.style.display="none";
      setUdv(d);
      if (d.isAdmin) {
        setAdmin(true)
      }
      
      prof.hidden=false;
      
     
    }
    else{
      prof.hidden=true
    }
    
    
    
    
   
  },[]);


 

  function logout(){
    localStorage.removeItem("userinfo");
    alert("Sikeres kijelentkezés!")
   window.location.reload();
  }

const profilIcon=<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
<path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>

  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">G and B Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link></Nav.Link>
            <Nav.Link href="/">Főoldal</Nav.Link>
            <Nav.Link href="/Informacio">Információ</Nav.Link>
            <Nav.Link style={{
          display: admin ? '' : 'none',
        }} href="/felhasznalok">Felhasználók kezelése</Nav.Link>
            <NavDropdown title="Termékek" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Pulover">Pulóverek</NavDropdown.Item>
              <NavDropdown.Item href="/Nadrag">Nadrágok</NavDropdown.Item>
              <NavDropdown.Item href="/Polo">Pólók</NavDropdown.Item>
              <NavDropdown.Item  href="/Kabat">Kabátok</NavDropdown.Item>
              <NavDropdown.Item href="/Cipo">Cipők</NavDropdown.Item>
              <NavDropdown.Item style={{
          display: admin ? '' : 'none',
        }} id="hozzaad_nav" href="/uj">Új termék hozzáadása</NavDropdown.Item>
              <NavDropdown.Item eventKey="disabled" disabled href="/Kiegeszitok">Kiegeszitők</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title={profilIcon} id="prof">
            <NavDropdown.Item ><b>Bejelentkezve:</b><br /> {udv.nev}</NavDropdown.Item>
            <NavDropdown.Item onClick={logout}>Kijelentkezés</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id="bejelentkezes_nav" href="/Bejelentkezes">Bejelentkezés</Nav.Link>
            <Nav.Link id="reg_nav" eventKey={2} href="/Regisztracio">Regisztráció</Nav.Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
export default Navbarcomps;