"use client";

import { useEffect, useState } from "react";
import { formatTime } from "@/utils/DateTimeUtil";

/**
 * [Clock컴포넌트]
 * TT:MM AM/PM
 */
export default function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  return (
    <>
      <p>{formatTime(time)}</p>
    </>
  );
}
