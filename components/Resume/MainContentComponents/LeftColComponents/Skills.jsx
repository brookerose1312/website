import React from "react";
import Card from "react-bootstrap/Card";
import { Proficiency } from "components/Resume/ReusableComponents";

function Skill({ name, score }) {
  <div className="d-flex justify-content-between" key={name}>
    {name}
    {" "}
    <Proficiency score={score} />
  </div>;
}

export default function Skills() {
  const skills = [
    {
      name: "Javascript",
      score: 4,
    },
    {
      name: "C",
      score: 3,
    },
    {
      name: "Python",
      score: 3,
    },
    {
      name: "F#",
      score: 2,
    },
  ];
  return (
    <Card bg="light" className="mt-3 mb-3">
      <Card.Header as="h2">Skills</Card.Header>
      <Card.Body>
        {skills.map((skill) => Skill(skill))}
      </Card.Body>
    </Card>
  );
}
