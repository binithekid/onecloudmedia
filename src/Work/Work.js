import { Container } from "@material-ui/core";
import React, { useRef, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Grid from "@material-ui/core/Grid";
import gsap from "gsap";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import Portfolio from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";
import Helmet from "react-helmet";
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

export default function Work() {
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
          trigger: ".backChangerWork",
          markers: false,
          start: ".backChangerWork 100%",
          endTrigger: ".finaldestinationabpout",
          end: ".Kalas",
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
        trigger: ".smallTitle",
        start: ".smallTitle 100%",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div
      ref={(element) => {
        elementRef.current[0] = element;
      }}>
      <Helmet>
        <title>Work - OneCloudMedia</title>
        <link rel='icon' type='image/png' href={favicon} sizes='25x25' />
        <meta
          name='description'
          content='We create beautiful, engaging designs, technically proficient
                  web applications & perform result driven SEO. Take a look at some of the previous projects we completed'
        />
      </Helmet>
      <NavBar />
      <div className='WorkPage'>
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
                  OUR WORK
                </h4>
                <h3
                  className='midTitle'
                  ref={(element) => {
                    elementRef.current[2] = element;
                  }}>
                  A look at some of our previous projects
                </h3>
                <p
                  className='descriptionText'
                  ref={(element) => {
                    elementRef.current[3] = element;
                  }}>
                  We create beautiful, engaging designs, technically proficient
                  web applications & perform result driven SEO
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
        <div className='gaps'></div>
        <div className='gaps'></div>
        <div className='gaps'></div>
        <div className='gaps'></div>
        <div className='gaps'></div>
        <div className='backChangerWork'></div>
        <Portfolio />
        <div className='gaps'></div>
        <Footer />
      </div>
      <div className='finaldestinationabpout'></div>
      <div className='Kalas'></div>
    </div>
  );
}
