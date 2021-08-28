import React from "react";
import logoReveal from "./Logo_Reveal.mp4";

export default function VideoPlay() {
  return (
    <div className='videoplay'>
      <video
        autoPlay={true}
        loop
        muted
        style={{ width: "150%", marginLeft: "-7rem", marginTop: "-4rem" }}>
        <source src={logoReveal} type='video/mp4' />
      </video>
    </div>
  );
}
