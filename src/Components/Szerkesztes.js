import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {Button, Form,CloseButton } from "react-bootstrap";
function Szerkesztes(props) {
    const params = useParams();
    const id = params.termekId;
    const [termek, setTermek] = useState([]);
    
    const [termekNev, setTermekNev] = useState("");
    const [Ar, setAr] = useState(0);
    const [Tipus, setTipus] = useState("");
    const [link, setlink] = useState("");
    const [meret,setMeret]=useState([]);
    const [ujmeret,setUjmeret]=useState("");
    const [meretTipus,setMeretTipus]=useState(false);


    
  useEffect(()=>{
    const userinfo=localStorage.getItem("userinfo");
    var d=JSON.parse(userinfo);
    if(!userinfo){
      window.location.assign("/bejelentkezes");
      
      
    }
    if(d.isAdmin===false){
      window.location.assign("/");
      
    }
   
  },[]);

    
    useEffect(()=>{
        axios({
          method: 'get',
          url: `http://localhost:5501/termekek/${id}`,
          responseType: 'json'
        })
          .then((response)=> {
            setTermek(response.data)
           setTermekNev(response.data.termekNev)
           setAr(response.data.Ar)
           setTipus(response.data.Tipus)
           setlink(response.data.link)
           setMeret(response.data.meret)
           if (response.data.Tipus==="Nadrág"||response.data.Tipus==="Cipő") {
             setMeretTipus(true)
             
           }
            
          });
       },[])
 
    

    const handleSubmit=async(e)=> {
      e.preventDefault();
      if (window.confirm("Biztos szerkeszted a terméket?")){
      try {
        const config={
          headers:{
            "Content-type":"application/json"
          }
        }
        const {data}=await axios.put(`http://localhost:5501/termekek/${id}`,{
        termekNev,Ar,meret,Tipus,link
      },config)
      alert("Sikeresen szerkesztetted"+ id+" terméket!")
      window.location.assign("/")
        
      } catch (error) {
        alert("Hiba!")
      }
      
    }
    else{window.history.back()}
    }  

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
    
    
    return (
        <div>
         
          <Form onSubmit={handleSubmit}>
          <img style={{height:"350px",width:"350px"}} alt='' src={link}/>
          <p className='text-secondary'>Termékazonosító: {id}</p>
        <Form.Group id="ep" size="md" controlId="termekNev">
          <Form.Label>Termék:</Form.Label>
          <Form.Control
            autoFocus
            placeholder={termek.termekNev}
            type="text"
            value={termekNev}
            onChange={(e) => setTermekNev(e.target.value)}
          />
        </Form.Group>
        <Form.Group id="ep" size="md" controlId="Ar">
          <Form.Label>Ár:</Form.Label>
          <Form.Control
            autoFocus
            placeholder={termek.Ar+" Ft"}
            type="number"
            value={Ar}
            onChange={(e) => setAr(e.target.value)}
          />
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
            type={meretTipus ? "number":"text"}
            value={ujmeret}
            onChange={(e) => setUjmeret(e.target.value)}
          />
   
          <br />
          <Button size="sm" onClick={meretHozzaadas}>Hozzáadás</Button>
        </Form.Group>
        <Form.Group id="ep" size="md" controlId="Tipus">
          <Form.Label>Típus:</Form.Label>
          <Form.Control
            autoFocus
            placeholder={termek.Tipus}
            type="text"
            value={Tipus}
            onChange={(e) => setTipus(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="pic" className="mb-3">
    <Form.Label>Kép:</Form.Label>
    <Form.Control onChange={(e)=>postDentails(e.target.files[0])}
    
    type="file"
     />
  </Form.Group>
  <Button type="submit">Módosítás</Button>
        </Form>
        </div>
    )
}

export default Szerkesztes;
