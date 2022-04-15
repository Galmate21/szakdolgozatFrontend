import "../Css/Profil.css";
import { Card, ListGroup, ListGroupItem, Button, Modal, FormControl, InputGroup } from 'react-bootstrap';
import kutya from '../Img/kutya.png';
import { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



function Profil() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [adatok,setadatok]=useState([])
    const [felhasznalonev,setfelhasznalonev]=useState("")
    const [nev,setnev]=useState("")
    const [email,setemail]=useState("")
    const [cim,setcim]=useState("")
    const [jelszo,setjelszo]=useState("")

    useEffect(()=>{
        const userinfo=localStorage.getItem("userinfo");
        if(!userinfo){
          window.location.assign("/");
         
        }
        else{
            setadatok(JSON.parse(userinfo))
            setfelhasznalonev(adatok.felhasznalonev)
            setnev(adatok.nev)
            setemail(adatok.email)
            setcim(adatok.cim)
            setjelszo(adatok.jelszo)

        }
       
      },[]);

      const Modositas=()=>{
         if (jelszo===""||cim===""||felhasznalonev===""||nev===""|| email==="") {
             if(jelszo.lenght<8){
            toast.error("Hiba az adatok bevitelével!", {
                position: "top-center"
              }); }
             return;
         }
                  
  try {
    const config={
      headers:{
        "Content-type":"application/json"
      }
    }
    const {data}=  axios.put(`http://localhost:5501/felhasznalok/${adatok._id}`,{
    nev:nev,
    cim:cim,
    felhasznalonev:felhasznalonev,
    jelszo:jelszo,
    email:email,
    isAdmin:adatok.isAdmin

  },config)

  
  
  toast.success("Sikeres adatmódosítás! Jelentkezz be újra!", {
    position: "bottom-left"
  }); 
  setTimeout(function () {
    localStorage.removeItem('userinfo'); 
 }, 4000);
    
  } catch (error) {
    alert("Hiba!")
  }
              
         
         
              
          
      }

    return (
        <div>

            <div className="centered">
                <Card className="text-center" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={kutya} />
                    <Card.Body>
                        <Card.Title>A profil adatai</Card.Title>
                        <Card.Text>
                            <ListGroup style={{ textAlign: "left" }} className="list-group-flush">
                                <ListGroupItem >Felhasznalónév: {adatok.felhasznalonev}</ListGroupItem>
                                <ListGroupItem >Név: {adatok.nev}</ListGroupItem>
                                <ListGroupItem >Email: {adatok.email}</ListGroupItem>
                                <ListGroupItem >Cím: {adatok.cim}</ListGroupItem>
                                <ListGroupItem >Jelszó: {"***********"}</ListGroupItem>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Button variant="dark" onClick={handleShow}>
                        Adatok Módosítása
                    </Button>
                </Card>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title >Adatok Módosítása</Modal.Title>
                       
                       
                    </Modal.Header>
                    <Modal.Body > 
                    <p>Minden adatot ki kell tölteni!</p>
                        <InputGroup className="mb-3">
                            <InputGroup.Text >Felhasznalónév</InputGroup.Text>
                            <FormControl onChange={(e)=>setfelhasznalonev(e.target.value)} placeholder={adatok.felhasznalonev} aria-label="felhasznalonev" value={felhasznalonev} />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Név</InputGroup.Text>
                            <FormControl  onChange={(e)=>setnev(e.target.value)} placeholder={adatok.nev} aria-label="Nev" value={nev} />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Email</InputGroup.Text>
                            <FormControl  onChange={(e)=>setemail(e.target.value)} placeholder={adatok.email} type="email" aria-label="Email" value={email} />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Cím</InputGroup.Text>
                            <FormControl  onChange={(e)=>setcim(e.target.value)} aria-label="Cim" placeholder={adatok.cim} value={cim} />
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Új jelszó:</InputGroup.Text>
                            <FormControl  onChange={(e)=>setjelszo(e.target.value)} type="password" placeholder="Új jelszó" aria-label="Új jelszo" />
                        </InputGroup>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Kilépés
                        </Button>
                        <Button variant="dark" onClick={Modositas}>
                            Mentés
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <ToastContainer />
        </div >
    );
}

export default Profil