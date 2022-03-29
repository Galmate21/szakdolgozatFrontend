import { Card, Row, Button, Col, Form } from "react-bootstrap";
import "../Css/Pulcsi.css";
import fehPulover from '../Img/Pulover.jpg';
import fPulover from '../Img/fPulover.jpg';
import zPulover from '../Img/zPulover.jpg';
import sPulover from '../Img/sPulover.jpg';
import kPulover from '../Img/kPulover.jpg';
import lPulover from '../Img/lPulover.jpg';



function Pulover() {
  return (
    <div className="Pulcsi">
      <h1 className="cimtermek">Pulóverek</h1>
      <Row md={4}>
        <Col xs={6}>
          <Card border="dark">
            <Card.Img variant="top" img src={fehPulover} />
            <Card.Body>
              <Card.Title>Fehér pulóver</Card.Title>
              <Card.Text>
                Férfi
              </Card.Text>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </Form.Select>
              <Button id="btn_Pulcsi" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card border="dark">
            <Card.Img variant="top" img src={fPulover} />
            <Card.Body>
              <Card.Title>Fekete pulóver</Card.Title>
              <Card.Text>
                Férfi
              </Card.Text>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </Form.Select>
              <Button id="btn_Pulcsi" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card border="dark">
            <Card.Img variant="top" img src={zPulover} />
            <Card.Body>
              <Card.Title>Zöld pulóver</Card.Title>
              <Card.Text>
                Férfi
              </Card.Text>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </Form.Select>
              <Button id="btn_Pulcsi" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card border="dark">
            <Card.Img variant="top" img src={sPulover} />
            <Card.Body>
              <Card.Title>Sárga pulóver</Card.Title>
              <Card.Text>
                Férfi
              </Card.Text>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </Form.Select>
              <Button id="btn_Pulcsi" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row md={2}>
        <Col xs={6}>
          <Card border="dark">
            <Card.Img variant="top" img src={kPulover} />
            <Card.Body>
              <Card.Title>Kék pulóver</Card.Title>
              <Card.Text>
                Férfi
              </Card.Text>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </Form.Select>
              <Button id="btn_Pulcsi" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card border="dark">
            <Card.Img variant="top" img src={lPulover} />
            <Card.Body>
              <Card.Title>Lila pulóver</Card.Title>
              <Card.Text>
                Férfi
              </Card.Text>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </Form.Select>
              <Button id="btn_Pulcsi" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Pulover;