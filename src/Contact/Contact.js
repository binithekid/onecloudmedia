import React, { useRef, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";
import gsap from "gsap";
import { Helmet } from "react-helmet";
import MapContainer from "./MapComp";
import favicon from "../items/favicon.ico";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Contact() {
  let elementRef = useRef([]);
  const classes = useStyles();

  useEffect(() => {
    document.title = "Contact - OneCloudMedia";

    gsap.from(elementRef.current, {
      duration: 1,
      yoyo: true,
      stagger: 0.5,
      y: "20",
      opacity: 0,
      ease: "power3.out",
      //   scrollTrigger: {
      //     trigger: ".triggerTings2",
      //     start: ".triggerTings2 100%",
      //     end: "bottom ",
      //     toggleActions: "play complete false none",
      //     markers: false,
      //   },
    });

    gsap.from(".contactLeft", {
      duration: 1.5,
      x: "-100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".midSmallHeading",
        start: ".midSmallHeading 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });

    gsap.from(".socialsandcontact", {
      duration: 1.5,
      x: "-100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".midSmallHeading",
        start: ".midSmallHeading 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });

    gsap.from(".contactRight", {
      duration: 1.5,
      x: "100",
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".midSmallHeading",
        start: ".midSmallHeading 100%",
        end: "bottom ",
        toggleActions: "play complete false none",
        markers: false,
      },
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact - OneCloudMedia</title>
        <link rel='icon' type='image/png' href={favicon} sizes='25x25' />
        <meta
          name='description'
          content='If you would like to arrange a meeting to discuss a potential
                  project or have any queries that you think we could help with,
                  please give us a call on the button below or use the contact
                  form on this page.'
        />
      </Helmet>
      <NavBar />
      <div className='ContactPage'>
        <Container
          maxWidth='lg'
          style={{ marginTop: "6rem" }}
          className='triggerClass'>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h4
                  className='smallTitle'
                  ref={(element) => {
                    elementRef.current[0] = element;
                  }}>
                  CONTACT US
                </h4>
                <h3
                  className='midTitle'
                  ref={(element) => {
                    elementRef.current[1] = element;
                  }}>
                  SAY HELLO 👋
                </h3>
                <p
                  style={{ width: "68%" }}
                  className='descriptionText'
                  ref={(element) => {
                    elementRef.current[2] = element;
                  }}>
                  If you would like to arrange a meeting to discuss a potential
                  project or have any queries that you think we could help with,
                  please give us a call on the button below or use the contact
                  form on this page.
                </p>
                <a href='tel: 07762279787'>
                  <motion.Button
                    style={{
                      textTransform: "uppercase",
                      background: "transparent",
                      color: "white",
                      fontFamily: "Roboto Mono",
                      padding: "10px 15px",
                      fontSize: "0.7rem",
                      letterSpacing: "2px",
                      fontWeight: "400",
                      border: "1px solid white",
                      marginTop: "1rem",
                      borderRadius: "0",
                    }}
                    className='buttonStyle'
                    variant='contained'
                    ref={(element) => {
                      elementRef.current[3] = element;
                    }}>
                    GIVE US A CALL
                  </motion.Button>
                </a>
              </Grid>
            </Grid>
          </div>
          <div className='scroll-downTwo'></div>
        </Container>
        <div className='gaps'></div>
        <div className='gaps'></div>
        <div className='detailsForm'>
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12} sm={12} className='contactLeft'>
                <h3 className='contactHeading'>CONTACT DETAILS</h3>
                <p className='contactPara'>
                  Due to the impact of Covid we are currently operating out of
                  our London office, with a remote workforce. If you would like
                  to arrange a meeting we’d be happy to arrange a call to
                  discuss your requirements.
                </p>
                <h4 className='midSmallHeading'>London Office</h4>
                <h5 className='smallHeading'>20-22 Wenlock Road</h5>
                <h5 className='smallHeading'>Tottenham</h5>
                <h5 className='smallHeading'>London </h5>
                <h5 className='smallHeading'>N17 7GU</h5>
              </Grid>
              <Grid item md={6} xs={12} sm={12} className='contactRight'>
                <h3 className='contactHeading'>CONTACT FORM</h3>
                <ContactForm />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className='gaps'></div>
        <div className='socialsandcontact'>
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <div className='iconButtonContact'>
                  <Button
                    href='tel: 07762279787'
                    variant='contained'
                    color='secondary'
                    style={{
                      textTransform: "uppercase",
                      background: "transparent",
                      color: "white",
                      fontFamily: "Roboto Mono",
                      padding: "10px 15px",
                      fontSize: "0.9rem",
                      letterSpacing: "2px",
                      fontWeight: "200",
                      marginTop: "1rem",
                      borderRadius: "0",
                    }}
                    className='buttonStyle'
                    startIcon={<PhoneIcon />}>
                    <p>(+44) 07762 279 787</p>
                  </Button>
                </div>
                <div className='iconButtonContact'>
                  <Button
                    href='tel: 07762279787'
                    variant='contained'
                    color='secondary'
                    style={{
                      textTransform: "uppercase",
                      background: "transparent",
                      color: "white",
                      fontFamily: "Roboto Mono",
                      padding: "10px 15px",
                      fontSize: "0.9rem",
                      letterSpacing: "2px",
                      fontWeight: "200",
                      marginTop: "1rem",
                      borderRadius: "0",
                    }}
                    className='buttonStyle'
                    startIcon={<PhoneIcon />}>
                    <p>(+44) 0207 870 5794</p>
                  </Button>
                </div>
                <div className='iconButtonContact'>
                  <Button
                    href='mailto: onecloudmediauk@gmail.com'
                    variant='contained'
                    color='secondary'
                    style={{
                      textTransform: "lowercase",
                      background: "transparent",
                      color: "white",
                      fontFamily: "Roboto Mono",
                      padding: "10px 15px",
                      fontSize: "0.9rem",
                      letterSpacing: "2px",
                      fontWeight: "200",
                      marginTop: "1rem",
                      borderRadius: "0",
                    }}
                    className='buttonStyle'
                    startIcon={<EmailIcon />}>
                    <p>info@onecloudmedia.com</p>
                  </Button>
                </div>
                <div className='iconButtonContact'>
                  <Button
                    href='https://www.instagram.com/onecloudmedia__/'
                    variant='contained'
                    color='secondary'
                    style={{
                      textTransform: "lowercase",
                      background: "transparent",
                      color: "white",
                      fontFamily: "Roboto Mono",
                      padding: "10px 15px",
                      fontSize: "0.9rem",
                      letterSpacing: "2px",
                      fontWeight: "200",
                      marginTop: "1rem",
                      borderRadius: "0",
                    }}
                    className='buttonStyle'
                    startIcon={<InstagramIcon />}>
                    <p>onecloudmedia__</p>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className='gaps'></div>
        <br />
        <br />
        <br />
        <br />
        <MapContainer />
        <div className='gaps'></div> <div className='gaps'></div>
        <div className='gaps'></div> <div className='gaps'></div>
      </div>
      <div className='mobileGap'></div>
      <ContactFooter />
    </div>
  );
}
