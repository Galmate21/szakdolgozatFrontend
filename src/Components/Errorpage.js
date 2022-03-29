import { Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import '../Css/Errorpage.css';

function Errorpage() {
    const [show] = useState(true);
    return (
        <div className='ErrorpageAlert'>
            <Alert show={show} variant="dark" >
                <Alert.Heading >Figyelmeztetés</Alert.Heading>
                <p>
                    Az oldal nem található!!
                </p>
                <div className="btn_errorpage">
                    <Button href="/"  variant="dark">
                        vissza a főoldalra
                    </Button>
                </div>
            </Alert>
        </div>
    );
}





export default Errorpage;