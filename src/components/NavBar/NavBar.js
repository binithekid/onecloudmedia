import React, { useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import "../../App.css";
import weblogo from "../../items/weblogo.png";
import Drawer from "../Drawer/Drawer";
import { TweenMax, Power3 } from "gsap";

export default function NavBar() {
  //Breakpoints
  const theme = useTheme();
  const xtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  //GSAP ANIMATION
  let logoCloud = useRef(null);
  let homeLink = useRef(null);
  let workLink = useRef(null);
  let aboutLink = useRef(null);
  let contactLink = useRef(null);

  useEffect(() => {
    TweenMax.to(logoCloud, 1, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    TweenMax.to(homeLink, 1.8, {
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenMax.to(workLink, 1.8, {
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.3,
    });
    TweenMax.to(aboutLink, 1.8, {
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.4,
    });
    TweenMax.to(contactLink, 1.8, {
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.5,
    });
  }, []);

  return (
    <div>
      <AppBar
        position='static'
        style={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar>
          {xtraSmall ? (
            <Drawer />
          ) : (
            <>
              <div className='holder' style={{ flexGrow: "1" }}>
                {small ? (
                  <a href='/'>
                    <img
                      ref={(el) => {
                        logoCloud = el;
                      }}
                      src={weblogo}
                      alt='weblogo'
                      style={{
                        marginTop: "45px",
                        marginLeft: "1px",
                        maxWidth: "60%",
                        height: "auto",
                        display: "block",
                      }}
                      edge='start'
                      color='inherit'
                      aria-label='menu'
                    />
                  </a>
                ) : (
                  <a href='/'>
                    <img
                      ref={(el) => {
                        logoCloud = el;
                      }}
                      src={weblogo}
                      alt='weblogo'
                      style={{
                        marginTop: "45px",
                        marginLeft: "20px",
                        maxWidth: "23%",
                        height: "auto",
                        display: "block",
                      }}
                      edge='start'
                      color='inherit'
                      ari
                      a-label='menu'
                    />
                  </a>
                )}
              </div>
              <a
                href='/'
                style={{ textDecoration: "none" }}
                className='menuHover'>
                <Typography
                  style={{ color: "white" }}
                  ref={(el) => (homeLink = el)}
                  className='menuItems'>
                  home.
                </Typography>
              </a>
              <a
                href='/work'
                style={{ textDecoration: "none" }}
                className='menuHover'>
                <Typography
                  style={{ color: "white" }}
                  ref={(el) => (workLink = el)}
                  className='menuItems'>
                  work.
                </Typography>
              </a>
              <a
                href='/about'
                style={{ textDecoration: "none" }}
                className='menuHover'>
                <Typography
                  style={{ color: "white" }}
                  ref={(el) => (aboutLink = el)}
                  className='menuItems'>
                  about.
                </Typography>
              </a>
              <a
                href='/contact'
                style={{ textDecoration: "none" }}
                className='menuHover'>
                <Typography
                  style={{ color: "white" }}
                  ref={(el) => (contactLink = el)}
                  className='menuItems'>
                  contact.
                </Typography>
              </a>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
