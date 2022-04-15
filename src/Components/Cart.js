import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Table,Button,Nav} from "react-bootstrap";
import '../Css/Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Cart() {
    const [kosar,setkosar]=useState([])
    const [termek,settermek]=useState([])
    const [user,setuser]=useState([])
    const [ures,setures]=useState("")
    const [nof,setnof]=useState(false)
    var osszeg=0;
    useEffect(()=>{
        const cartItem=JSON.parse(localStorage.getItem('cart'))
        if(cartItem){
          setkosar(cartItem)
          
        }
        else{
            setures("A kosara jelenleg üres!")
        }
       
      },[])

      useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://localhost:5501/termekek',
            responseType: 'json'
          })
            .then((response)=> {
              settermek(response.data)
              
            });
      },[])

      useEffect(()=>{
        const userinfo=localStorage.getItem("userinfo");
        if(userinfo){
        setuser(JSON.parse(userinfo))
        setnof(true)
      }
  
    },[]);

const novel=(i)=>{
  kosar[i].mennyiseg=kosar[i].mennyiseg+1
  
  setkosar([...kosar])
  localStorage.setItem('cart',JSON.stringify(kosar))
}


const csokkent=(i,id)=>{
  kosar[i].mennyiseg=kosar[i].mennyiseg-1
  
  setkosar([...kosar])
 
  localStorage.setItem('cart',JSON.stringify(kosar))
  if(kosar[i].mennyiseg<1){
    kosar.splice(i,1)
  
   setkosar([...kosar])
   localStorage.setItem("cart",JSON.stringify(kosar))
   if(kosar.length===0){
     localStorage.removeItem("cart")
     setures("A kosara jelenleg üres!")
   }
    
  }
}

const rendelesFelvetel=async()=>{

  try {
    const config={
      headers:{
        "Content-type":"application/json"
      }
    }
    const {data}=await axios.post(`http://localhost:5501/megrendelesek/${user._id}`,{
    felhasznalo:user._id,
    megrendelt_termekek:kosar,
    osszeg:osszeg,

  },config)

  localStorage.removeItem('cart');
  
  toast.success("Sikeres rendelés! Rendelését hamarosan készítjük.", {
    position: "bottom-left"
  }); 
  setures("A kosara jelenleg üres!")
  setTimeout(function () {
    window.location.assign("/"); 
 }, 4000);
    
  } catch (error) {
    alert("Hiba!")
  }
}
     

  return (
    <div>
         
         <Table striped bordered hover>
                        
        <h2>{ures}</h2>
         {kosar.map((value,key)=>{
             return(
             termek.map((t)=>{
                 if(value.termekId===t._id){
                    osszeg+=value.mennyiseg*t.Ar
                    
                     return(
                        
                        <tbody className="cart-container">
                          <tr>
                            
                            <td><img src={t.link} style={{width:"100px",height:"100px",border:"solid 1px black"}} alt={t.link} /></td>
                            <td style={{padding:"35px"}}><b>{t.termekNev}</b></td>
                            <td style={{fontStyle:"italic",padding:"35px"}}>{value.meret}</td>
                            <td key={key} onClick={()=>novel(key)} style={{padding:"35px"}}><b>+</b></td>
                            <td style={{padding:"35px"}}>{value.mennyiseg} </td>
                            <td onClick={()=>csokkent(key,t._id)} style={{padding:"35px"}}><b>-</b></td>
                            <td style={{padding:"35px"}}><b>x</b></td>
                            <td style={{textAlign:"left",padding:"35px"}}>{t.Ar} Ft</td>
                          </tr>
                         
                        </tbody>
                     
                   )
                   
                 }
                

            }))
         })}
          </Table>
         
        <h3 style={{fontSize:"20px"}}>Összeg: <span style={{fontStyle:"italic",fontSize:"25px"}}>{osszeg} Ft</span> </h3>
        <Button className="vissza" style={{backgroundColor:"white", borderColor:'white',color:'blue',float:'right'}}  onClick={() => window.history.back()}>Vásárlás folytatása</Button>
        
        <h4  style={{
          display: nof ? 'none' : '',
        }}>A rendelés folytatásához be kell jelentkezned!</h4>
        <Button style={{
          display: nof ? 'none' : '',
        }} className="rendeles_gomb" onClick={() => window.location.assign("/Bejelentkezes")}>Bejelentkezés</Button>
         
          
        <div style={{textAlign:'center',marginBottom:"80px", border:'1px solid black',marginTop:"50px", display: nof ? '' : 'none'}}>
          
          <h2>Felhasználói adatok</h2>
          <h6>Név: {user.nev}</h6>
          <h6>Cím: {user.cim}</h6>
          <h6>Email: {user.email}</h6>
          <br  />
          <Button style={{
          display: ures ? 'none' : '',
        }} className="rendeles_gomb" onClick={rendelesFelvetel}>Rendelés leadása</Button>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Cart