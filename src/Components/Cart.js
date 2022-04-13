import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Table,Button,Nav} from "react-bootstrap";
import '../Css/Cart.css'




function Cart() {
    const [kosar,setkosar]=useState([])
    const [termek,settermek]=useState([])
    const [ures,setures]=useState("")
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
const novel=(i)=>{
  kosar[i].mennyiseg=kosar[i].mennyiseg+1
  
  setkosar([...kosar])
  localStorage.setItem('cart',JSON.stringify(kosar))
}

const csokkent=(i)=>{
  kosar[i].mennyiseg=kosar[i].mennyiseg-1
  
  setkosar([...kosar])
  localStorage.setItem('cart',JSON.stringify(kosar))
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
                            <td onClick={()=>csokkent(key)} style={{padding:"35px"}}><b>-</b></td>
                            <td style={{padding:"35px"}}><b>x</b></td>
                            <td style={{textAlign:"left",padding:"35px"}}>{t.Ar} Ft</td>
                          </tr>
                         
                        </tbody>
                     
                   )
                   
                 }
                

            }))
         })}
          </Table>
         
        <h3>Összeg: {osszeg} Ft</h3>
        <Button className="vissza" style={{backgroundColor:"white", borderColor:'white',color:'blue',float:'right'}}  onClick={() => window.history.back()} className="vissza">Vásárlás folytatása</Button>
        
         
          <Button className="rendeles_gomb">Hozzáadás</Button>
    </div>
  )
}

export default Cart