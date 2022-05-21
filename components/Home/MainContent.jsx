import React from "react";
import Container from "react-bootstrap/Container";
import { GithubActivity, WhoAmI } from "./ContentComponents";

export default function MainContent() {
  return (
    <Container className="mt-3">
      <WhoAmI />
      <GithubActivity />
    </Container>
  );
}
