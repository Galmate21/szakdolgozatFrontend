import "../Css/Cipo.css";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import axios from 'axios';
import {useState, useEffect} from "react";

function Cipo() {

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
    <div className="Cipo">
      <h1 className="cimtermek">Cipők</h1>
      <Row xs={1} md={3} className="g-4">
        
      {kep.map((value)=>{
     if(value.Tipus=="Cipő"){
      return(
        <div>
          <Card border="dark">
            <Card.Img variant="top" className="img-thumbnail"  img src={value.link} />
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
              <Button id="btn_cipo" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
              <br />
          </div>
    
     )
    }
    
   
 })}
 
    </Row>
    </div>

  )}


export default Cipo;