import React, { useState } from "react";
import {
  Alert,
  Button, Container, FloatingLabel, Form,
} from "react-bootstrap";
import { NextSeo } from "next-seo";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const name = form[0].value;
      const email = form[1].value;
      const message = form[2].value;
      const data = {
        name,
        email,
        message,
      };
      fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) {
          setShowError(true);
        } else {
          setShowSuccess(true);
        }
      });
    }

    setValidated(true);
  };
  return (
    <>
      <NextSeo
        title="Contact Me"
        description="The contact page for Brooke Rose Baer"
      />
      <Container className="mt-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formContactName">
            <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Enter a name here"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContactEmail">
            <FloatingLabel controlId="floatingName" label="Email" className="mb-3">
              <Form.Control
                required
                type="email"
                placeholder="Enter an email here"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContactMessage">
            <FloatingLabel controlId="floatingName" label="Message" className="mb-3">
              <Form.Control
                required
                as="textarea"
                style={{ height: "14rem" }}
                placeholder="Enter your message here"
              />
            </FloatingLabel>
          </Form.Group>
          <Button as="input" type="submit" value="Submit" size="lg" />
        </Form>
        <Alert show={showError} className="mt-3" variant="danger" onClose={() => setShowError(false)} dismissible>
          <Alert.Heading>Uh oh! An error occurred!</Alert.Heading>
          <p>
            Try submitting again, if that doesn&apos;t work, email Brooke directly at
            {" "}
            <Alert.Link href="mailto:brooke@chromelia.dev">brooke@chromelia.dev</Alert.Link>
          </p>
        </Alert>
        <Alert show={showSuccess} className="mt-3" variant="success" onClose={() => setShowSuccess(false)} dismissible>
          <Alert.Heading>Successful Submission!</Alert.Heading>
          <p>Check back in a day if I haven&apos;t responded to you, and have a nice day!</p>
        </Alert>
      </Container>
    </>
  );
}
