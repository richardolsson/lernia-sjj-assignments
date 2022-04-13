import { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setStartTime(new Date());
    setNow(new Date());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNow(new Date());
    }, 1000);

    return () => clearTimeout(timer);
  }, [now]);

  if (startTime && now) {
    const milliseconds = now.getTime() - startTime.getTime();
    const seconds = Math.round(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const secondsOnMinute = seconds % 60;

    return (
      <h1>
        {minutes.toString().padStart(2, "0")}:
        {secondsOnMinute.toString().padStart(2, "0")}
      </h1>
    );
  } else {
    return <h1>00:00</h1>;
  }
};

export default Timer;
