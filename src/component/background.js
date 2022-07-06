import React from "react";
import sample from "./videos/vid2.mp4";

export default function background() {
  return (
    <div className="top-layer">
      <video className="video" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video>
    </div>
  );
}
