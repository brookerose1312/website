import React from "react";
import Card from "react-bootstrap/Card";

export default function WhoAmI() {
  return (
    <Card bg="light">
      <Card.Header>Who Am I?</Card.Header>
      <Card.Body>
        <Card.Title>A Developer</Card.Title>
        <Card.Text>
          I am a web developer, primarily working in React, but also
          learning Rust+Wasm, as well as C# and .NET. My Github is available
          {" "}
          <a href="https://github.com/brookerose1312">here</a>
          , and my LinkedIn is
          available
          {" "}
          <a href="https://www.linkedin.com/in/brooke-rose-baer/">
            here
          </a>
          .
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title>A Trans Woman</Card.Title>
        <Card.Text>
          I am an openly trans woman, and I use she/her and
          {" "}
          <a href="https://intercultural.uncg.edu/wp-content/uploads/Neopronouns-Explained-UNCG-Intercultural-Engagement.pdf">
            neopronouns
          </a>
          .
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title>A Humanist</Card.Title>
        <Card.Text>
          It is my personal goal to help as many people as I can.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
