import { Form, Button} from 'react-bootstrap';
import '../Css/Bejelentkezes.css';
import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';






const Bejelentkezes=()=> {
  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState("");
  const [loading,setLoading]=useState(false);

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
    console.log(email,jelszo);
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
  console.log(data);
localStorage.setItem('userinfo',JSON.stringify(data))
      
    } catch (error) {
      alert("Hibás név vagy jelszó!")
    }
    setLoading(false)
    window.location.reload();
  }

  return (
    <div className="Login" style={{ backgroundColor:"white"}}>
    
      {loading && <Loading />}
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
        <Button id='btn_login' block size="md" type="submit" disabled={!validateForm()}>
          Bejelentkezés
        </Button>

        <p className="profil"> Még nincs profilja?<Link to="/Regisztracio">Ide</Link> kattintva regisztrálhat!</p>
      </Form>
     
    
        
       
      
      
    </div>
  );
}

export default Bejelentkezes;