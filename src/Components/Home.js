import "../Css/Home.css";
import { useState,useEffect } from 'react';
import { Carousel, Card, Row, Col, Alert, Button,Nav } from 'react-bootstrap'
import Polo from '../Img/Polo.jpg';
import Pulover from '../Img/Pulover.jpg';
import Kiegeszitok from '../Img/Kiegeszitok.jpg';
import fehCipo from '../Img/fehCipo.jpg';
import Kabat from '../Img/Kabat.jpg';
import Nadrag from '../Img/Nadrag.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
  const [show, setShow] = useState(true);
  const [kosartart,setkosartart]=useState([])
  

  useEffect(()=>{
    const cartItem=JSON.parse(localStorage.getItem('cart'))
    if(cartItem){
      setkosartart(cartItem)
      toast.error("Figyelem! A kosarában "+cartItem.length+" termék található.", {
        position: "top-center"
      }); 
    }
   

  },[])
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
      <Nav.Link href="/kosar">
<Button style={{marginLeft:"15px",marginTop:"5px",fontSize:"25px",backgroundColor:"",borderRadius:"50%"}}>
      
      <svg style={{backgroundColor:"",borderRadius:"30%"}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
<span style={{backgroundColor:"", width:"20px",height:"20px",borderRadius:"50%"}}>{kosartart.length}</span>
</Button></Nav.Link>
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
      <ToastContainer />
    </div>
  );
}

export default Home;