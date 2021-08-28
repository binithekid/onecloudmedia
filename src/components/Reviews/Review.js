import React, { useRef, useEffect } from "react";
import { Container, Grid, Card, CardContent } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import gsap from "gsap";
import Button from "@material-ui/core/Button";

export default function Review() {
  let elementRef = useRef([]);
  const [value] = React.useState(5);

  const hover = () => {
    gsap.to(".cardOne", {
      scale: 1.03,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  const leave = () => {
    gsap.to(".cardOne", {
      scale: 1,
      duration: 1,
      ease: "power4.out",
    });
  };

  const hoverTwo = () => {
    gsap.to(".cardTwo", {
      scale: 1.03,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  const leaveTwo = () => {
    gsap.to(".cardTwo", {
      scale: 1,
      duration: 1,
      ease: "power4.out",
    });
  };

  const hoverThree = () => {
    gsap.to(".cardThree", {
      scale: 1.03,
      duration: 0.5,
      ease: "power4.out",
    });
  };

  const leaveThree = () => {
    gsap.to(".cardThree", {
      scale: 1,
      duration: 1,
      ease: "power4.out",
    });
  };

  useEffect(() => {
    gsap.from(elementRef.current, {
      duration: 2,
      yoyo: true,
      stagger: 0.7,
      y: "20",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".triggerTings",
        start: ".triggerTings 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div>
      <Container maxWidth='lg'>
        <div className='reviewTitle'>
          <h4 className='smallTitleBlackReview'>ON GOOGLE REVIEWS</h4>
          <h3 className='midTitleBlackReview'>WORD FROM OUR CLIENTS</h3>
          <p className='descriptionTextVisionReview'>
            We take great pride in our work and do our utmost to ensure that
            you, the customer, is completely satisfied with the final product.
            We also offer unlimited revisions so if something needs changing we
            would be more than happy to help.
            <br />
            Take a look at what some of our previous clients have said:
          </p>
        </div>
        <div className='triggerTings'></div>
        <Grid
          container
          spacing={3}
          direction='row'
          justifyContent='center'
          alignItems='center'>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className='cardOne'
              variant='outlined'
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
              ref={(element) => {
                elementRef.current[0] = element;
              }}
              onMouseEnter={() => hover()}
              onMouseLeave={() => leave()}>
              <CardContent>
                <h4 className='cardTitle'>Daniel Carroll</h4>
                <h5 className='cardName'>Managing Director, RM Pest Control</h5>
                <Rating
                  name='read-only'
                  value={value}
                  readOnly
                  size='small'
                  style={{ color: "black" }}
                />
                <hr style={{ opacity: "40%" }} />
                <p className='cardText'>
                  I had a great experience working with One Cloud Media. They
                  did a wonderful job redesigning and migrating a website for an
                  organization I work for while addressing all concerns and
                  offering welcomed guidance. With competitive rates and a high
                  standard for client care, I would definitely recommend them
                  again.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              className='cardTwo'
              variant='outlined'
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
              ref={(element) => {
                elementRef.current[1] = element;
              }}
              onMouseEnter={() => hoverTwo()}
              onMouseLeave={() => leaveTwo()}>
              <CardContent>
                <h4 className='cardTitle'>Alexander Ojo</h4>
                <h5 className='cardName'>Managing Director, UK Dispatch</h5>
                <Rating
                  name='read-only'
                  value={value}
                  readOnly
                  size='small'
                  style={{ color: "black" }}
                />
                <hr style={{ opacity: "40%" }} />
                <p className='cardText'>
                  One Cloud Media impresses through an outstanding customer
                  inclusion & support approach whilst designing, prototyping,
                  and developing the website. They ensure full transparency in
                  each step, apply a very contemporary, fresh, and young design
                  with new technical features that makes their developments
                  admirable and exceptional.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className='gridThree'>
            <Card
              className='cardThree'
              variant='outlined'
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
              ref={(element) => {
                elementRef.current[2] = element;
              }}
              onMouseEnter={() => hoverThree()}
              onMouseLeave={() => leaveThree()}>
              <CardContent>
                <h4 className='cardTitle'>Nina Bradley</h4>
                <h5 className='cardName'>Director, Mhikl Ato</h5>
                <Rating
                  name='read-only'
                  value={value}
                  readOnly
                  size='small'
                  style={{ color: "black" }}
                />
                <hr style={{ opacity: "40%" }} />
                <p className='cardText'>
                  The team at One Cloud Media are extremely professional, from
                  day one the communication skills were excellent and they
                  created a fantastic website for my business. For any issue's
                  they responded promptly. I would highly recommend One Cloud
                  Media for any Website Design Projects.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div className='buttonCard'>
          <Button
            href='/contact'
            size='small'
            endIcon={
              <ArrowForwardIcon
                style={{
                  marginLeft: "-4px",
                  fontSize: "12px",
                  marginTop: "-6px",
                }}
              />
            }
            ref={(element) => {
              elementRef.current[3] = element;
            }}>
            <p className='buttonCard'>Find out more</p>
          </Button>
        </div>
      </Container>
    </div>
  );
}
