import { Container } from "@material-ui/core";
import React, { useRef, useEffect } from "react";
import "../../App.css";
import GridItems from "./GridItems";
import gsap from "gsap";

export default function Vision() {
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 1,
      y: "100",
      opacity: 0,
      stagger: 0.5,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".descriptionTextVision",
        start: ".descriptionTextVision 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <Container maxWidth='lg'>
      <div>
        <div className='visionTitle'>
          <h4 className='smallTitleVision'>OUR VISION FOR YOU</h4>
          <h3 className='midTitleVision'>
            MODERN, BEAUTIFUL & INTERACTIVE DESIGN
          </h3>
        </div>

        <p className='descriptionTextVision'>
          We offer design thinking-based and technology driven services in
          digital product innovation, customer experience management, and
          digital transformation.
          <br /> Our service offerings include:
        </p>
      </div>
      <br /> <br />
      <GridItems
        ref={(element) => {
          elementRef.current[0] = element;
        }}
      />
      <br />
      <br />
    </Container>
  );
}
