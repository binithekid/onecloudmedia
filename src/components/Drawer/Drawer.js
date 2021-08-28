import React, { useState, useRef, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton, makeStyles } from "@material-ui/core";
import weblogo from "../../items/weblogo.png";
import "../../App.css";
import CloseIcon from "@material-ui/icons/Close";
import { TweenMax, Power3 } from "gsap";

//STYLE MAKESTYLES
const useStyles = makeStyles((theme) => ({
  menuButtonContainer: {
    marginLeft: "auto",
  },
  listItemStyle: {
    fontFamily: "Roboto Mono",
    fontWeight: "400",
    textAlign: "center",
    color: "black",
    textDecoration: "none",
  },
  paper: {
    width: "100%",
  },
  closeMenu: {
    position: "absolute",
    top: "2.2%",
    right: "3%",
  },
}));

export default function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  //GSAP ANIMATION
  let logoCloud = useRef(null);
  let menuButton = useRef(null);

  useEffect(() => {
    TweenMax.to(logoCloud, 1, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    TweenMax.to(menuButton, 3, {
      opacity: 1,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <>
      <Drawer
        classes={{ paper: classes.paper }}
        onClose={() => setOpenDrawer(false)}
        anchor='right'
        open={openDrawer}>
        <List>
          <ListItem style={{ marginTop: "25%" }}>
            <ListItemText>
              <a href='/' style={{ textDecoration: "none" }}>
                <p className={classes.listItemStyle}>home.</p>
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <a href='/work' style={{ textDecoration: "none" }}>
                <p className={classes.listItemStyle}>work.</p>
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <a href='/about' style={{ textDecoration: "none" }}>
                <p className={classes.listItemStyle}>about.</p>
              </a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <a href='/contact' style={{ textDecoration: "none" }}>
                <p className={classes.listItemStyle}>contact.</p>
              </a>
            </ListItemText>
          </ListItem>
        </List>
        <IconButton
          className={classes.closeMenu}
          color='primary'
          aria-label='upload picture'
          component='span'
          onClick={() => setOpenDrawer(false)}>
          <CloseIcon fontSize='small' style={{ color: "#0f0f0f" }} />
        </IconButton>
      </Drawer>
      <a href='/' style={{ textDecoration: "none" }}>
        <img
          ref={(el) => (logoCloud = el)}
          src={weblogo}
          style={{
            marginRight: "auto",
            width: "50%",
            marginTop: "40px",
            opacity: "0",
          }}
          alt='logo'
        />
      </a>
      <IconButton
        className={classes.menuButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}>
        <div className='DrawerToggler'>
          <p
            ref={(el) => (menuButton = el)}
            style={{ color: "white", opacity: "0" }}>
            menu
          </p>
        </div>
      </IconButton>
    </>
  );
}
