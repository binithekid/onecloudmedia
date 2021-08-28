import React, { useRef, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import brandinggraphic from "../items/brandinggraphic.png";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Branding() {
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 2,
      yoyo: true,
      x: "-100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".descriptionTextVisionBlackTwoBrand",
        start: ".descriptionTextVisionBlackTwo 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });

    gsap.from(".imageAboutMidBrand", {
      duration: 1.5,
      x: "100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".descriptionTextVisionBlackTwoBrand",
        start: ".descriptionTextVisionBlackTwoBrand 100%",
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
            <h3
              ref={(element) => {
                elementRef.current[0] = element;
              }}
              className='midTitleVisionBlackTwoBrand'>
              BRANDING
            </h3>
            <p
              ref={(element) => {
                elementRef.current[1] = element;
              }}
              className='descriptionTextVisionBlackTwoBrand'>
              A strong brand identity and tone of voice is shaped by questions,
              insight and research. We follow a clear process to make sure our
              creative ideas enable your business ambitions. Together we create
              a brand that makes an impact for all the right reasons.
            </p>
            <p
              ref={(element) => {
                elementRef.current[2] = element;
              }}
              className='descriptionTextVisionBlackTwoBrand'>
              Our team of experienced designers create striking brochures,
              leaflets and business cards that compliments your digital work and
              adds value to your customers’ experience. We work with clever copy
              writers to craft words that build your brand in the best possible
              way.
            </p>
          </Grid>
          <Grid item md={6} xs={12} sm={12}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "tween",
                stiffness: 20,
                default: { duration: 0.5 },
              }}
              src={brandinggraphic}
              alt='webgraphic'
              className='imageAboutMidBrand'
              style={{ marginTop: "1rem" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
