import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Header, BrookeSeo } from "components";

export default function BrookeWebsite({ Component, pageProps }) {
  return (
    <div className="bg-light bg-gradient" style={{ height: "100%", minHeight: "100vh" }}>
      <BrookeSeo />
      <Header />
      <Container fluid>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
