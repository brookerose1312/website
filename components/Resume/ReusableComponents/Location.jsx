import React from "react";
import { GeoAltFill } from "react-bootstrap-icons";

export default function Location({ place }) {
  return (
    <div>
      <GeoAltFill className="me-2" />
      {place}
    </div>
  );
}
