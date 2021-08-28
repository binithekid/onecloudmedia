import React, { useRef, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import TextType from "./components/TextType/TextType";
import Description from "./components/Description/Description";
import Vision from "./components/Vision/Vision";
import gsap from "gsap";
import MidSection from "./components/MidSection/MidSection";
import Portfolio from "./components/Portfolio/Portfolio";
import Review from "./components/Reviews/Review";
import Footer from "./components/Footer/Footer";
import MobileImage from "./components/MobileImage/MobileImage";
import { Helmet } from "react-helmet";
import favicon from "./items/favicon.ico";

export default function Home() {
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { backgroundColor: "black" },
      {
        duration: 0.6,
        backgroundColor: "#FFFFFF",
        ease: "linear",
        scrollTrigger: {
          trigger: ".backChange",
          markers: false,
          start: ".backChange 100%",
          endTrigger: ".finaldestination",
          end: "bottom",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      elementRef.current,
      { color: "#0f0f0f" },
      {
        duration: 0.6,
        color: "#000000",
        ease: "linear",
        scrollTrigger: {
          trigger: ".backChange",
          markers: false,
          start: ".backChange 100%",
          endTrigger: ".finaldestination",
          end: "bottom",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div
      className='startof'
      ref={(element) => {
        elementRef.current[0] = element;
      }}>
      <Helmet>
        <title>Home - OneCloudMedia</title>
        <link rel='icon' type='image/png' href={favicon} sizes='25x25' />
        <meta
          name='description'
          content='One Cloud Media is a London based web design and digital marketing agency, specialising in high quality website design & social media marketing. It is our mission to create immersive and interactive web experiences that excite and inspire every user. We work through a bespoke process from the start to the end of your project, ensuring 100% design satisfaction.'
        />
      </Helmet>
      <NavBar />
      <TextType />
      <div className='lilgap'></div>
      <Description />
      <MobileImage />
      <Vision />
      <MidSection className='Midsection' />
      <div className='backChange'></div>
      <Portfolio />
      <div className='gapHomePage'></div>
      <Review />
      <div className='gapHomePage'></div>
      <Footer />
      <div className='finaldestination'></div>
    </div>
  );
}
