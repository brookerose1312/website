import React from "react";
import Row from "react-bootstrap/Row";
import { WelcomeMessage, ProfilePicture } from "./SplashComponents";

export default function Splash() {
  return (
    <Row className="align-items-center">
      <WelcomeMessage />
      <ProfilePicture />
    </Row>
  );
}
