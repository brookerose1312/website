import React from "react";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import profilePic from "public/pfp.jpeg";

export default function ProfilePicture() {
  return (
    <Col className="d-flex justify-content-center" height={400}>
      <Image
        src={profilePic}
        className="rounded-circle"
        placeholder="blur"
        width={400}
        height={400}
        alt="Picture of Brooke"
        priority
      />
    </Col>
  );
}
