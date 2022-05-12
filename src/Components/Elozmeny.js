import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Card, Row,Button,Modal} from 'react-bootstrap'


function Elozmeny() {

    const[megrendelesek,setmegrendelesek]=useState([])
    
    const userinfo=localStorage.getItem("userinfo");
    const [show, setShow] = useState(false);
    const [felhasznalo,setfelhasznalo]=useState([])
    const [termekshow,SetTermekshow]=useState(false)
    const [darab,setdarab]=useState(0)
    const [meret,setmeret]=useState("")
    const [loggeduser,setloggeduser]=useState([])

    const handleClose = () => {setShow(false);
    setfelhasznalo([])
    SetTermekshow(false)
  }
   
   
  useEffect(()=>{
   
    if(!userinfo){
      window.location.assign("/bejelentkezes")
    }
    else{
        setloggeduser(JSON.parse(userinfo))
    }
  },[userinfo]);
    useEffect(()=>{
        axios({
          method: 'get',
          url: 'http://localhost:5501/megrendelesek',
          responseType: 'json'
        })
          .then((response)=> {
            setmegrendelesek(response.data)
            
          });
       },[])
       const handleShow = async(id) =>{ 
        
        
        axios({
          method: 'get',
          url: `http://localhost:5501/felhasznalok/${id}`,
          responseType: 'json'
        })
          .then((response)=> {
            setfelhasznalo(response.data)
            setShow(true)
          });
            
    };

      const termekModalShow=async(id,key,i)=>{
       
        const tdb=megrendelesek[key].megrendelt_termekek[i].mennyiseg
        const tmeret=megrendelesek[key].megrendelt_termekek[i].meret
        setdarab(tdb)
        setmeret(tmeret)
        axios({
          method: 'get',
          url: `http://localhost:5501/termekek/${id}`,
          responseType: 'json'
        })
          .then((response)=> {
            setfelhasznalo(response.data)
            SetTermekshow(true)
          });

      }

     

       async function deleteBtn (event) {
        var id = event.target.value;
        if (window.confirm("Biztos törlöd ezt a megrendelést?")){
        axios({
          method: 'delete',
          url: `http://localhost:5501/megrendelesek/${id}`,
          responseType: 'json'
        })
          .then((response)=> {
            alert(JSON.stringify(response.data)+" Sikeresen törölve!")
            window.location.reload();
          });
        }
    }

   
    return (
        <div>
        <h1 className="cimtermek">Megrendelések</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
        {megrendelesek.map((value,key)=>{
           if(value.felhasznalo===loggeduser._id){
           
                
            
            return(
                <div key={key}>
                    <Card className={value.lezart?"bg-danger":value.aktiv?"bg-success":"bg-warning"} border="dark">
                        <Card.Body>
                        <Card.Text className="text-light"><b>Azonosító: {value._id}</b></Card.Text>
                            <Card.Title>{value.nev}</Card.Title>
                            <Card.Text onClick={()=>handleShow(value.felhasznalo)}>Megrendelő azonosítója: <b>{value.felhasznalo}</b></Card.Text>
                            <Card.Text><b>Megrendelt termékek:</b></Card.Text>
                            {value.megrendelt_termekek.map((m,index)=>{
                              return(
                                <div key={index}><p onClick={()=>termekModalShow(m.termekId,key,index)}>Termék azonosító: <i>{m.termekId}</i></p></div>
                              )
                            })}
                            <Card.Text><i><b>Összeg: {value.osszeg} Ft</b></i></Card.Text>
                            <Card.Text><i><b>Státusz: {value.lezart?"Lezárt":value.aktiv?"Feldolgozva":"Feldolgozás alatt"} </b></i></Card.Text>
                            <p>Rendelve: {value.datum}.</p>
                           
                            <Button style={{display:value.aktiv?"none":""}} className="bg-dark" onClick={deleteBtn} value={value._id}>Törlés</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title >Felhasználó adatai</Modal.Title>
                       
                       
                    </Modal.Header>
                    <Modal.Body > 
                            <p>Név: {felhasznalo.nev}</p>
                            <p>Cím: {felhasznalo.cim}</p>
                            <p>Email: {felhasznalo.email}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Kilépés
                        </Button>
                        
                    </Modal.Footer>
                </Modal>

                <Modal show={termekshow} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title >Termék adatai</Modal.Title>
                       
                       
                    </Modal.Header>
                    <Modal.Body > 
                      <div style={{textAlign:"center"}}>
                            <img style={{width:"100px",height:"100px",marginBottom:"5px"}} src={felhasznalo.link} alt={felhasznalo.link} />
                            <p><b>Termék neve:</b> {felhasznalo.termekNev}</p>
                            <p><b>Ár:</b> {felhasznalo.Ar}</p>
                            <p><b>Darab: </b>{darab}</p>
                            <p><b>Méret: </b>{meret}</p>
                            </div>  
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Kilépés
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
                </div>
            )
 }
 else{
   return("");
 } })}
    
        </Row>
        </div>
    )

}

export default Elozmeny
