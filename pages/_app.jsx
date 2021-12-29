import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Container fluid><Component {...pageProps} /></Container>
    </div>
  );
}

export default MyApp;
