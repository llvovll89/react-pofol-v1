import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";

function MainSection() {
  const txt = "Front End Developer";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]);
      setCount(Count + 1);
    }, 100);
    if (Count === txt.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <div className="main-container">
      <video src="/video/video-2.mp4" autoPlay loop muted />
      <h1 className="main-title">{Text}</h1>
      <p>저의 이름은 김건호 입니다.</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get STARED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
