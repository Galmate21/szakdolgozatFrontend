import { Card, Row, Button, Col, Form } from "react-bootstrap";
import "../Css/Polo.css";
import axios from 'axios';
import {useState, useEffect} from "react";





function Polo() {
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
      <h1 className="cimtermek">Pólók</h1>
      <Row xs={1} md={4} className="g-4">
      
 {kep.map((value)=>{
     if(value.Tipus=="Póló"){
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