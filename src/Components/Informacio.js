import "../Css/Informacio.css";
import {ListGroup} from 'react-bootstrap';


function Informacio() {
  return (
    <div className="Informacio" >
      <ListGroup>
        <ListGroup.Item id="open">Nyitvatartás</ListGroup.Item>
        <ListGroup.Item>Hétfő:  07-17</ListGroup.Item>
        <ListGroup.Item>Kedd:  07-17</ListGroup.Item>
        <ListGroup.Item>Szerda:  07-17</ListGroup.Item>
        <ListGroup.Item>Csütörtök:  07-17</ListGroup.Item>
        <ListGroup.Item>Péntek:  07-17</ListGroup.Item>
        <ListGroup.Item id="close">Szombat:  Zárva</ListGroup.Item>
        <ListGroup.Item id="close">vasárnap:  Zárva</ListGroup.Item>
        
      </ListGroup>
      



    </div>
  );
}

export default Informacio;