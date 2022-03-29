import "../Css/Kiegeszitok.css";
import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';




function Kiegeszitok() {
  const [show] = useState(true);
  return (
    <div className="Kiegeszitok">
      <h1 className="cimtermek">Kiegészítők</h1>
      <Alert show={show} variant="dark" >
        <p>
          Hamarosan!!
        </p>
        <div className="btn_errorpage">
          <Button href="/" variant="dark">
            Vissza a főoldalra
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default Kiegeszitok;