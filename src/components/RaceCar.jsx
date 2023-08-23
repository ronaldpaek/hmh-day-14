import { useState, useEffect, useRef } from "react";

function RaceCar() {
  const [marginLeft, setMarginLeft] = useState(0);
  const raceCarRef = useRef(null);
  const raceTrackRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!raceCarRef.current || !raceTrackRef.current) return;

      if (e.code === "ArrowRight") {
        setMarginLeft(marginLeft + 5);
      } else if (e.code === "ArrowLeft") {
        setMarginLeft(marginLeft - 5);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [marginLeft]);

  return (
    <div className="race-track" ref={raceTrackRef}>
      <div
        className="race-car"
        ref={raceCarRef}
        style={{ marginLeft: marginLeft + "px" }}
      >
        🚗
      </div>
    </div>
  );
}

export default RaceCar;
