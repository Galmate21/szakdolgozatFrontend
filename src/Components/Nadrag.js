import { Card, Button, CardGroup, Form, Row, Col } from "react-bootstrap";
import "../Css/Nadrag.css";
import fNadrag from '../Img/fNadrag.jpg';
import kNadrag from '../Img/kNadrag.jpg';
import feherNadrag from '../Img/feherNadrag.jpg';
import szMelegitonadrag from '../Img/szMelegitonadrag.jpg';
import zMelegitonadrag from '../Img/zMelegitonadrag.jpg';
import kMelegitonadrag from '../Img/kMelegitonadrag.jpg';

function Nadrag() {
  return (
    <div className="Nadrag">
      <h1 className="cimtermek">Nadrágok</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" img src={fNadrag} />
          <Card.Body>
            <Card.Title>Fekete farmernadrág</Card.Title>
            <Card.Text>
              Nagyon szűk skinny farmernadrág
            </Card.Text>
            <Form.Select aria-label="Default select example">
              <option>Válasz méretet</option>
              <option value="s">36</option>
              <option value="m">38</option>
              <option value="l">40</option>
            </Form.Select>
            <Button id="btn_nadrag" variant="dark">Rendelés</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" img src={kNadrag} />
          <Card.Body>
            <Card.Title>Kék farmernadrág</Card.Title>
            <Card.Text>
              Nagyon szűk skinny farmernadrág
            </Card.Text>
            <Form.Select aria-label="Default select example">
              <option>Válasz méretet</option>
              <option value="s">36</option>
              <option value="m">38</option>
              <option value="l">40</option>
            </Form.Select>
            <Button id="btn_nadrag" variant="dark">Rendelés</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" img src={feherNadrag} />
          <Card.Body>
            <Card.Title>Fehér tépet farmernadrág</Card.Title>
            <Card.Text>
              Szuper skinny fazonú,  tépett farmernadrág
            </Card.Text>
            <Form.Select aria-label="Default select example">
              <option>Válasz méretet</option>
              <option value="s">36</option>
              <option value="m">38</option>
              <option value="l">40</option>
            </Form.Select>
            <Button id="btn_nadrag" variant="dark">Rendelés</Button>
          </Card.Body>
        </Card>
      </CardGroup>
      <Row >
        <Col>
          <Card>
            <Card.Img variant="top" img src={szMelegitonadrag} />
            <Card.Body>
              <Card.Title>Szürke melegítőnadrág</Card.Title>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="s">36</option>
                <option value="m">38</option>
                <option value="l">40</option>
              </Form.Select>
              <Button id="btn_nadrag" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" img src={kMelegitonadrag} />
            <Card.Body>
              <Card.Title>Kék melegítőnadrág</Card.Title>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="s">36</option>
                <option value="m">38</option>
                <option value="l">40</option>
              </Form.Select>
              <Button id="btn_nadrag" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" img src={zMelegitonadrag} />
            <Card.Body>
              <Card.Title>Zöld melegítőnadrág</Card.Title>
              <Form.Select aria-label="Default select example">
                <option>Válasz méretet</option>
                <option value="s">36</option>
                <option value="m">38</option>
                <option value="l">40</option>
              </Form.Select>
              <Button id="btn_nadrag" variant="dark">Rendelés</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Nadrag;