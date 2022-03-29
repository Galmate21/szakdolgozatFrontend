import { useState } from 'react';
import '../Css/Regisztracio.css';
export default function Regisztracio() {

  // jó
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //rossz
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Sikeres regisztrácio
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h2>{name}  sikeresen regisztrálva!</h2>
      </div>
    );
  };

  // Sikertelen regisztráció
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Kérem az összes mezőt kitölteni!</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Regisztráció</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        <label className="label" >Név</label>
        <input placeholder='Név' onChange={handleName} className="input"
          value={name} type="text" />

        <label className="label">Email</label>
        <input placeholder='Email' onChange={handleEmail} className="input"
          value={email} type="email" />

        <label className="label">Jelszó</label>
        <input placeholder='Jelszó' onChange={handlePassword} className="input"
          value={password} type="password" />
      </form>
      <button onClick={handleSubmit} className="btn2" type="submit">
        Regisztráció
      </button>
    </div>
  );
}