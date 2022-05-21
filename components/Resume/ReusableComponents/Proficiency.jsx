import React from "react";
import {
  Circle, CircleFill,
} from "react-bootstrap-icons";

export default function Proficiency({ score }) {
  const circleScore = [];
  for (let i = 0; i < score; i += 1) {
    circleScore.push(<CircleFill key={i} />);
  }
  for (let i = score; i < 5; i += 1) {
    circleScore.push(<Circle key={i} />);
  }
  return (
    <div>
      {circleScore}
    </div>
  );
}
