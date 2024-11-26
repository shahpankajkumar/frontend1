import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./SingUp.css";

const SignUp = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    if (inputUsername !== "admin" || inputPassword !== "admin") {
      setShow(true);
    }
    setLoading(false);
  };

  const handlePassword = () => {};

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div
      className="sign-in__wrapper"
    >
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <div className="h4 mb-2 text-center">Sign In</div>
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Error.
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        {!loading ? (
          <Button className="w-100" variant="primary" type="submit">
            Sign Up
          </Button>
        ) : (
          <Button className="w-100" variant="primary" type="submit" disabled>
            Sign Up...
          </Button>
        )}
      </Form>
    </div>
  );
};

export default SignUp;
