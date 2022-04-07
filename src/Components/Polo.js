import { Card, Row, Button, Form } from "react-bootstrap";
import "../Css/Polo.css";
import axios from 'axios';
import {useState, useEffect} from "react";





function Polo() {
  const [kep, setkep]=useState([])
  const [admin, setAdmin] = useState(false);
  

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
     responseType: 'stream'
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
        responseType: 'stream'
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
  return (
    <div>
      <h1 className="cimtermek">Pólók</h1>
      <Row xs={1} md={4} className="g-4">
      
 {kep.map((value)=>{
     if(value.Tipus==="Póló"){
      return(
        <div>
          <Card border="dark">
            <Card.Img variant="top" className="img-thumbnail" style={{height:"450px"}} img src={value.link} />
            <Card.Body>
              <Card.Title><p>{value.termekNev}</p></Card.Title>
              <Card.Text>
                Férfi
                <h6>{value.Ar} Ft</h6>
              </Card.Text>
              <Form.Select aria-label="Default select example">
              <option>Válasz méretet</option>
              
              {value.meret.map((meret)=>{
                return(<option value={meret}>{meret}</option>)
              })}
              </Form.Select>
              <br />
              <Button id="btn_polo" variant="dark">Rendelés</Button>
            </Card.Body>
            <Button style={{
          display: admin ? '' : 'none',
        }} className="bg-danger delete-product" onClick={deleteBtn} id="btn_polo_del" value={value._id}>Törlés</Button><br />
        
        <Button style={{
         display: admin ? '' : 'none',
       }} className="bg-warning text-dark edit-product" key={value._id} onClick={() => edit(value._id)} id="btn_Pulcsi_edit" value={value._id}>Szerkesztés</Button>
          </Card>
          <br />
        
          </div>
    
     )
    }
    
   
 })}
 
    </Row>
    </div>
    
  );
}

export default Polo;