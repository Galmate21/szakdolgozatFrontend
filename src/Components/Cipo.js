import "../Css/Cipo.css";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import fehCipo from '../Img/fehCipo.jpg';
import fCipo from '../Img/fCipo.jpg';
import bCipo from '../Img/bCipo.jpg';

function Cipo() {
  return (
    <div className="Cipo">
      <h1 className="cimtermek">Cipők</h1>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" img src={fehCipo} />
            <Card.Body>
              <Card.Title>Fehér cipő</Card.Title>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="s">40</option>
                <option value="m">42</option>
                <option value="l">44</option>
              </Form.Select>
              <Button id="btn_nadrag" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" img src={fCipo} />
            <Card.Body>
              <Card.Title>Fekete cipő</Card.Title>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="s">40</option>
                <option value="m">42</option>
                <option value="l">44</option>
              </Form.Select>
              <Button id="btn_nadrag" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" img src={bCipo} />
            <Card.Body>
              <Card.Title>Barna cipő</Card.Title>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="s">40</option>
                <option value="m">42</option>
                <option value="l">44</option>
              </Form.Select>
              <Button id="btn_nadrag" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cipo;