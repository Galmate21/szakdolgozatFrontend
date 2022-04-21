import "../Css/Profil.css";
import { Card, ListGroup, ListGroupItem, Button, Modal, FormControl, InputGroup,Nav } from 'react-bootstrap';
import kutya from '../Img/kutya.png';
import { useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";



function Profil() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  
    const [kosartart,setkosartart]=useState([])
    const [adatok,setadatok]=useState([])
    const [felhasznalonev,setfelhasznalonev]=useState("")
    const [nev,setnev]=useState("")
    const [email,setemail]=useState("")
    const [cim,setcim]=useState("")
    const [jelszo,setjelszo]=useState("")
    const [felhasznalok,setfelhasznalok]=useState([])
    

    useEffect(()=>{
        const cartItem=JSON.parse(localStorage.getItem('cart'))
        if(cartItem){
          setkosartart(cartItem)
         
        }
       
    
      },[])

      useEffect(()=>{
        axios({
          method: 'get',
          url: 'http://localhost:5501/felhasznalok',
          responseType: 'json'
        })
          .then((response)=> {
            setfelhasznalok(response.data)
            
          });
       },[])


    useEffect(()=>{
        const userinfo=localStorage.getItem("userinfo");
        if(!userinfo){
          window.location.assign("/");
         
        }
        else{
             setadatok(JSON.parse(userinfo))
          

        }
       
      },[]);

      const handleShow = () =>{ 
        setShow(true)
        setfelhasznalonev(adatok.felhasznalonev)
            setnev(adatok.nev)
            setemail(adatok.email)
            setcim(adatok.cim)
            
    };

      const Modositas=()=>{
         if (jelszo.length<8||cim===""||felhasznalonev===""||nev===""|| email==="") {
            
            toast.error("Hiba az adatok bevitelével!", {
                position: "top-center"
              }); 
             return;
         }

         for(var valid of felhasznalok){
             if(valid.felhasznalonev===felhasznalonev&&adatok.felhasznalonev!==felhasznalonev){
                toast.error("Ez a felhasználónév már foglalt!", {
                    position: "top-center"
                  }); 
                 return;
             }
         }

         for(var validemail of felhasznalok){
            if(validemail.email===email&&adatok.email!==email){
               toast.error("Ez az email cím már foglalt!", {
                   position: "top-center"
                 }); 
                return;
            }
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
    window.location.reload();
 }, 4000);
    
  } catch (error) {
    alert("Hiba!")
  }
              
         
         
              
          
      }


    return (
        <div>
             <Nav.Link href="/kosar">
<Button style={{marginLeft:"15px",marginTop:"5px",fontSize:"25px",backgroundColor:"",borderRadius:"50%"}}>
      
      <svg style={{backgroundColor:"",borderRadius:"30%"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<span style={{backgroundColor:"", width:"20px",height:"20px",borderRadius:"50%"}}>{kosartart.length}</span>
</Button></Nav.Link>

            <div className="centered">
                <Card className="text-center" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={kutya} />
                    <Card.Body>
                        <Card.Title>A profil adatai</Card.Title>
                        <Card.Text>
                            <ListGroup style={{ textAlign: "left" }} className="list-group-flush">
                                <ListGroupItem ><b>Felhasznalónév:</b> {adatok.felhasznalonev}</ListGroupItem>
                                <ListGroupItem ><b>Név:</b> {adatok.nev}</ListGroupItem>
                                <ListGroupItem ><b>Email:</b> {adatok.email}</ListGroupItem>
                                <ListGroupItem ><b>Cím:</b> {adatok.cim}</ListGroupItem>
                                <ListGroupItem ><b>Jelszó:</b> {"***********"}</ListGroupItem>
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