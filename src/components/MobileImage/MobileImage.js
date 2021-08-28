import React, { useRef, useEffect } from "react";
import MobileImagePng from "../../items/mobileimage.png";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import gsap from "gsap";

export default function MobileImage() {
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 1,
      y: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".imageTriggerMobile",
        start: ".imageTriggerMobile 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div
      className='mobileImage'
      ref={(element) => {
        elementRef.current[0] = element;
      }}>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12}>
            <div className='imageTriggerMobile'></div>
            <img
              src={MobileImagePng}
              alt='imageMobile'
              className='imageMobile'
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
