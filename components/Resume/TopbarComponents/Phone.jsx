import React from "react";
import Col from "react-bootstrap/Col";
import { TelephoneFill } from "react-bootstrap-icons";

export default function Phone({ number }) {
  return (
    <Col>
      <TelephoneFill className="me-2" />
      <a href={`tel:${number}`}>{number}</a>
    </Col>
  );
}
