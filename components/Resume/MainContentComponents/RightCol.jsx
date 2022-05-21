import React from "react";
import Col from "react-bootstrap/Col";
import { Education, Interests, Languages } from "./RightColComponents";

export default function RightCol() {
  return (
    <Col>
      <Education />
      <Interests />
      <Languages />
    </Col>
  );
}
