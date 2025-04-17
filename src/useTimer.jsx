import { useState, useEffect, useRef } from "react";

function useTimer() {
  const [time, setTime] = useState(0);
  const timerId = useRef(null);

  useEffect(() => {
    return () => clearInterval(timerId.current); 
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(milliseconds).padStart(3, "0")}`;
  };

  const startTimer = () => {
    if (timerId.current === null) {
      timerId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const pauseTimer = () => {
    if (timerId.current !== null) {
      clearInterval(timerId.current);
      timerId.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTime(0);
  };

  return [formatTime(time), startTimer, pauseTimer, resetTimer];
}

export default useTimer;
