import React from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import Grid from "@material-ui/core/Grid";
import webdevelopment from "../items/webdevelopment.png";
import branding from "../items/branding.png";
import digitalmarketing from "../items/digitalmarketing.jpeg";

const spring = { stiffness: 100, damping: 15, mass: 0.2 };

const s = {
  wrap: {
    overflow: "hidden",
    width: "100%",
    height: "80vh",
    position: "relative",
    display: "grid",
    placeItems: "center",
    marginTop: "-10rem",
  },
  card: {
    boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 20px 0px",
    width: "540px",
    height: "300px",
    borderRadius: "10px",
    background: "#ffffff",
    position: "absolute",
    zIndex: "1",
  },
  front: {
    cursor: "pointer",
  },
  middle: {
    scale: 0.9,
    marginBottom: "60px",
  },
  back: {
    scale: 0.8,
    marginBottom: "120px",
  },
  bg: {
    width: "100vw",
    height: "100vh",
  },
};

export default function CardEffect() {
  const frontRotate = useSpring(0);
  const middleRotate = useTransform(frontRotate, [0, 10], [0, 20]);
  const backRotate = useTransform(middleRotate, [0, 20], [0, 30]);

  const opacity = useTransform(frontRotate, [0, 10], [1, 0.5]);
  const blur = useTransform(frontRotate, [0, 10], [`blur(0px)`, `blur(20px)`]);

  const frontX = useMotionValue(0);
  const middleX = useSpring(frontX, spring);
  const backX = useSpring(middleX, spring);

  const frontY = useMotionValue(0);
  const middleY = useSpring(frontY, spring);
  const backY = useSpring(middleY, spring);

  const onDrag = () => {
    middleY.set(frontY.get() - 60);
    backY.set(middleY.get() - 60);
  };

  const onDragStart = () => {
    frontRotate.set(10);
  };

  const onDragEnd = () => {
    frontRotate.set(0);
  };

  return (
    <div className='cardAnimation ' style={s.wrap}>
      <motion.article
        style={{
          ...s.card,
          ...s.back,
          rotate: backRotate,
          y: backY,
          x: backX,
          opacity,
        }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <h4 className='cardTitleTwo'>Branding</h4>
            <h5 className='cardNameTwo'>One Cloud Media</h5>
            <hr style={{ opacity: "40%", marginLeft: "2rem" }} />
            <p className='cardTextTwo'>
              We develop functional websites and apps that are optimised for
              performance and usability. With over five years of experience in
              the industry, providing businesses with exceptional products, our
              developers can build anything you require.
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={branding}
              alt='webimage'
              className='imageLeft'
              draggable='false'
            />
          </Grid>
        </Grid>
      </motion.article>
      <motion.article
        style={{
          ...s.card,
          ...s.middle,
          rotate: middleRotate,
          y: middleY,
          x: middleX,
          opacity,
        }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <h4 className='cardTitleTwo'>Digital Marketing</h4>
            <h5 className='cardNameTwo'>One Cloud Media</h5>
            <hr style={{ opacity: "40%", marginLeft: "2rem" }} />
            <p className='cardTextTwo'>
              From 1979 to 1999 it was lived in by Dennis Severs, who gradually
              recreated the rooms as a time capsule. The house reflects the life
              of an imaginary Huguenot family, who had lived there since it was
              built in 1724.
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={webdevelopment}
              alt='webimage'
              className='imageLeft'
              draggable='false'
            />
          </Grid>
        </Grid>
      </motion.article>
      <motion.article
        drag
        onDrag={onDrag}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        dragConstraints={{ top: 0, bottom: 0, right: 0, left: 0 }}
        dragElastic={1}
        style={{
          ...s.card,
          ...s.front,
          x: frontX,
          y: frontY,
          rotate: frontRotate,
          opacity,
        }}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <h4 className='cardTitleTwo'>Web Design & Development</h4>
            <h5 className='cardNameTwo'>One Cloud Media</h5>
            <hr style={{ opacity: "40%", marginLeft: "2rem" }} />
            <p className='cardTextTwo'>
              We develop functional websites and apps that are optimised for
              performance and usability. With over five years of experience in
              the industry, providing businesses with exceptional products, our
              developers can build anything you require.
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={digitalmarketing}
              alt='webimage'
              className='imageLeft'
              draggable='false'
            />
          </Grid>
        </Grid>
      </motion.article>
      <motion.div style={{ ...s.bg, filter: blur }} />
    </div>
  );
}
