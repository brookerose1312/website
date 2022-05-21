import React from "react";
import Card from "react-bootstrap/Card";

export default function ProfessionalSummary() {
  return (
    <Card bg="light">
      <Card.Header as="h2">Professional Summary</Card.Header>
      <Card.Body>
        <Card.Text>
          Hands-on, successful Software Engineering student. Comprehensive
          knowledge of network programming, operating systems, and web development.
          Experience with top companies in developing internal tools to help
          educate employees on cybersecurity. Experience in modern web development
          using technologies such as React, Node, Express.JS, and Next.JS
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
