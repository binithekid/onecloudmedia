import React, { useEffect, useRef } from "react";
import { Container, Grid } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import RmPestokillVidPlay from "./RmPestControlVid";
import ContactFooter from "../../Contact/ContactFooter";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import favicon from "../../items/favicon.ico";

export default function RmPestControl() {
  let elementRef = useRef([]);

  useEffect(() => {
    document.title = "RM Pest Control - OneCloudMedia";

    gsap.from(elementRef.current, {
      duration: 2,
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
    <div
      ref={(element) => {
        elementRef.current[0] = element;
      }}>
      <Helmet>
        <title>RM Pest Control - OneCloudMedia</title>
        <link rel='icon' type='image/png' href={favicon} sizes='25x25' />
        <meta
          name='description'
          content='RM Pest Control came to One Cloud Media looking for a new,
              information-based website to replace their old website, which was
              set up on the HubSpot platform. '
        />
      </Helmet>
      <NavBar />
      <div className='jumbotron'>
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <h3
                ref={(element) => {
                  elementRef.current[1] = element;
                }}
                className='midTitleExample'>
                rm pest control
              </h3>
            </Grid>
          </Grid>
          <br />
          <Grid
            container
            spacing={3}
            direction='row'
            justifyContent='center'
            alignItems='center'>
            <Grid item xs={12} sm={4}>
              <p className='connectFooter'>service:</p>
              <p
                style={{ marginTop: "-1rem" }}
                ref={(element) => {
                  elementRef.current[2] = element;
                }}>
                web development
              </p>
              <div className='triggerTings2'></div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <p className='connectFooter'>started:</p>
              <p
                ref={(element) => {
                  elementRef.current[3] = element;
                }}
                style={{ marginTop: "-1rem" }}>
                24th April 2021
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <p className='connectFooter'>finished:</p>
              <p
                style={{ marginTop: "-1rem" }}
                ref={(element) => {
                  elementRef.current[4] = element;
                }}>
                3rd June 2021
              </p>
            </Grid>
          </Grid>
          <br />
          <Grid
            ref={(element) => {
              elementRef.current[5] = element;
            }}
            item
            xs={12}>
            <p className='examplePara'>
              RM Pest Control came to One Cloud Media looking for a new,
              information-based website to replace their old website, which was
              set up on the HubSpot platform. They wanted to make full use of
              the advantages offered by our services ensuring a modern, fresh
              design.
            </p>
            <p style={{ marginTop: "1rem" }} className='examplePara'>
              Our goal was not only to create an excellent design that attracts
              viewers, but also to design a unique digital experience.
              Interactive animations enables the new website to stand out and
              provide a better customer experience, resulting in increased
              engagement.
            </p>
          </Grid>
          <br />
          <Grid
            ref={(element) => {
              elementRef.current[6] = element;
            }}
            item
            xs={12}>
            <RmPestokillVidPlay />
          </Grid>
        </Container>
      </div>
      <ContactFooter />
    </div>
  );
}
