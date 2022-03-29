import "../Css/Kabat.css";
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import fKabat from '../Img/fKabat.jpg'
import fDzseki from '../Img/fDzseki.jpg'
import fehDzseki from '../Img/fehDzseki.jpg'
import fehKabat from '../Img/fehKabat.jpg'




function Kabat() {
  return (
    <div className="Kabat">
      <h1 className="cimtermek">Kabátok</h1>
      <Row xs={2} md={4} className="g-4">
        <Col>
          <Card border="dark">
            <Card.Img variant="top" img src={fehKabat} />
            <Card.Body>
              <Card.Title>Fehér kabát</Card.Title>
              <Card.Text>
                Vastag téli kabát
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
            <Card.Img variant="top" img src={fKabat} />
            <Card.Body>
              <Card.Title>Fekete kabát</Card.Title>
              <Card.Text>
                Féfi téli kabát
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
            <Card.Img variant="top" img src={fehDzseki} />
            <Card.Body>
              <Card.Title>Fehér Dzseki</Card.Title>
              <Card.Text>
                Őszi férfi dzseki
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
            <Card.Img variant="top" img src={fDzseki} />
            <Card.Body>
              <Card.Title>Fekete Dzseki</Card.Title>
              <Card.Text>
                Őszi férfi dzseki
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

export default Kabat;





