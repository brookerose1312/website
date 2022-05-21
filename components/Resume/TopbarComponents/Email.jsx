import React from "react";
import Col from "react-bootstrap/Col";
import { EnvelopeFill } from "react-bootstrap-icons";

export default function Email({ address }) {
  return (
    <Col>
      <EnvelopeFill className="me-2" />
      {address}
    </Col>
  );
}
