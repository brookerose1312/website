import React from "react";
import Row from "react-bootstrap/Row";
import {
  Phone, Email, Address, Github,
} from "./TopbarComponents";

export default function Topbar() {
  return (
    <>
      <br />
      <h1>Brooke Rose Baer</h1>
      <h3>Senior Software Engineer</h3>
      <Row xl={4} md={2} xs={1}>
        <Email address="me@brookero.se" />
        <Phone number="518-317-9413" />
        <Address line1="88 Eagle Street" line2="Apt. 2" line3="Troy, NY, 12180" />
        <Github address="https://github.com/brookerose1312" />
      </Row>
    </>
  );
}
