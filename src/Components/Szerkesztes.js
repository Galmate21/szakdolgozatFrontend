import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Card, Row, Button, Form } from "react-bootstrap";
function Szerkesztes(props) {
    const params = useParams();
    const id = params.termekId;
    const [termek, setTermek] = useState([]);
    const [isPending, setPending] = useState(false);
    useEffect(()=>{
        axios({
          method: 'get',
          url: `http://localhost:5501/termekek/${id}`,
          responseType: 'json'
        })
          .then((response)=> {
            setTermek(response.data)
            
          });
       },[])
      
    return (
        <div>
           <Row xs={1} md={4} className="g-4 ">
        <Card border="dark" className="">
        <Card.Img variant="top" className="img-thumbnail" style={{height:"300px"}}  img src={termek.link} />
        
        <Card.Body className="text-center">
        <p className="text-secondary">Termék azonosító: {termek._id}</p>
        
            
          
          <p>Termék:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" value={termek.termekNev}/></p>
          <p>Termék ár:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="number" value={termek.Ar}/> Ft</p>
          <p>Termek típus: <input type="text" value={termek.Tipus}/></p>
          <p>Termek kép:&nbsp;&nbsp;&nbsp; <input type="text" value={termek.link}/></p>
          
        
        </Card.Body>
        </Card>
        </Row>
        </div>
    )
}

export default Szerkesztes;
