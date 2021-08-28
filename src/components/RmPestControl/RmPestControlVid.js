import React from "react";
import RmPestokillVid from "../../items/rmpestokillvid.mp4";

export default function RmPestokillVidPlay() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className='videoplayer'
        style={{ width: "87%", height: "800px" }}>
        <source src={RmPestokillVid} type='video/mp4' />
      </video>
    </div>
  );
}
