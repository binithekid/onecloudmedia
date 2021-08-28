import React, { useRef, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import gsap from "gsap";

export default function ContactFooter() {
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 1.3,
      yoyo: true,
      stagger: 0.2,
      y: "20",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".triggerTings2Contact",
        start: ".triggerTings2Contact 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div>
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
            style={{ marginTop: "9rem", color: "white" }}
            ref={(element) => {
              elementRef.current[0] = element;
            }}>
            Got an interesting project? We can help.
          </p>
        </Grid>
      </Grid>
      <hr
        style={{ width: "91%", height: "0.5px" }}
        ref={(element) => {
          elementRef.current[1] = element;
        }}
      />
      <Container>
        <Grid
          container
          spacing={3}
          direction='row'
          justifyContent='center'
          alignItems='center'>
          <Grid item xs={12} sm={4}>
            <p
              style={{ color: "white", fontWeight: "200", fontSize: "0.9rem" }}
              className='connectFooterContact'
              ref={(element) => {
                elementRef.current[2] = element;
              }}>
              connect with us:
            </p>
            <a
              className='blackFooter'
              href='https://www.instagram.com/onecloudmedia__/'>
              <p
                className='blackfootertext'
                style={{ color: "white" }}
                ref={(element) => {
                  elementRef.current[3] = element;
                }}>
                @onecloudmedia__
              </p>
            </a>
            <div className='triggerTings2Contact'></div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p
              style={{ color: "white", fontWeight: "200", fontSize: "0.9rem" }}
              className='connectFooterContact'
              ref={(element) => {
                elementRef.current[2] = element;
              }}>
              follow us:
            </p>
            <a
              className='blackFooter'
              href='https://twitter.com/onecloudmedia_'>
              <TwitterIcon
                className='blackfootertext'
                style={{ color: "white" }}
                ref={(element) => {
                  elementRef.current[5] = element;
                }}
              />
            </a>
            <a
              className='blackFooter'
              href='https://www.instagram.com/onecloudmedia__/'>
              <InstagramIcon
                className='blackfootertext'
                style={{ marginLeft: "0.5rem", color: "white" }}
                ref={(element) => {
                  elementRef.current[6] = element;
                }}
              />
            </a>
            <a
              className='blackFooter'
              href='https://www.youtube.com/channel/UCZKNs9wGZlyi2f5WUoTkCjA'>
              <YouTubeIcon
                className='blackfootertext'
                style={{ marginLeft: "0.5rem", color: "white" }}
                ref={(element) => {
                  elementRef.current[7] = element;
                }}
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={4}>
            <p
              style={{ color: "white", fontWeight: "200", fontSize: "0.9rem" }}
              className='connectFooterContact'
              ref={(element) => {
                elementRef.current[2] = element;
              }}>
              say hello:
            </p>
            <a href='mailto: onecloudmediauk@gmail.com' className='blackFooter'>
              <p
                className='blackfootertext'
                style={{ color: "white" }}
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
          style={{ color: "white" }}
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
