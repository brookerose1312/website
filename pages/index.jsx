import React from "react";
import { Container } from "react-bootstrap";
import { NextSeo } from "next-seo";
import { Splash, MainContent } from "components/Home";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Home"
        description="Brooke Rose Baer's Personal Website. Brooke is a web developer, trans woman, and humanist who graduated from RPI with a B.S. in ITWS. Learn more about zir here!"
      />
      <Container className="justify-content-center mt-3" fluid>
        <Splash />
        <MainContent />
      </Container>

    </>
  );
}
