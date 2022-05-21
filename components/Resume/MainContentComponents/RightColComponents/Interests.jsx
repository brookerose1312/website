import React from "react";
import Card from "react-bootstrap/Card";

export default function Interests() {
  const technicalInterests = [
    "Development of Mobile Applications for iOS and Android",
    "Web Development, both front- and back-end",
    "Security and Privacy of User Data",
  ];
  const otherInterests = [
    "I worked as a moderator for a small Twitch.TV stream (ArenEternal), making sure that the content posted in her discord was within the rules.",
  ];
  return (
    <Card className="mt-3" bg="light">
      <Card.Header as="h2">Interests</Card.Header>
      <Card.Body>
        <Card.Title>Technical</Card.Title>
        <Card.Text>
          <ul>
            {technicalInterests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Title>Other</Card.Title>
        <Card.Text>
          <ul>
            {otherInterests.map((interest) => <li key={interest}>{interest}</li>)}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
