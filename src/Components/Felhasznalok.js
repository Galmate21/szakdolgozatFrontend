import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Card, Row,Button} from 'react-bootstrap'
import { log } from 'async';

function Felhasznalok() {

    const[felhasznalok,setFelhasznalok]=useState([])
    const [admin,setAdmin]=useState(false)
    const userinfo=localStorage.getItem("userinfo");
   
    var d=JSON.parse(userinfo);
  useEffect(()=>{
   
    if(userinfo){
      if (d.isAdmin) {
        setAdmin(true)
        return;
      }
      window.location.assign('/')
    }
    else{
        window.location.assign('/bejelentkezes')
     
    }
 
  },[]);
    useEffect(()=>{
        axios({
          method: 'get',
          url: 'http://localhost:5501/felhasznalok',
          responseType: 'json'
        })
          .then((response)=> {
            setFelhasznalok(response.data)
            
          });
       },[])

       async function deleteBtn (event) {
        var id = event.target.value;
        if (window.confirm("Biztos törlöd ezt a felhasználót?")){
        axios({
          method: 'delete',
          url: `http://localhost:5501/felhasznalok/${id}`,
          responseType: 'json'
        })
          .then((response)=> {
            alert(JSON.stringify(response.data)+" Sikeresen törölve!")
            window.location.reload();
          });
        }
    }

    async function jogemelesBtn (event) {
        var id = event.target.value;
        if (window.confirm("Biztos jogosultságfosztást akar végzehajtani ezen a felhasználón?")){
        axios({
          method: 'put',
          url: `http://localhost:5501/allapotfel/${id}`,
          responseType: 'json'
        })
          .then((response)=> {
            alert(JSON.stringify(response.data._id)+" Sikeresen adminisztrátor lett!")
            window.location.reload();
          });
        }
    }

    async function jogfosztasBtn (event) {
        var id = event.target.value;
        if (window.confirm("Biztos jogosultságemelést akar végzehajtani ezen a felhasználón?")){
        axios({
          method: 'put',
          url: `http://localhost:5501/allapotle/${id}`,
          responseType: 'json'
        })
          .then((response)=> {
            alert("Sikeresen lefokozta "+id+" azonosítójú felhasználót!")
            window.location.reload();
          });
        }
    }
    return (
        <div>
        <h1 className="cimtermek">Felhasználók</h1>
        <Row xs={1} md={3} className="g-4">
        {felhasznalok.map((value)=>{
           
            if (value._id!=d._id) {
                
            
            return(
                <div>
                    <Card className={value.isAdmin?"bg-danger":"bg-warning"} border="dark">
                        <Card.Body>
                        <Card.Text className="text-light"><b>Azonosító: {value._id}</b></Card.Text>
                            <Card.Title>{value.nev}</Card.Title>
                            <Card.Text>{value.email}</Card.Text>
                            <Card.Text>{value.cim}</Card.Text>
                            <Card.Text>{value.felhasznalonev}</Card.Text>
                            <Button className="bg-info" style={{display:value.isAdmin?"none":""}} onClick={jogemelesBtn} value={value._id}>Jogusultságemelés</Button>&nbsp;&nbsp;
                            <Button className="" style={{display:value.isAdmin?"":"none"}} onClick={jogfosztasBtn} value={value._id}>Jogosultságfosztás</Button>&nbsp;&nbsp;
                            <Button className="bg-dark" onClick={deleteBtn} value={value._id}>Törlés</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        }})}
    
        </Row>
        </div>
    )

}

export default Felhasznalok
