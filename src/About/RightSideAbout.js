import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function RightSideAbout() {
  let elementRef = useRef([]);

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 1,
      delay: 4,
      y: "20",
      opacity: 0,
      stagger: 0.5,
      ease: "ease-in",
      scrollTrigger: {
        trigger: ".smallTitleBlack",
        start: ".smallTitleBlack 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div className='aboutPageRightSide'>
      <h4
        ref={(element) => {
          elementRef.current[0] = element;
        }}
        className='smallTitleBlack'>
        LONDON WEB DESIGN AGENCY
      </h4>
      <h3
        ref={(element) => {
          elementRef.current[1] = element;
        }}
        className='midTitleBlack'>
        CREATIVE BRAND DESIGN
      </h3>
      <p
        ref={(element) => {
          elementRef.current[2] = element;
        }}
        className='descriptionTextBlack'>
        We are an award-winning London web design agency, specialising in
        bespoke website design & development. We’ve made it our mission to
        cultivate interactive web experiences that excite and inspire. We work
        through a bespoke process from the start to the end of your project,
        ensuring 100% design satisfaction.
      </p>
      <p
        ref={(element) => {
          elementRef.current[3] = element;
        }}
        className='descriptionTextBlack'>
        We’re an established, experienced and trusted, London based team with
        over a decades’ experience in providing bespoke web design solutions –
        we’re well equipped to take your business concept from initial idea to
        reality.
      </p>
    </div>
  );
}
