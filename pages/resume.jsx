import React from "react";
import {
  Container, Col, Row, Card,
} from "react-bootstrap";
import { NextSeo } from "next-seo";
import {
  EnvelopeFill, TelephoneFill, MapFill, Github, CalendarFill, GeoAltFill, Circle, CircleFill,
} from "react-bootstrap-icons";

export default function Resume() {
  return (
    <>
      <NextSeo title="Resume" description="The resume for Brooke Rose Baer" />
      <Container>
        <h1>Brooke Rose Baer</h1>
        <h3>Senior Software Engineer</h3>
        <Row xl={4} md={2} xs={1}>
          <Col>
            <EnvelopeFill />
            <br />
            brooke@chromelia.dev
          </Col>
          <Col>
            <TelephoneFill />
            <br />
            <a href="tel:518-317-9413">(518) 317-9413</a>
          </Col>
          <Col>
            <MapFill />
            <br />
            88 Eagle Street,
            <br />
            Apt. 2,
            <br />
            Troy, NY, 12180
          </Col>
          <Col>
            <Github />
            <br />
            <a href="https://github.com/brookerose1312">https://github.com/brookerose1312</a>
          </Col>
        </Row>
        <Row className="mt-3" lg={2} md={1}>
          <Col>
            <Card bg="light">
              <Card.Header as="h2">Professional Summary</Card.Header>
              <Card.Body>
                <Card.Text>
                  Hands-on, successful Software Engineering student. Comprehensive
                  knowledge of network programming, operating systems, and web development.
                  Experience with top companies in developing internal tools to help
                  educate employees on cybersecurity. Experience in modern web development
                  using technologies such as React, Node, Express.JS, and Next.JS
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="light" className="mt-3">
              <Card.Header as="h2">Employment History</Card.Header>
              <Card.Body>
                <Card.Title>Senior Software Engineer</Card.Title>
                <Card.Subtitle className="text-muted">Evolving Software</Card.Subtitle>
                <Card.Text className="d-flex justify-content-between">
                  <div>
                    <CalendarFill className="me-2" />
                    Sept 2021 - Current
                  </div>
                  <div>
                    <GeoAltFill className="me-2" />
                    Albany, NY, 12207
                  </div>
                </Card.Text>
                <Card.Text>
                  Work with clients to develop bespoke
                  applications. Develop primarily in a
                  NextJS framework.
                </Card.Text>
                <Card.Title>iD Certified Instructor</Card.Title>
                <Card.Subtitle className="text-muted">iD Tech Camps</Card.Subtitle>
                <Card.Text className="d-flex justify-content-between">
                  <div>
                    <CalendarFill className="me-2" />
                    Jun 2021 - Aug 2021
                  </div>
                  <div>
                    <GeoAltFill className="me-2" />
                    Campbell, CA 95011
                  </div>
                </Card.Text>
                <Card.Text>
                  Teach students game development in Python and JavaScript.
                </Card.Text>
                <Card.Title>
                  Cafe Worker at Blitman Dining Hall
                </Card.Title>
                <Card.Subtitle className="text-muted">
                  Rensselaer Dining Services
                </Card.Subtitle>
                <Card.Text className="d-flex justify-content-between">
                  <div>
                    <CalendarFill className="me-2" />
                    Sept 2018 - Aug 2019
                  </div>
                  <div>
                    <GeoAltFill className="me-2" />
                    Troy, NY, 12180
                  </div>
                </Card.Text>
                <Card.Text>
                  Serve students, clean tables, build
                  sandwiches, build salads, sweep dining
                  room.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="light" className="mt-3 mb-3">
              <Card.Header as="h2">Skills</Card.Header>
              <Card.Body>
                <Card.Text className="d-flex justify-content-between">
                  Javascript
                  <div>
                    <CircleFill />
                    <CircleFill />
                    <CircleFill />
                    <CircleFill />
                    <Circle />
                  </div>
                </Card.Text>
                <Card.Text className="d-flex justify-content-between">
                  C/C++
                  <div>
                    <CircleFill />
                    <CircleFill />
                    <CircleFill />
                    <Circle />
                    <Circle />
                  </div>
                </Card.Text>
                <Card.Text className="d-flex justify-content-between">
                  Python
                  <div>
                    <CircleFill />
                    <CircleFill />
                    <CircleFill />
                    <Circle />
                    <Circle />
                  </div>
                </Card.Text>
                <Card.Text className="d-flex justify-content-between">
                  PHP
                  <div>
                    <CircleFill />
                    <CircleFill />
                    <Circle />
                    <Circle />
                    <Circle />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="light">
              <Card.Header as="h2">Education</Card.Header>
              <Card.Body>
                <Card.Title>
                  BS in Information Technology and Web Science
                </Card.Title>
                <Card.Subtitle className="text-muted">
                  Rensselaer Polytechnic Institute
                </Card.Subtitle>
                <Card.Text>
                  <CalendarFill className="me-2" />
                  August 2017 - June 2021
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Header as="h2">Interests</Card.Header>
              <Card.Body>
                <Card.Title>Technical</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Development of Mobile Applications for iOS and Android</li>
                    <li>Web Development, both front- and back-end</li>
                    <li>Security and Privacy of User Data</li>
                  </ul>
                </Card.Text>
                <Card.Title>Other</Card.Title>
                <Card.Text>
                  <ul>
                    <li>
                      I worked as a moderator for a small
                      Twitch.TV stream (ArenEternal), making
                      sure that the content posted in her
                      discord was within the rules.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3" bg="light">
              <Card.Header as="h2">Languages</Card.Header>
              <Card.Body>
                <Card.Text className="d-flex justify-content-between">
                  English
                  <div>
                    <CircleFill />
                    <CircleFill />
                    <CircleFill />
                    <CircleFill />
                    <CircleFill />
                  </div>
                </Card.Text>
                <Card.Text className="d-flex justify-content-between">
                  German
                  <div>
                    <CircleFill />
                    <Circle />
                    <Circle />
                    <Circle />
                    <Circle />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
