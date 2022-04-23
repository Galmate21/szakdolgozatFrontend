import { Form, Button,Nav} from 'react-bootstrap';
import '../Css/Bejelentkezes.css';
import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Bejelentkezes=()=> {
  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState("");
  const [loading,setLoading]=useState(false);
  const [error, setError] = useState(false);
  const [kosartart,setkosartart]=useState([])
  

  useEffect(()=>{
    const cartItem=JSON.parse(localStorage.getItem('cart'))
    if(cartItem){
      setkosartart(cartItem)
      toast.error("Figyelem! A kosarában "+cartItem.length+" termék található.", {
        position: "top-center"
      }); 
    }
   

  },[])

  useEffect(()=>{
    const userinfo=localStorage.getItem("userinfo");
    if(userinfo){
      window.location.assign("/");
      
      
    }
   
  },[]);



  function validateForm() {
    return email.length > 0 && jelszo.length >= 8;
  }

  const handleSubmit=async(e)=> {
    e.preventDefault();
    
    try {
      const config={
        headers:{
          "Content-type":"application/json"
        }
      }
      setLoading(true)
      const {data}=await axios.post('http://localhost:5501/felhasznalo/login',{
        email,jelszo
      },config)
  
localStorage.setItem('userinfo',JSON.stringify(data))
setError(false)
window.location.assign("/")
      
    } catch (error) {
      
      setError(true)
      
      
      
    }
    setLoading(false)
    
  }

  const errorMessage = () => {
    return (
      <div
        className="bg-danger text-light text-center"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Hibás email vagy jelszó!</h1>
      </div>
    );
  };


  
  return (
    <div className="Login" style={{ backgroundColor:"white"}}>
      <Nav.Link href="/kosar">
<Button style={{marginLeft:"15px",marginTop:"5px",fontSize:"25px",backgroundColor:"",borderRadius:"50%"}}>
      
      <svg style={{backgroundColor:"",borderRadius:"30%"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<span style={{backgroundColor:"", width:"20px",height:"20px",borderRadius:"50%"}}>{kosartart.length}</span>
</Button></Nav.Link>
      {loading && <Loading />} {errorMessage()}
      <Form onSubmit={handleSubmit}>
        <Form.Group id="ep" size="md" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group id='ep' size="md" controlId="password" >
          <Form.Label>Jelszó</Form.Label>
          <Form.Control
            placeholder='Jelszó'
            type="password"
            value={jelszo}
            onChange={(e) => setJelszo(e.target.value)}
          />
        </Form.Group>
        <Button id='btn_login' size="md" type="submit" disabled={!validateForm()}>
          Bejelentkezés
        </Button>

        <p className="profil"> Még nincs profilja?<Link to="/Regisztracio">Ide</Link> kattintva regisztrálhat!</p>
      </Form>
     
      <ToastContainer />
        
       
      
      
    </div>
  );
}

export default Bejelentkezes;