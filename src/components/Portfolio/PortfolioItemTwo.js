import React, { useRef, useEffect } from "react";
import rmpestcontrol from "./Images/rmpestcontrol.png";
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

export default function PortfolioItemTwo() {
  const classes = useStyles();
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 2,
      yoyo: true,
      x: "100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projectTitleTwo",
        start: ".projectTitleTwo 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
    gsap.from(".projectInfoTwo", {
      duration: 1.5,
      x: "100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projectTitleTwo",
        start: ".projectTitleTwo 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <>
      <div className='sectionPortTwo'>
        <div
          className='imgContainerTwo'
          ref={(element) => {
            elementRef.current[0] = element;
          }}>
          <a href='/rmpestcontrol' style={{ textDecoration: "none" }}>
            <img
              src={rmpestcontrol}
              alt='rmpestcontrol'
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className='portfolioImageTwo'
            />
          </a>
        </div>
      </div>
      <div className='projectInfoTwo'>
        <p className='smallTitlePortTwo'>Web Design // Branding </p>
        <h4 className='projectTitleTwo'>RM Pest Control</h4>
        <Button
          href='rmpestcontrol'
          className={classes.buttonStyle}
          variant='contained'>
          FIND OUT MORE
        </Button>
      </div>
    </>
  );
}
