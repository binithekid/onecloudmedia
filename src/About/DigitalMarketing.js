import React, { useRef, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import digitalmarketinggraphic from "../items/digitalmarketinggraphic.png";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function DigitalMarketing() {
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 2,
      yoyo: true,
      x: "-100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".descriptionTextVisionBlackTwoDigi",
        start: ".descriptionTextVisionBlackTwo 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });

    gsap.from(".imageAboutMidDigi", {
      duration: 1.5,
      x: "100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".descriptionTextVisionBlackTwoDigi",
        start: ".descriptionTextVisionBlackTwoDigi 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12} sm={12}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "tween",
                stiffness: 20,
                default: { duration: 0.5 },
              }}
              src={digitalmarketinggraphic}
              alt='digitalmarketinggraphic'
              className='imageAboutMidDigi'
            />
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <h3
              ref={(element) => {
                elementRef.current[0] = element;
              }}
              className='midTitleVisionBlackTwoDigi'>
              DIGITAL MARKETING
            </h3>
            <p
              ref={(element) => {
                elementRef.current[1] = element;
              }}
              className='descriptionTextVisionBlackTwoDigi'>
              We can create a plan of marketing activity – delivered through
              multiple channels – that will get your business noticed. Whatever
              the platform, we make sure our creative marketing work is
              original, memorable and shareable. When it comes to content,
              quantity is important, but not at the expense of quality.
            </p>
            <p
              ref={(element) => {
                elementRef.current[2] = element;
              }}
              className='descriptionTextVisionBlackTwoDigi'>
              We set ourselves high standards: every campaign, every piece of
              work we produce has to shine. And we don’t satisfy ourselves with
              vague notions of brand awareness in place of hits and ROI. In fact
              everything we do is designed to leverage a financial reward.
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
