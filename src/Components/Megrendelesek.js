import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Card, Row,Button,Modal} from 'react-bootstrap'


function Megrendelesek() {

    const[megrendelesek,setmegrendelesek]=useState([])
    
    const userinfo=JSON.parse(localStorage.getItem("userinfo"));
    const [show, setShow] = useState(false);
    const [felhasznalo,setfelhasznalo]=useState([])
    const [termekshow,SetTermekshow]=useState(false)
    const [darab,setdarab]=useState(0)
    const [meret,setmeret]=useState("")

    const handleClose = () => {setShow(false);
    setfelhasznalo([])
    SetTermekshow(false)
  }
   
   
  useEffect(()=>{
   
    if(userinfo){
      if (userinfo.isAdmin) {
        
        return;
      }
      window.location.assign('/')
    }
    else{
        window.location.assign('/bejelentkezes')
     
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

      const rendelesFogadas=async(id)=>{
        try {
          const config={
            headers:{
              "Content-type":"application/json"
            }
          }
         await axios.put(`http://localhost:5501/megrendelesek/${id}`,{
          
        },config)
        alert("Sikeresen fogadta ezt a rendel??st!")
        window.location.reload();
       
        } catch (error) {
          alert("Hiba!")
        }


      }

      const Lezaras=async(id)=>{
        try {
          const config={
            headers:{
              "Content-type":"application/json"
            }
          }
          await axios.put(`http://localhost:5501/megrendelesekLez/${id}`,{
          
        },config)
        alert("Sikeresen lez??rta ezt a rendel??st!")
        window.location.reload();
        } catch (error) {
          alert("Hiba!")
        }

      }


       async function deleteBtn (event) {
        var id = event.target.value;
        if (window.confirm("Biztos t??rl??d ezt a megrendel??st?")){
        axios({
          method: 'delete',
          url: `http://localhost:5501/megrendelesek/${id}`,
          responseType: 'json'
        })
          .then((response)=> {
            alert(JSON.stringify(response.data)+" Sikeresen t??r??lve!")
            window.location.reload();
          });
        }
    }

   
    return (
        <div>
        <h1 className="cimtermek">Megrendel??sek</h1>
        <Row xs={1} md={3} className="g-4">
        {megrendelesek.map((value,key)=>{
           
           
                
            
            return(
                <div key={key}>
                    <Card className={value.lezart?"bg-danger":value.aktiv?"bg-success":"bg-warning"} border="dark">
                        <Card.Body>
                        <Card.Text className="text-light"><b>Azonos??t??: {value._id}</b></Card.Text>
                            <Card.Title>{value.nev}</Card.Title>
                            <Card.Text onClick={()=>handleShow(value.felhasznalo)}>Megrendel?? azonos??t??ja: <b>{value.felhasznalo}</b></Card.Text>
                            <Card.Text><b>Megrendelt term??kek:</b></Card.Text>
                            {value.megrendelt_termekek.map((m,index)=>{
                              return(
                                <div key={index}><p onClick={()=>termekModalShow(m.termekId,key,index)}>Term??k azonos??t??: <i>{m.termekId}</i></p></div>
                              )
                            })}
                            <Card.Text><i><b>??sszeg: {value.osszeg} Ft</b></i></Card.Text>
                            
                            
                            <Button style={{marginRight:"7px",display:value.aktiv?"none":""}} className="bg-dark" onClick={()=>rendelesFogadas(value._id)} value={value._id}>Rendel??s fogad??sa</Button>
                            <Button style={{marginRight:"7px",display:value.lezart?"none":value.aktiv?"":"none"}} className="bg-dark" onClick={()=>Lezaras(value._id)} value={value._id}>Rendel??s lez??r??sa</Button>
                            <Button className="bg-dark" onClick={deleteBtn} value={value._id}>T??rl??s</Button>
                        </Card.Body>
                    </Card>
                    <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title >Felhaszn??l?? adatai</Modal.Title>
                       
                       
                    </Modal.Header>
                    <Modal.Body > 
                            <p>N??v: {felhasznalo.nev}</p>
                            <p>C??m: {felhasznalo.cim}</p>
                            <p>Email: {felhasznalo.email}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Kil??p??s
                        </Button>
                        
                    </Modal.Footer>
                </Modal>

                <Modal show={termekshow} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title >Term??k adatai</Modal.Title>
                       
                       
                    </Modal.Header>
                    <Modal.Body > 
                      <div style={{textAlign:"center"}}>
                            <img style={{width:"100px",height:"100px",marginBottom:"5px"}} src={felhasznalo.link} alt={felhasznalo.link} />
                            <p><b>Term??k neve:</b> {felhasznalo.termekNev}</p>
                            <p><b>??r:</b> {felhasznalo.Ar}</p>
                            <p><b>Darab: </b>{darab}</p>
                            <p><b>M??ret: </b>{meret}</p>
                            </div>  
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleClose}>
                            Kil??p??s
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
                </div>
            )
        })}
    
        </Row>
        </div>
    )

}

export default Megrendelesek
