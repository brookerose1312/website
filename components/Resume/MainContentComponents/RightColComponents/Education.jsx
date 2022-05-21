import React from "react";
import Card from "react-bootstrap/Card";
import { CalendarFill } from "react-bootstrap-icons";

export default function Education() {
  return (
    <Card bg="light">
      <Card.Header as="h2">Education</Card.Header>
      <Card.Body>
        <Card.Title>
          BS in Information Technology and Web Science
        </Card.Title>
        <Card.Subtitle className="text-muted">
          Rensselaer Polytechnic Institute
        </Card.Subtitle>
        <Card.Text>
          <CalendarFill className="me-2" />
          August 2017 - June 2021
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
