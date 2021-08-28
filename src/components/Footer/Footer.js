import React, { useState, useEffect, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    textTransform: "uppercase",
    background: "transparent",
    color: "black",
    fontFamily: "Roboto Mono",
    fontSize: "0.6rem",
    letterSpacing: "2px",
    fontWeight: "400",
    border: "1px solid black",
    borderRadius: "0",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [submitEmail, setSubmit] = useState("");
  let elementRef = useRef([]);

  const emailSubmit = (event) => {
    event.preventDefault();
    setSubmit(email);
    setEmail("Thank You!");
  };

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 1.3,
      yoyo: true,
      stagger: 0.2,
      y: "20",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".triggerTings2",
        start: ".triggerTings2 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div>
      <Container maxWidth='lg'>
        <div className='stayConnected'>
          <h4>Stay Connected</h4>
          <p>
            Drop us your email and we will send you offers and promotions that
            you won't find anywhere else
          </p>
          <Grid
            container
            spacing={3}
            direction='row'
            justifyContent='center'
            alignItems='center'>
            <Grid item xs={12} sm={4}>
              <Grid container>
                <Grid item>
                  <TextField
                    value={email}
                    label='Enter Your Email'
                    id='standard-basic'
                    fullWidth
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Grid>

                <Grid item>
                  <Button
                    className={classes.buttonStyle}
                    fullWidth
                    variant='contained'
                    onClick={emailSubmit}
                    style={{
                      display: "inline-block",
                      marginTop: "1rem",
                      marginLeft: "1rem",
                    }}>
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <br />
        <br />
        <Grid
          container
          spacing={3}
          direction='row'
          justifyContent='center'
          alignItems='center'>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <p
              className='interstingProject'
              style={{ marginTop: "9rem", marginLeft: "rem" }}
              ref={(element) => {
                elementRef.current[0] = element;
              }}>
              Got an interesting project? We can help.
            </p>
          </Grid>
        </Grid>
        <hr
          ref={(element) => {
            elementRef.current[1] = element;
          }}
        />
        <Grid
          container
          spacing={3}
          direction='row'
          justifyContent='center'
          alignItems='center'>
          <Grid item xs={12} sm={4}>
            <p
              className='connectFooter'
              ref={(element) => {
                elementRef.current[2] = element;
              }}>
              connect with us:
            </p>
            <a
              className='footerLink'
              href='https://www.instagram.com/onecloudmedia__/'>
              <p
                className='textLink'
                ref={(element) => {
                  elementRef.current[3] = element;
                }}>
                @onecloudmedia__
              </p>
            </a>
            <div className='triggerTings2'></div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p
              className='connectFooter'
              ref={(element) => {
                elementRef.current[2] = element;
              }}>
              follow us:
            </p>
            <a className='footerLink' href='https://twitter.com/onecloudmedia_'>
              <TwitterIcon
                className='textLink'
                ref={(element) => {
                  elementRef.current[5] = element;
                }}
              />
            </a>
            <a
              className='footerLink'
              href='https://www.instagram.com/onecloudmedia__/'>
              <InstagramIcon
                className='textLink'
                style={{ marginLeft: "0.5rem" }}
                ref={(element) => {
                  elementRef.current[6] = element;
                }}
              />
            </a>
            <a
              className='footerLink'
              href='https://www.youtube.com/channel/UCZKNs9wGZlyi2f5WUoTkCjA'>
              <YouTubeIcon
                className='textLink'
                style={{ marginLeft: "0.5rem" }}
                ref={(element) => {
                  elementRef.current[7] = element;
                }}
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p
              className='connectFooter'
              ref={(element) => {
                elementRef.current[2] = element;
              }}>
              say hello:
            </p>
            <a className='footerLink' href='mailto: onecloudmediauk@gmail.com'>
              <p
                className='textLink'
                ref={(element) => {
                  elementRef.current[9] = element;
                }}>
                info@onecloudmedia.com
              </p>
            </a>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <p
          ref={(element) => {
            elementRef.current[10] = element;
          }}
          className='allRightsReserved'>
          © 2021 One Cloud Media | Registered in England No.093202920
        </p>
        <br />
      </Container>
    </div>
  );
}
