import "../Css/Home.css";
import { useState } from 'react';
import { Carousel, Card, Row, Col, Alert, Button } from 'react-bootstrap'
import Polo from '../Img/Polo.jpg';
import Pulover from '../Img/Pulover.jpg';
import Kiegeszitok from '../Img/Kiegeszitok.jpg';
import fehCipo from '../Img/fehCipo.jpg';
import Kabat from '../Img/Kabat.jpg';
import Nadrag from '../Img/Nadrag.jpg';

function Home() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Alert show={show} variant="dark" >
        <Alert.Heading id="HomeAlertHead" >Figyelmeztetés</Alert.Heading>
        <p id="HomeAlertP">
          Az oldalon csak férfi ruhákat árulunk.
        </p>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="dark">
            Bezár
          </Button>
        </div>
      </Alert>
      <h2 id="homeh2">Üdvözöljük az oldalon!</h2>
      <Row xs={1} md={4} className="g-4" >
      <Col></Col>
        <Col >
          <Card border="dark" bg="dark">
            <Card.Body  >
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    img src={Polo}
                    alt="Póló"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    img src={Pulover}
                    alt="Pulóver"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    img src={Kiegeszitok}
                    alt="Kiegészítők"
                  />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card border="dark" bg="dark" style={{width:'100%'}}>
            <Card.Body>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    img src={Nadrag}
                    alt="Nadrág"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    img src={fehCipo}
                    alt="Kabát"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    img src={Kabat}
                    alt="Kabát"
                  />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <Col >
        </Col>
      </Row>
    </div>
  );
}

export default Home;