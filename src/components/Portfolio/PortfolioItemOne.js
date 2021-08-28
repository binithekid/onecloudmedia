import React, { useRef, useEffect } from "react";
import ukdispatch from "./Images/ukdispatch.png";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import gsap from "gsap";

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
    color: "black",
    fontFamily: "Roboto Mono",
    padding: "7px 9px",
    fontSize: "0.5rem",
    letterSpacing: "2px",
    fontWeight: "400",
    border: "1px solid black",
    marginTop: "0.6rem",
    borderRadius: "0",
  },
}));

export default function PortfolioItemOne() {
  const classes = useStyles();
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 2,
      yoyo: true,
      x: "-100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projectTitle",
        start: ".projectTitle 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
    gsap.from(".projectInfo", {
      duration: 1.5,
      x: "-100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projectTitle",
        start: ".projectTitle 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <>
      <div className='sectionPort'>
        <div
          className='imgContainer'
          ref={(element) => {
            elementRef.current[0] = element;
          }}>
          <a href='/ukdispatch'>
            <img
              src={ukdispatch}
              alt='ukdispatch'
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              className='portfolioImageOne'
            />
          </a>
        </div>
      </div>
      <div className='projectInfo'>
        <p className='smallTitlePort' style={{ zIndex: "9999" }}>
          App Design // Web Deign // Social Media
        </p>
        <h4 className='projectTitle'>UK Dispatch</h4>
        <Button
          href='/ukdispatch'
          className={classes.buttonStyle}
          variant='contained'>
          FIND OUT MORE
        </Button>
      </div>
    </>
  );
}
