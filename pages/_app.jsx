import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-light bg-gradient" style={{ height: "100%", "min-height": "100vh" }}>
      <Header />
      <Container fluid>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;
