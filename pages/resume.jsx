import React from "react";
import Container from "react-bootstrap/Container";
import { NextSeo } from "next-seo";
import { Topbar, MainContent } from "components/Resume";

export default function Resume() {
  return (
    <>
      <NextSeo title="Resume" description="The resume for Brooke Rose Baer" />
      <Container>
        <Topbar />
        <MainContent />
      </Container>
    </>
  );
}
