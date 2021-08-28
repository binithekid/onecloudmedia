import React, { useRef, useEffect } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import "../../App.css";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import { makeStyles } from "@material-ui/core/styles";
import DvrIcon from "@material-ui/icons/Dvr";
import SettingsSystemDaydreamIcon from "@material-ui/icons/SettingsSystemDaydream";
import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    textTransform: "uppercase",
    background: "transparent",
    color: "white",
    fontFamily: "Roboto Mono",
    padding: "5px 9px",
    fontSize: "0.6rem",
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
      marginBottom: "4rem",
    },
  },
}));

export default function GridItems() {
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 1,
      y: "20",
      opacity: 0,
      stagger: 0.7,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".gridTrigger",
        start: ".decriptiontext 80%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  const classes = useStyles();
  return (
    <Container maxWidth='lg' style={{ marginTop: "2rem" }}>
      <Grid
        container
        spacing={3}
        style={{ marginLeft: "1rem" }}
        alignContent='center'
        alignItems='center'
        justify='center'>
        <Grid
          lg={3}
          sm={6}
          xs={12}
          justify='center'
          direction='column'
          ref={(element) => {
            elementRef.current[0] = element;
          }}
          className='gridTrigger'>
          <ImportantDevicesIcon
            className='gridIconsComp'
            style={{
              fontSize: 50,
            }}
          />
          <h3 className='walterWhite'>Web Development</h3>
          <p className='decriptiontext'>
            We develop functional websites and apps that are optimised for
            performance and usability. With over five years of experience in the
            industry, providing businesses with exceptional products, our
            developers can build anything you require.
          </p>
          <a
            href='/about'
            className='gridButton'
            style={{ textDecoration: "none" }}>
            <Button className={classes.buttonStyle} variant='contained'>
              FIND OUT MORE
            </Button>
          </a>
        </Grid>
        <Grid
          lg={3}
          sm={6}
          xs={12}
          direction='column'
          ref={(element) => {
            elementRef.current[1] = element;
          }}>
          <ColorLensIcon
            className='gridIconsComp'
            style={{
              fontSize: 50,
            }}
          />
          <h3 className='walterWhite'>Web Design</h3>
          <p className='decriptiontext'>
            We have a strong design background and only use bespoke designs, you
            can be assured that your web site will be unique, visually awesome
            and relevant whilst meeting the demands that you and your target
            audience require.
          </p>
          <a
            href='/about'
            className='gridButton'
            style={{ textDecoration: "none" }}>
            <Button className={classes.buttonStyle} variant='contained'>
              FIND OUT MORE
            </Button>
          </a>
        </Grid>
        <Grid
          lg={3}
          sm={6}
          xs={12}
          direction='column'
          ref={(element) => {
            elementRef.current[2] = element;
          }}>
          <DvrIcon
            className='gridIconsComp'
            style={{
              fontSize: 50,
            }}
          />
          <h3 className='walterWhite'>Digital Marketing</h3>
          <p className='decriptiontext'>
            We use these services to identify our clients' target audiences in
            order to convert leads into sales. We use all available data to
            optimise websites and campaigns to ensure the best return on
            investment for our clients.
          </p>
          <a
            href='/about'
            className='gridButton'
            style={{ textDecoration: "none" }}>
            <Button className={classes.buttonStyle} variant='contained'>
              FIND OUT MORE
            </Button>
          </a>
        </Grid>
        <Grid
          lg={3}
          sm={6}
          xs={12}
          direction='column'
          ref={(element) => {
            elementRef.current[3] = element;
          }}>
          <SettingsSystemDaydreamIcon
            className='gridIconsComp'
            style={{
              fontSize: 50,
            }}
          />
          <h3 className='walterWhite'>Branding </h3>
          <p className='decriptiontext'>
            A strong brand identity is shaped by insight and research. We follow
            a clear process to make sure our creative ideas enable your business
            ambitions. Together we create a brand that makes an impact for all
            the right reasons.
          </p>
          <a
            href='/about'
            className='gridButton'
            style={{ textDecoration: "none" }}>
            <Button className={classes.buttonStyle} variant='contained'>
              FIND OUT MORE
            </Button>
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}
