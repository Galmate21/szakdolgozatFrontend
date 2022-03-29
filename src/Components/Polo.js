import { Card, Row, Button, Col, Form } from "react-bootstrap";
import "../Css/Polo.css";
import mintasPolo from '../Img/mintasPolo.jpg'
import feketePolo from '../Img/feketePolo.jpg'
import feherPolo from '../Img/feherPolo.jpg'
import sargaPolo from '../Img/sargaPolo.jpg'


function Polo() {
  return (
    <div className="Polo">
      <h1 className="cimtermek">Pólók</h1>
      <Row md={4}>
        <Col xs={6}>
          <Card border="dark">
            <Card.Img variant="top" img src={feherPolo} />
            <Card.Body>
              <Card.Title>Fehér póló</Card.Title>
              <Card.Text>
                Extra loose fit, rövid ujjú póló
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
            <Card.Img variant="top" img src={feketePolo} />
            <Card.Body>
              <Card.Title>Fekete póló</Card.Title>
              <Card.Text>
                Extra fit, rövid ujjú póló
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
            <Card.Img variant="top" img src={mintasPolo} />
            <Card.Body>
              <Card.Title>Mintás póló</Card.Title>
              <Card.Text>
                Rövid ujjú póló Naruto-mintával
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
            <Card.Img variant="top" img src={sargaPolo} />
            <Card.Body>
              <Card.Title>Sárga póló</Card.Title>
              <Card.Text>
                Fit, rövid ujjú póló
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

export default Polo;