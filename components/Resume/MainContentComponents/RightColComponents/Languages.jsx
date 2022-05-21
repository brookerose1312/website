import React from "react";
import Card from "react-bootstrap/Card";
import { Proficiency } from "components/Resume/ReusableComponents";

function Language({ name, score }) {
  return (
    <div className="d-flex justify-content-between" key={name}>
      {name}
      {" "}
      <Proficiency score={score} />
    </div>
  );
}

export default function Languages() {
  const languages = [
    {
      name: "English",
      score: 5,
    },
    {
      name: "German",
      score: 1,
    },
  ];
  return (
    <Card className="mt-3" bg="light">
      <Card.Header as="h2">Languages</Card.Header>
      <Card.Body>
        {languages.map((language) => Language(language))}
      </Card.Body>
    </Card>
  );
}
