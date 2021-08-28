import { Container, Grid, Button } from "@material-ui/core";
import React, { useRef } from "react";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import PortfolioItemOne from "./PortfolioItemOne";
import PortfolioItemTwo from "./PortfolioItemTwo";

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
    padding: "10px 15px",
    fontSize: "0.7rem",
    letterSpacing: "2px",
    fontWeight: "400",
    border: "1px solid black",
    marginTop: "1rem",
    borderRadius: "0",
    [theme.breakpoints.down("sm")]: {
      padding: "6px 11px",
      fontSize: "0.6rem",
      marginBottom: "4rem",
    },
  },
}));

export default function Portfolio() {
  let elementRef = useRef([]);
  const classes = useStyles();

  return (
    <Container maxWidth='lg' className='PortfolioStart'>
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
          <h4
            className='smallTitleBlack'
            ref={(element) => {
              elementRef.current[1] = element;
            }}>
            LONDON WEB DESIGN AGENCY
          </h4>
          <h3
            className='midTitleBlack'
            ref={(element) => {
              elementRef.current[2] = element;
            }}>
            OUR RECENT PROJECTS
          </h3>
          <p
            className='descriptionTextBlack'
            ref={(element) => {
              elementRef.current[3] = element;
            }}>
            One Cloud Media is a progressive and insightful design agency,
            technically and creatively skilled to translate your brand into its
            best digital self. Our design and development approach creates
            impactful, engaging brands and immersive digital experiences that
            bring you a return on creativity.
          </p>
          <Button
            href='/work'
            className={classes.buttonStyle}
            variant='contained'
            ref={(element) => {
              elementRef.current[5] = element;
            }}>
            VIEW OUR WORK
          </Button>
        </Grid>
        <Grid
          className='emptyGrid'
          item
          xs={12}
          sm={6}
          ref={(element) => {
            elementRef.current[0] = element;
          }}></Grid>
        <Grid
          item
          xs={12}
          sm={6}
          ref={(element) => {
            elementRef.current[0] = element;
          }}>
          <PortfolioItemOne />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          ref={(element) => {
            elementRef.current[0] = element;
          }}>
          <PortfolioItemTwo />
        </Grid>
      </Grid>
    </Container>
  );
}
