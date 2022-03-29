import { Form, Button } from 'react-bootstrap';
import '../Css/Bejelentkezes.css';
import React, { useState } from "react";




export default function Bejelentkezes() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length >= 8;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login" style={{ backgroundColor:"white"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group id="ep" size="md" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group id='ep' size="md" controlId="password" >
          <Form.Label>Jelszó</Form.Label>
          <Form.Control
            placeholder='Jelszó'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button id='btn_login' block size="md" type="submit" disabled={!validateForm()}>
          Bejelentkezés
        </Button>
      </Form>
    </div>
  );
}