import { useEffect, useState } from "react";
import BatteryGauge from "react-battery-gauge";
import "../loadingAnimation/Loading.css";

interface BatteryAnimationProps {
  initialTimerInterval: number; // Initial animation interval in milliseconds
}

const LoadingPage: React.FC<BatteryAnimationProps> = ({
  initialTimerInterval,
}) => {
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (batteryLevel < 100) {
        setBatteryLevel((prevLevel) => prevLevel + 1);
      } else {
        clearInterval(intervalId);
      }
    }, initialTimerInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [batteryLevel]);

  return (
    <div className="battery-animation-container">
      <BatteryGauge value={batteryLevel} aspectRatio={0.23} />
    </div>
  );
};

export default LoadingPage;
