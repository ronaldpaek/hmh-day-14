import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timerId, setTimerId] = useState(null);

  const startTimer = () => {
    setIsActive(true);
    const id = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    setTimerId(id);
  };

  const stopTimer = () => {
    setIsActive(false);
    clearInterval(timerId);
  };

  const clearTimer = () => {
    setIsActive(false);
    clearInterval(timerId);
    setTime(0);
  };

  useEffect(() => {
    return () => clearInterval(timerId);
  }, [timerId]);

  return (
    <div>
      <p className="timer">
        <span>{time}</span>&nbsp;seconds
      </p>
      <div className="button-container">
        <button className="start" onClick={startTimer} disabled={isActive}>
          Start
        </button>
        <button className="stop" onClick={stopTimer} disabled={!isActive}>
          Stop
        </button>
        <button className="clear" onClick={clearTimer}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Timer;
