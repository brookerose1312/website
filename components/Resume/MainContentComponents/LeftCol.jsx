import React from "react";
import Col from "react-bootstrap/Col";
import { EmploymentHistory, ProfessionalSummary, Skills } from "./LeftColComponents";

export default function LeftCol() {
  return (
    <Col>
      <ProfessionalSummary />
      <EmploymentHistory />
      <Skills />
    </Col>
  );
}
