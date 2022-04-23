import "../Css/Cipo.css";
import { Card, Button, Form, Row, Nav } from "react-bootstrap";
import axios from 'axios';
import {useState, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cipo() {

  const [kep, setkep]=useState([])
  const [admin, setAdmin] = useState(false);
  const [kosartart,setkosartart]=useState([])
  const [ujmeret,setujMeret]=useState("")

  useEffect(()=>{
    const cartItem=JSON.parse(localStorage.getItem('cart'))
    if(cartItem){
      setkosartart(cartItem)
    }
   

  },[])


  useEffect(()=>{
    const userinfo=localStorage.getItem("userinfo");
    var data=JSON.parse(userinfo);
    
    if(userinfo){
    if(data.isAdmin){
      
     setAdmin(true)
    }
    else{
      
      setAdmin(false)
    }
  }
    
   
  },[]);
  useEffect(()=>{
   axios({
     method: 'get',
     url: 'http://localhost:5501/termekek',
     responseType: 'json'
   })
     .then((response)=> {
       setkep(response.data)
       
     });
  },[])

  async function deleteBtn (event) {
    var id = event.target.value;
    if (window.confirm("Biztos törlöd a terméket?")){
    axios({
      method: 'delete',
      url: `http://localhost:5501/termekek/${id}`,
      responseType: 'json'
    })
      .then((response)=> {
        alert(JSON.stringify(response.data)+" Sikeresen törölve!")
        window.location.reload();
      });
    }
}
function edit(id) {
  window.location.assign("/szerkesztes/"+id)
}

const kosarhoz=function(id,ar){
  var items = JSON.parse(localStorage.getItem('cart')) || [];
  var item = items.find(item => item.termekId === id&&item.meret===ujmeret);
  if(ujmeret===""||ujmeret==="Válasz méretet"){
    toast.error("Válassz méretet", {
      position: "top-center"
    }); 
    return;}
  if (item) {
    item.mennyiseg += 1;
    toast.info("Termék mennyiségének növelése", {
      position: "bottom-left"})
    
  }else{
    items.push({
      termekId:id,
      meret:ujmeret,
      mennyiseg:1,
      Ar:ar
    })
    toast.success("Termék hozzáadása a kosárhoz", {
      position: "bottom-left"
    }); 
    
  }
 
  localStorage.setItem('cart', JSON.stringify(items));
  setkosartart(items)
  setTimeout(function () {
    window.location.assign("/kosar"); 
 }, 4000);
 
}  
  return (
    <div className="Cipo">
       <Nav.Link href="/kosar">
<Button style={{marginLeft:"15px",marginTop:"5px",fontSize:"25px",backgroundColor:"",borderRadius:"50%"}}>
      
      <svg style={{backgroundColor:"",borderRadius:"30%"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<span style={{backgroundColor:"", width:"20px",height:"20px",borderRadius:"50%"}}>{kosartart.length}</span>
</Button></Nav.Link>
      <h1 className="cimtermek">Cipők</h1>
      <Row xs={1} sm={2} md={3} className="g-4">
        
      {kep.map((value,key)=>{
     if(value.Tipus==="Cipő"){
      return(
        <div key={key}>
          <Card border="dark">
            <Card.Img variant="top" className="img-thumbnail"  src={value.link} />
            <Card.Body>
              <Card.Title><p>{value.termekNev}</p></Card.Title>
              <Card.Text>
                Férfi <br />
                <b>{value.Ar} Ft</b>
              </Card.Text>
              <Form.Select onChange={(e)=>setujMeret(e.target.value)} aria-label="Default select example">
              <option>Válasz méretet</option>
              {value.meret.map((meret,i)=>{
                return(<option key={i} value={meret}>{meret}</option>)
              })}
              </Form.Select>
              <Button id="btn_cipo" onClick={() => kosarhoz(value._id,value.Ar)} variant="dark">Rendelés</Button>
            </Card.Body>
            <Button style={{
          display: admin ? '' : 'none',
        }} className="bg-danger delete-product" onClick={deleteBtn} id="btn_nadrag_del" value={value._id}>Törlés</Button><br />
        
        <Button style={{
         display: admin ? '' : 'none',
       }} className="bg-warning text-dark edit-product"  onClick={() => edit(value._id)} id="btn_Pulcsi_edit" value={value._id}>Szerkesztés</Button>
          </Card>
              <br />
          </div>
    
     )
    }
    
   
 })}
 
    </Row>
    <ToastContainer />
    </div>

  )}


export default Cipo;