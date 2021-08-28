import React, { useRef, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import gsap from "gsap";

import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ImageBlur from "./ImageBlur";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function MidSection() {
  let elementRef = useRef([]);
  const classes = useStyles();

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 1,
      y: "20",
      opacity: 0,
      stagger: 0.5,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".blacklogo",
        start: ".blacklogo 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });

    gsap.fromTo(
      elementRef.current,
      { color: "#FFFFFF" },
      {
        duration: 0.6,
        color: "#000000",
        ease: "linear",
        scrollTrigger: {
          trigger: ".colorTrigger",
          markers: false,
          start: ".colorTrigger 100%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".buttonStyle",
      { border: "1px solid white" },
      {
        duration: 0.6,
        border: "1px solid black",
        ease: "linear",
        scrollTrigger: {
          trigger: ".colorTrigger",
          markers: false,
          start: ".colorTrigger 100%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <Container
      maxWidth='lg'
      style={{ marginTop: "23rem" }}
      className='triggerClass'>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid
            item
            md={6}
            xs={12}
            sm={12}
            className='blacklogo'
            ref={(element) => {
              elementRef.current[0] = element;
            }}>
            <ImageBlur />
          </Grid>
          <Grid style={{ marginTop: "-5rem" }} item md={6} xs={12} sm={12}>
            <h4
              className='smallTitle'
              ref={(element) => {
                elementRef.current[1] = element;
              }}>
              BESPOKE SOLUTIONS
            </h4>
            <h3
              className='midTitle'
              ref={(element) => {
                elementRef.current[2] = element;
              }}>
              TAILORED TO MEET YOUR NEEDS
            </h3>
            <p
              className='descriptionText'
              ref={(element) => {
                elementRef.current[3] = element;
              }}>
              As a leading London web design agency, we have a bespoke process
              from the start to the end of your project, with tailored web
              designs unique to your requirements. All of our websites are
              carefully designed in Photoshop before being coded by our
              experienced developers.
            </p>
            <p
              className='descriptionText'
              ref={(element) => {
                elementRef.current[4] = element;
              }}>
              This makes us an extremely flexible and agile agency, ready to
              take on projects large or small.
            </p>

            <Button
              style={{
                textTransform: "uppercase",
                background: "transparent",
                color: "white",
                fontFamily: "Roboto Mono",
                padding: "10px 15px",
                fontSize: "0.7rem",
                letterSpacing: "2px",
                fontWeight: "400",
                border: "1px solid white",
                marginTop: "1rem",
                borderRadius: "0",
              }}
              href='/contact'
              className='buttonStyle'
              variant='contained'
              ref={(element) => {
                elementRef.current[5] = element;
              }}>
              FIND OUT MORE
            </Button>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='colorTrigger'></div>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
    </Container>
  );
}
