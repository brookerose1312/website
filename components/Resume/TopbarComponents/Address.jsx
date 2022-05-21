import React from "react";
import Col from "react-bootstrap/Col";
import { MapFill } from "react-bootstrap-icons";

function Line1({ line1 }) {
  return (
    <>
      <MapFill className="me-2" />
      {line1}
      ,
    </>
  );
}

function Line2({ line2 }) {
  return (
    <>
      &nbsp; &nbsp; &nbsp;
      {" "}
      {line2}
      ,
    </>
  );
}

function Line3({ line3 }) {
  return (
    <>
      &nbsp; &nbsp; &nbsp;
      {" "}
      {line3}
    </>
  );
}

export default function Address({ line1, line2, line3 }) {
  return (
    <Col>
      <Line1 line1={line1} />
      <br />
      {line2 && <Line2 line2={line2} />}
      <br />
      <Line3 line3={line3} />
    </Col>
  );
}
