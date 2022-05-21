import React from "react";
import Row from "react-bootstrap/Row";
import { LeftCol, RightCol } from "./MainContentComponents";

export default function MainContent() {
  return (
    <Row className="mt-3" lg={2} md={1}>
      <LeftCol />
      <RightCol />
    </Row>
  );
}
