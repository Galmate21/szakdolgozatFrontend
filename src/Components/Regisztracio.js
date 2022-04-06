import { useState } from 'react';
import '../Css/Regisztracio.css';
import axios from 'axios';
import Loading from './Loading';

export default function Regisztracio() {

  // jó
  const [nev, setNev] = useState('');
  const [email, setEmail] = useState('');
  const [jelszo, setJelszo] = useState('');
  const [cim, setCim] = useState('');
  const [felhasznalonev, setFelhasznalonev] = useState('');
  const [Confpassword, setConfpassword] = useState('');
  const [loading, setLoading] = useState('');

  

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
        <input placeholder='Jelszó' onChange={handlePassword} className="input"
          value={jelszo} type="password" />

          
        <label className="label">Jelszó megerősítése</label>
        <input placeholder='Jelszó megerősítése' onChange={handleConfPassword} className="input"
          value={Confpassword} type="password" />
      </form>
      <button onClick={handleSubmit} className="btn2" type="submit">
        Regisztráció
      </button>
    </div>
  );
}