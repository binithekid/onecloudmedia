import React from "react";
import UkDispatchVid from "../../items/ukdispatchvid.mp4";

export default function VideoPlay() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className='videoplayer'
        style={{ width: "87%", height: "800px" }}>
        <source src={UkDispatchVid} type='video/mp4' />
      </video>
    </div>
  );
}
