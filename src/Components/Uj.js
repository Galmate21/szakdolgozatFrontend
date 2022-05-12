import React from 'react'
import { Row, Form,Button,CloseButton} from 'react-bootstrap'
import {useState,useEffect} from 'react';
import axios from 'axios';

function Uj() {

    useEffect(()=>{
        const userinfo=localStorage.getItem("userinfo");
        var data=JSON.parse(userinfo);
        if(userinfo){
        if(!data.isAdmin){
          window.location.assign("/errorpage")
         
        }
       
      }
      else{
          window.location.assign("/bejelentkezes")
      }
        
       
      },[]);
    

    const [termekNev,SettermekNev]=useState("")
    const [Ar,SetAr]=useState("")
    const [Tipus,SetTipus]=useState("")
    const [link,setlink]=useState("")
    const [meret,setMeret]=useState([])
    const [ujmeret,setUjmeret]=useState("")
   

    const postDentails=(pics)=>{
        if(pics.type==='image/jpeg'||pics.type==='image/png'){
          const adat=new FormData();
          adat.append('file',pics);
          adat.append('upload_preset','szakdoga');
          adat.append('cloud_name','gb-web');
          fetch("https://api.cloudinary.com/v1_1/gb-web/image/upload", {
            method:"post",
            body:adat,
          }).then((res)=>res.json()).then((adat)=>{
            console.log(adat);
            setlink(adat.url.toString())
           
          })
        }
      }
  
      const delMeret = (item) => {
        setMeret((prevState) =>
          prevState.filter((prevItem) => prevItem !== item)
        );
       
      };
  
      const meretHozzaadas=function(){
        if (meret.includes(ujmeret)) {
          return;
        }
        const ujLista=meret.concat(ujmeret).sort();
        setMeret(ujLista)
        
        
      }
    const feltoltes=async(e)=>{
        e.preventDefault();
        if (window.confirm("Biztos hozzáadod ezt terméket?")){

            try {
                const config={
                  headers:{
                    "Content-type":"application/json"
                  }
                }
               await axios.post(`http://localhost:5501/termekek`,{
                termekNev,Ar,meret,Tipus,link
              },config)
              alert("Sikeresen hozzáadtál egy új terméket!")
              window.location.assign("/")
                
              } catch (error) {
                alert("Hiba!")
              }
              
            }
           
            }  

        
    
      
    return (
        <div>
            <Row>
                <Form onSubmit={feltoltes}>
                    <img style={{height:"350px",width:"350px"}} alt='Nincs kiválasztva kép' src={link}/>
                    <Form.Group>
                        <Form.Label>Termék:</Form.Label>
                        <Form.Control type="text" value={termekNev} placeholder="Pl. Pulóver" onChange={(e)=>SettermekNev(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Ár:</Form.Label>
                        <Form.Control type="number" value={Ar} placeholder="Pl. (Ft)" onChange={(e)=>SetAr(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tipus:</Form.Label>
                        <Form.Select onChange={(e)=>SetTipus(e.target.value)}>
                            <option>Válassz..</option>
                            <option value="Póló">Póló</option>
                            <option value="Pulóver">Pulóver</option>
                            <option value="Nadrág">Nadrág</option>
                            <option value="Kabát">Kabát</option>
                            <option value="Cipő">Cipő</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group id="ep" size="md" controlId="meret">
        <Form.Label>Méretek:</Form.Label>
        {meret.map((m,index)=>{
          
          return(<div>{m} <CloseButton className='' key={index} size="sm" onClick={() =>delMeret(m)}> </CloseButton></div>)
        })
        }
        <br />
        <Form.Control
            autoFocus
            placeholder="Új méret hozzáadása pl. S vagy cipő eseték 42"
            type="text"
            value={ujmeret}
            onChange={(e) => setUjmeret(e.target.value.toUpperCase())}
          />
   
          <br />
          <Button size="sm" onClick={meretHozzaadas}>Hozzáadás</Button>
        </Form.Group>
                    <Form.Group controlId="pic" className="mb-3">
    <Form.Label>Kép:</Form.Label>
    <Form.Control onChange={(e)=>postDentails(e.target.files[0])}
    
    type="file"
     />
  </Form.Group>
  <Button type="submit">Termék hozzáadása</Button>

                </Form>
            </Row>
        </div>
    )
}

export default Uj
