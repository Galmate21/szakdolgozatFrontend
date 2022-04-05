import { Card, Row, Button, Col, Form } from "react-bootstrap";
import "../Css/Pulcsi.css";

import axios from 'axios';

import {useState, useEffect} from "react";






function Pulover() {
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
  const [kep, setkep]=useState([])
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
  

  return (
    <div>
      <h1 className="cimtermek">Pulóverek</h1>
      <Row xs={1} md={3} className="g-4" >
      
 {kep.map((value)=>{
     if(value.Tipus=="Pulóver"){
      return(
        <div >
          <Card border="dark">
            <Card.Img variant="top" className="img-thumbnail" style={{height:"500px"}} img src={value.link} />
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
              <Button id="btn_Pulcsi" variant="dark">Rendelés</Button>
             
            </Card.Body>
            <Button style={{
          display: admin ? '' : 'none',
        }} className="bg-danger" id="btn_Pulcsi_del">Törlés</Button>
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