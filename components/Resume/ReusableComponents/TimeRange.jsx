import React from "react";
import { CalendarFill } from "react-bootstrap-icons";

export default function TimeRange({ start, end }) {
  return (
    <div>
      <CalendarFill className="me-2" />
      {start}
      {" "}
      -
      {" "}
      {end}
    </div>
  );
}
