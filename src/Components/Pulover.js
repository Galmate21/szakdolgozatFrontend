import { Card, Row, Button, Col, Form } from "react-bootstrap";
import "../Css/Pulcsi.css";
import fehPulover from '../Img/Pulover.jpg';

import zPulover from '../Img/zPulover.jpg';
import sPulover from '../Img/sPulover.jpg';
import kPulover from '../Img/kPulover.jpg';
import lPulover from '../Img/lPulover.jpg';
import axios from 'axios';
import {Image} from "cloudinary-react";
import {useState, useEffect} from "react";







function Pulover() {
  const [kep, setkep]=useState([])
 useEffect(()=>{
  axios({
    method: 'get',
    url: 'http://localhost:5501/termekek',
    responseType: 'stream'
  })
    .then((response)=> {
      setkep(response.data)
      console.log("Sikereses")
    });
 },[])
  

  return (
    <div>
      <h1 className="cimtermek">Pulóverek</h1>
      <Row >
      
 {kep.map((value,key)=>{
   return(
    
    
    
      <div className="col-xl-4 col-lg-3 col-md-6 col-xs-12">
        <Card border="dark">
          <Card.Img variant="top" className="img-thumbnail" style={{height:"200px",width:"150px"}} img src={value.link} />
          <Card.Body>
            <Card.Title><p>{value.termekNev}</p></Card.Title>
            <Card.Text>
              Férfi
              <p>{value.Ar}</p>
            </Card.Text>
            <Form.Select aria-label="Default select example">
              <option>Válasz méretet</option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </Form.Select>
            <Button id="btn_Pulcsi" variant="dark">Rendelés</Button>
          </Card.Body>
        </Card>
      
        </div>
  
   )
 })}
 
    </Row>
    </div>
    
  );
}

export default Pulover;