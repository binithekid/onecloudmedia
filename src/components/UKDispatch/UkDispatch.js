import React, { useEffect, useRef } from "react";
import { Container, Grid } from "@material-ui/core";
import NavBar from "../NavBar/NavBar";
import UkDispatchVid from "./UkDispatchVid";
import ContactFooter from "../../Contact/ContactFooter";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import favicon from "../../items/favicon.ico";

export default function UkDispatch() {
  let elementRef = useRef([]);

  useEffect(() => {
    document.title = "UK Dispatch - OneCloudMedia";

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
        <title>UK Dispatch - OneCloudMedia</title>
        <link rel='icon' type='image/png' href={favicon} sizes='25x25' />
        <meta
          name='description'
          content='UK Dispatch were in need of a new website to promote their courier
              service in London'
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
                UK DISPATCH
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
                web/app development & social media
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
                8th March 2020
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <p className='connectFooter'>finished:</p>
              <p
                style={{ marginTop: "-1rem" }}
                ref={(element) => {
                  elementRef.current[4] = element;
                }}>
                12th May 2020
              </p>
            </Grid>
          </Grid>
          <br />
          <Grid
            item
            xs={12}
            ref={(element) => {
              elementRef.current[5] = element;
            }}>
            <p className='examplePara'>
              UK Dispatch were in need of a new website to promote their courier
              service in London. One Cloud Media's wide portfolio of websites
              using interactive animation & effects made us a cracking choice
              for the new project, to create something modern & unique.
            </p>
            <p style={{ marginTop: "1rem" }} className='examplePara'>
              No complex functionality was required for this projects, meaning
              we could focus on creating a really bold, unique design without
              compromising user experience.
            </p>
          </Grid>
          <br />
          <Grid
            item
            xs={12}
            ref={(element) => {
              elementRef.current[6] = element;
            }}>
            <UkDispatchVid />
          </Grid>
        </Container>
      </div>
      <ContactFooter />
    </div>
  );
}
