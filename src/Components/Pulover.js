import { Card, Row, Button, Form } from "react-bootstrap";
import "../Css/Pulcsi.css";


import axios from 'axios';

import {useState, useEffect} from "react";






function Pulover() {
  const [admin, setAdmin] = useState(false);
  
  const [ujmeret,setujMeret]=useState("")
  
  
  
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
  const [kep, setkep]=useState([])
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

        if (item) {
          item.mennyiseg += 1;
          
        }else{
          items.push({
            termekId:id,
            meret:ujmeret,
            mennyiseg:1,
            Ar:ar
          })
        }
       
        localStorage.setItem('cart', JSON.stringify(items));
 
         
        
      }

     
  return (
    <div>
      <h1 className="cimtermek">Pulóverek</h1>
      <Row xs={1} md={3} className="g-4" >
      
 {kep.map((value)=>{
     if(value.Tipus==="Pulóver"){
      return(
        <div >
          <Card border="dark">
            <Card.Img variant="top" className="img-thumbnail" style={{height:"500px",width:"500px"}} img src={value.link} />
            <Card.Body>
              <Card.Title><p>{value.termekNev}</p></Card.Title>
              <Card.Text>
                Férfi
                <h6>{value.Ar} Ft</h6>
              </Card.Text>
              <Form.Select onChange={(e)=>setujMeret(e.target.value)} aria-label="Default select example">
              <option>Válasz méretet</option>
              {value.meret.map((meret)=>{
                return(<option value={meret}>{meret}</option>)
              })}
              </Form.Select>
              <Button id="btn_Pulcsi"  onClick={() => kosarhoz(value._id,value.Ar)} variant="dark">Rendelés</Button>
             
            </Card.Body>
            <Button style={{
          display: admin ? '' : 'none',
        }} className="bg-danger delete-product" onClick={deleteBtn} id="btn_Pulcsi_del" value={value._id}>Törlés</Button><br />
        
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

export default Pulover;