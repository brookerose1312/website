import React from "react";
import Col from "react-bootstrap/Col";
import {
  Github as GithubIcon,
} from "react-bootstrap-icons";

export default function Github({ address }) {
  return (
    <Col>
      <GithubIcon className="me-2" />
      <a href={address}>{address}</a>
    </Col>
  );
}
