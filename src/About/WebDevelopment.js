import React, { useRef, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import webdesigngraphic from "../items/webdesigngraphic.png";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function WebDevelopment() {
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 2,
      yoyo: true,
      x: "-100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".descriptionTextVisionBlackTwoWeb",
        start: ".descriptionTextVisionBlackTwoWeb 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });

    gsap.from(".imageAboutMidWeb", {
      duration: 1.5,
      x: "100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".descriptionTextVisionBlackTwoWeb",
        start: ".descriptionTextVisionBlackTwoWeb 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12} sm={12}>
            <h3
              ref={(element) => {
                elementRef.current[0] = element;
              }}
              className='midTitleVisionBlackTwoWeb'>
              WEB DESIGN & DEVELOPMENT
            </h3>
            <p
              ref={(element) => {
                elementRef.current[1] = element;
              }}
              className='descriptionTextVisionBlackTwoWeb'>
              As a leading London web design agency, we have a bespoke process
              from the start to the end of your project, with tailored web
              designs unique to your requirements. All of our websites are
              carefully designed in Photoshop before being coded by our
              experienced developers. This makes us an extremely flexible and
              agile agency, ready to take on projects large or small.
            </p>
            <p
              ref={(element) => {
                elementRef.current[2] = element;
              }}
              className='descriptionTextVisionBlackTwoWeb'>
              From the careful design in Photoshop, to custom coding by our
              experienced London based web developers, every website our web
              design team build is completely unique to your requirements. Our
              personalised approach to website design makes us an extremely
              flexible and agile agency, ready to take on projects large or
              small.
            </p>
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "ease",
                default: { duration: 0.5 },
              }}
              src={webdesigngraphic}
              alt='webgraphic'
              className='imageAboutMidWeb'
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
