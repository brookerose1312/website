import React from "react";
import { Container, Card } from "react-bootstrap";
import Image from "next/image";
import { NextSeo } from "next-seo";
import nextjsLogo from "public/nextjs-logo.png";

export default function About() {
  return (
    <>
      <NextSeo title="About Me" description="Learn about Brooke Rose Baer" />
      <Container className="justify-content-center mt-3" fluid>
        <Container className="d-flex justify-content-center mt-3" fluid>
          <Image
            src={nextjsLogo}
            width={600}
            height={360}
            placeholder="blur"
            alt="NextJS Logo"
            priority
          />
        </Container>
        <Container className="mt-3">
          <Card bg="light">
            <Card.Header as="h3">Web Development is what I excel at.</Card.Header>
            <Card.Body>
              <Card.Text>
                I am a recent graduate from Rensselaer Polytechnic Institute and
                current employee of Politech. I graudated with a B.S. in the
                field of Information Technology and Web Science. My skills include
                JavaScript and Python development, as well as soft skills such as
                teamwork, a strong work ethic, and critical thinking.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3" bg="light">
            <Card.Header>My Work Experience</Card.Header>
            <Card.Body>
              <Card.Title>February 2022-Current</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Politech</Card.Subtitle>
              <Card.Text>Junior Frontend Engeineer</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>September 2021-January 2022</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Evolving Software</Card.Subtitle>
              <Card.Text>Software Engineer</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Title>June 2021-August 2021</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">iD Tech Camps</Card.Subtitle>
              <Card.Text>iD Certified Instructor</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3" bg="light">
            <Card.Header>Education</Card.Header>
            <Card.Body>
              <Card.Title>September 2017 - May 2021</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Rensselaer Polytechnic Institute</Card.Subtitle>
              <Card.Text>B.S. in ITWS</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>

    </>
  );
}
