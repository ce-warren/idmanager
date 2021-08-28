import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function AboutDisplay(props) {

  const [displayed, setDisplayed] = useState("what-is");

  return (
    <div>

      <div>
        <Button onClick={() => setDisplayed("what-is")}>
          What is Branding Thing?
        </Button>
        <Button onClick={() => setDisplayed("how-to")}>
          How to Use It
        </Button>
        <Button onClick={() => setDisplayed("about-us")}>
          About Us
        </Button>
      </div>
      
      {displayed === "what-is" ? (
        <div>
          What is Branding Thing?
        </div>
      ) : ( "" )}

      {displayed === "how-to" ? (
        <div>
          How to Use It
        </div>
      ) : ( "" )}

      {displayed === "about-us" ? (
        <div>
          About Us
        </div>
      ) : ( "" )}
    </div>
  );
}