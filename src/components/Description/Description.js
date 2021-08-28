import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import gsap from "gsap";
import "../../App.css";
import VideoPlayer from "./VideoPlay";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  buttonStyle: {
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
    "&:hover": {
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "6px 11px",
      fontSize: "0.6rem",
      "&:hover, &:focus": {
        color: "black",
      },
    },
  },
}));

export default function Description() {
  const classes = useStyles();

  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 1,
      y: "20",
      opacity: 0,
      stagger: 0.5,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".smallTitle",
        start: ".triggerClass 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });

    gsap.from(".hoverDistortEff", {
      duration: 1,
      x: "100",
      opacity: 0,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".smallTitle",
        start: ".triggerClass 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
      scrub: 1,
    });
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
            ref={(element) => {
              elementRef.current[0] = element;
            }}>
            <h4
              className='smallTitle'
              ref={(element) => {
                elementRef.current[1] = element;
              }}>
              LONDON WEB DESIGN AGENCY
            </h4>
            <h3
              className='midTitle'
              ref={(element) => {
                elementRef.current[2] = element;
              }}>
              CREATIVE BRAND DESIGN
            </h3>
            <p
              className='descriptionText'
              ref={(element) => {
                elementRef.current[3] = element;
              }}>
              One Cloud Media is a London based web design and digital marketing
              agency, specialising in high quality website design & social media
              marketing. It is our mission to create immersive and interactive
              web experiences that excite and inspire every user. We work
              through a bespoke process from the start to the end of your
              project, ensuring 100% design satisfaction.
            </p>
            <p
              className='descriptionText'
              ref={(element) => {
                elementRef.current[4] = element;
              }}>
              We’re an established, experienced and hard working team with over
              five years of experience in providing high quality web solutions –
              we’re well equipped to take your business concept from initial
              idea to reality.
            </p>
            <Button
              href='/about'
              className={classes.buttonStyle}
              variant='contained'
              ref={(element) => {
                elementRef.current[5] = element;
              }}>
              FIND OUT MORE
            </Button>
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <VideoPlayer />
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}
