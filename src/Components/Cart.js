import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Table,Button} from "react-bootstrap";





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

     

  return (
    <div>
         <Table striped bordered hover>
                        
        <h2>{ures}</h2>
         {kosar.map((value)=>{
             return(
             termek.map((t)=>{
                 if(value.termekId===t._id){
                    osszeg+=value.mennyiseg*t.Ar
                     return(
                        
                        <tbody>
                          <tr>
                            
                            <td><img src={t.link} style={{width:"100px",height:"100px"}} alt={t.link} /></td>
                            <td>{t.termekNev}</td>
                            <td>{value.meret}</td>
                            <td>{value.mennyiseg}</td>
                            <td>x</td>
                            <td>{t.Ar} Ft</td>
                          </tr>
                          
                        </tbody>
                     
                   )
                   
                 }
                

            }))
         })}
          </Table>
          <h1>Összeg: {osszeg} Ft</h1>
          <Button>Hozzáadás</Button>
    </div>
  )
}

export default Cart