import React from "react";
import Card from "react-bootstrap/Card";
import GitHubCalendar from "react-github-calendar";

export default function GithubActivity() {
  return (
    <Card className="mt-3" bg="light">
      <Card.Header>My Github Activity (@brookerose1312)</Card.Header>
      <Card.Body className="d-flex justify-content-center">
        <GitHubCalendar username="brookerose1312" />
      </Card.Body>
    </Card>
  );
}
