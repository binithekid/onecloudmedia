import React from "react";
import WebDevelopment from "./WebDevelopment";
import DigitalMarketing from "./DigitalMarketing";
import Branding from "./Branding";
import Container from "@material-ui/core/Container";
import DesingProcess from "../items/designprocess.png";
import hiddenImage from "../items/hiddenimage.png";
import { motion } from "framer-motion";

export default function MidSectionAbout() {
  return (
    <div>
      <Container maxWidth='lg'>
        <div className='midsectionabout'>
          <div className='visionTitleBlack'>
            <h4 className='smallTitleVisionBlack'>OUR VISION FOR YOU</h4>
            <h3 className='midTitleVisionBlack'>
              MODERN, BEAUTIFUL & INTERACTIVE DESIGN
            </h3>
          </div>
          <p className='descriptionTextVisionBlack'>
            We offer design thinking-based and technology driven services in
            digital product innovation, customer experience management, and
            digital transformation.
            <br /> Our service offerings include:
          </p>
        </div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "tween",
            stiffness: 20,
            default: { duration: 0.5 },
          }}
          src={DesingProcess}
          alt='DesingProcess'
          className='imageAboutMidFirstSection'
        />
        <WebDevelopment />
        <div className='gaps'></div>
        <DigitalMarketing />
        <motion.img
          style={{ paddingTop: "7rem !important" }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "tween",
            stiffness: 20,
            default: { duration: 0.5 },
          }}
          src={hiddenImage}
          alt='hiddenImage'
          className='imageAboutMidSecondSection'
        />
        <Branding />
      </Container>
    </div>
  );
}
