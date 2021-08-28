import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [sentMail, setSentMail] = useState("true");

  const sayingThanks = () => {
    setSentMail(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_urj5h9z",
        e.target,
        "user_7voNqRxHlFlj6c3iCS1ou"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className='contactFormComponent'>
      {sentMail ? (
        <Container maxWidth='lg'>
          <form onSubmit={sendEmail} noValidate autoComplete='off'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <label style={{ color: "white" }}>Enter your name:</label>

                <input type='text' required className='forminput' name='name' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label style={{ color: "white" }}>Company name:</label>
                <input type='text' required name='company' />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <label style={{ color: "white" }}>Enter email:</label>
                <input type='text' required name='email' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label style={{ color: "white" }}>Enter phone number:</label>
                <input type='text' required name='number' />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <label style={{ color: "white" }}>
                  Enter your message here:
                </label>
                <br />
                <textarea name='message' required></textarea>
                <br />
                <button
                  className='buttoncontact'
                  onClick={sayingThanks}
                  style={{
                    textTransform: "uppercase",
                    background: "transparent",
                    color: "white",
                    fontFamily: "Roboto Mono",
                    padding: "10px 15px",
                    fontSize: "0.7rem",
                    letterSpacing: "2px",
                    fontWeight: "500",
                    marginTop: "0.5rem",
                    border: "1px solid white",
                    borderRadius: "0",
                  }}>
                  Send your enquiry
                </button>
              </Grid>
            </Grid>
          </form>
        </Container>
      ) : (
        <p className='givivngThanks'>Thank You!</p>
      )}
    </div>
  );
}
