import React, { useState, useRef, useEffect } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function CountdownTimer({ submitted }) {
  const [countdown, setCountdown] = useState(600);
  const timer = useRef();

  useEffect(() => {
    if (submitted) {
      timer.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer.current);
    }
  }, [submitted]);

  useEffect(() => {
    if (countdown <= 0 || !submitted) {
      clearInterval(timer.current);
    }
  }, [countdown, submitted]);

  if (submitted) {
    return <div>{formatTime(countdown)}</div>;
  } else {
    return null;
  }
}
