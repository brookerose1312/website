import React from "react";
import Card from "react-bootstrap/Card";
import { TimeRange, Location } from "components/Resume/ReusableComponents";

function EmploymentBlock({
  jobTitle, company, startDate, endDate, location, copy,
}) {
  return (
    <Card.Body key={jobTitle}>
      <Card.Title>{jobTitle}</Card.Title>
      <Card.Subtitle className="text-muted">{company}</Card.Subtitle>
      <div className="d-flex justify-content-between">
        <TimeRange start={startDate} end={endDate} />
        <Location place={location} />
      </div>
      <Card.Text>
        {copy}
      </Card.Text>
    </Card.Body>
  );
}

export default function EmploymentHistory() {
  const jobs = [
    {
      jobTitle: "Junior Frontend Engineer",
      company: "Politech",
      startDate: "February 2022",
      endDate: "Current",
      location: "Remote",
      copy: "Worked on Blocks, a political campaign management tool, developing features to help campaigns manage voter registrations, phone banking, and other necessary tasks to do with running a political campaign",
    },
    {
      jobTitle: "Software Engineer",
      company: "Evolving Software",
      startDate: "September 2021",
      endDate: "January 2022",
      location: "Albany, NY, 12207",
      copy: "Work with clients to develop bespoke applications. Developed primarily in a NextJS framework.",
    },
    {
      jobTitle: "iD Certified Instructor",
      company: "iD Tech Camps",
      startDate: "Jun 2021",
      endDate: "Aug 2021",
      location: "Remote",
      copy: "Teach students game development in Python and JavaScript.",
    },
  ];
  return (
    <Card bg="light" className="mt-3">
      <Card.Header as="h2">Employment History</Card.Header>
      {jobs.map((job) => EmploymentBlock(job))}
    </Card>
  );
}
