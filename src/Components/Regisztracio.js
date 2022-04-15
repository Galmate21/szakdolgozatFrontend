import { useState,useEffect } from 'react';
import {Button,Nav} from 'react-bootstrap';
import '../Css/Regisztracio.css';
import axios from 'axios';
import Loading from './Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Regisztracio() {

  // jó
  const [nev, setNev] = useState('');
  const [email, setEmail] = useState('');
  const [jelszo, setJelszo] = useState('');
  const [cim, setCim] = useState('');
  const [felhasznalonev, setFelhasznalonev] = useState('');
  const [Confpassword, setConfpassword] = useState('');
  const [loading, setLoading] = useState('');
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

  

  //rossz
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setNev(e.target.value);
    setSubmitted(false);
  };

  const handlefName = (e) => {
    setFelhasznalonev(e.target.value);
    setSubmitted(false);
  };

  const handleAddress = (e) => {
    setCim(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setJelszo(e.target.value);
    setSubmitted(false);
  };
  const handleConfPassword = (e) => {
    setConfpassword(e.target.value);
    setSubmitted(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nev === '' || email === '' || jelszo === ''||felhasznalonev===''|| cim===''||Confpassword==='') {
     
      setError(true);
      return;
    } else {
      if (jelszo!==Confpassword||jelszo.length<8) {
        
        setError(true);
        return;
      }
      
      try {
        const config={
          headers:{
            "Content-type":"application/json"
          }
        }
        setLoading(true)
        const {data}=await axios.post('http://localhost:5501/felhasznalo',{
          nev,cim,felhasznalonev,jelszo,email
        },config)
    
  
  setError(false)
  alert(data.uzenet)
  window.location.assign("/Bejelentkezes")
        
      } catch (error) {
        
        setError(true)
        
        
        
      }
      setLoading(false)

      setSubmitted(true);
      setError(false);
    }
  };

  // Sikeres regisztrácio
  const successMessage = () => {
    return (
      <div
        className="bg-success text-light"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h2>{nev}  sikeresen regisztrálva!</h2>
      </div>
    );
  };

  // Sikertelen regisztráció
  const errorMessage = () => {
    return (
      <div
        className="bg-danger text-light"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>A regisztráció meghiúsult, kérem ellenőrizze az adatokat!</h1>
      </div>
    );
  };

  return (
    <div>          <Nav.Link href="/kosar">
    <Button style={{marginLeft:"15px",marginTop:"5px",fontSize:"25px",backgroundColor:"",borderRadius:"50%"}}>
          
          <svg style={{backgroundColor:"",borderRadius:"30%"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
    <span style={{backgroundColor:"", width:"20px",height:"20px",borderRadius:"50%"}}>{kosartart.length}</span>
    </Button></Nav.Link>
    <div className="form">
 
      <div>
        <h1>Regisztráció</h1>
      </div>
      {loading && <Loading />}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <label className="label" >Név</label>
        <input placeholder='Név' onChange={handleName} className="input"
          value={nev} type="text" />

  <label className="label" >Cím</label>
        <input placeholder='Cím' onChange={handleAddress} className="input"
          value={cim} type="text" /> 

<label className="label" >Felhasználónév</label>
        <input placeholder='Felhasználónév' onChange={handlefName} className="input"
          value={felhasznalonev} type="text" />

        <label className="label">Email</label>
        <input placeholder='Email' onChange={handleEmail} className="input"
          value={email} type="email" />

        <label className="label">Jelszó</label>
        <input placeholder='Jelszó min. 8 karakter' onChange={handlePassword} className="input"
          value={jelszo} type="password" />

          
        <label className="label">Jelszó megerősítése</label>
        <input placeholder='Jelszó megerősítése' onChange={handleConfPassword} className="input"
          value={Confpassword} type="password" />
      </form>
      <button onClick={handleSubmit} className="btn2" type="submit">
        Regisztráció
      </button>
      <ToastContainer />
    </div>
    </div>
  );
}