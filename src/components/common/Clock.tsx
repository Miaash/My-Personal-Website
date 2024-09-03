"use client";

import { useEffect, useState } from "react";
import { formatTimeToString } from "@/utils/DateTimeUtil";

/**
 * [Clock컴포넌트]
 * TT:MM AM/PM
 */
export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  if (!time) {
    return null;
  }

  return (
    <>
      <p>{formatTimeToString(time)}</p>
    </>
  );
}
