import { Container } from "@material-ui/core";
import React, { useRef, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Grid from "@material-ui/core/Grid";
import gsap from "gsap";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import CardEffect from "./CardEffect";
import RightSideAbout from "./RightSideAbout";
import MidSectionAbout from "./MidSectionAbout";
import Review from "../components/Reviews/Review";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import favicon from "../items/favicon.ico";

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

export default function About() {
  let elementRef = useRef([]);
  const classes = useStyles();

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { backgroundColor: "black" },
      {
        duration: 0.8,
        backgroundColor: "#FFFFFF",
        ease: "none",
        scrollTrigger: {
          trigger: ".backChanger",
          markers: false,
          start: ".backChanger 100%",
          endTrigger: ".finaldestinationtwo",
          end: ".finaldestinationtwo",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.from(elementRef.current, {
      duration: 1,
      delay: 4,
      y: "20",
      opacity: 0,
      stagger: 0.5,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".blacklogo",
        start: ".blacklogo 100%",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div
      className='AboutTotal'
      ref={(element) => {
        elementRef.current[0] = element;
      }}>
      <Helmet>
        <title>About - OneCloudMedia</title>
        <link rel='icon' type='image/png' href={favicon} sizes='25x25' />
        <meta
          name='description'
          content=' We are an award-winning London web design agency, specialising in
        bespoke website design & development. We’ve made it our mission to
        cultivate interactive web experiences that excite and inspire. We work
        through a bespoke process from the start to the end of your project,
        ensuring 100% design satisfaction.'
        />
      </Helmet>
      <NavBar />
      <div className='AboutPage'>
        <Container
          maxWidth='lg'
          style={{ marginTop: "6rem" }}
          className='triggerClass'>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h4
                  className='smallTitle'
                  ref={(element) => {
                    elementRef.current[1] = element;
                  }}>
                  ABOUT US
                </h4>
                <h3
                  className='midTitle'
                  ref={(element) => {
                    elementRef.current[2] = element;
                  }}>
                  A full-service digital marketing agency
                </h3>
                <p
                  className='descriptionText'
                  ref={(element) => {
                    elementRef.current[3] = element;
                  }}>
                  Hello, we are One Cloud Media. It's nice to meet you 👋
                </p>

                <a href='/contact'>
                  <motion.Button
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
                    className='buttonStyle'
                    variant='contained'
                    ref={(element) => {
                      elementRef.current[4] = element;
                    }}>
                    START YOUR project
                  </motion.Button>
                </a>
              </Grid>
            </Grid>
          </div>
          <div className='scroll-downTwo'></div>
        </Container>
        <div className='middleParting'></div>
        <div className='backChanger'>
          <Container maxWidth='lg' className='cardeffectsection'>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12} sm={12}>
                <CardEffect />
              </Grid>
              <Grid item md={6} xs={12} sm={12}>
                <RightSideAbout />
              </Grid>
            </Grid>
          </Container>
        </div>
        <MidSectionAbout />
        <div className='gaps'></div>
        <div className='gaps'></div>
        <Review />
        <div className='gaps'></div>
        <div className='gaps'></div>
        <br />
        <br />
        <Footer />
      </div>
      <div className='kalasabout'></div>

      <div className='finaldestinationtwo'></div>
    </div>
  );
}
