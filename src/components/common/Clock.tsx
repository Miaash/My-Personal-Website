"use client";

import { useEffect, useState } from "react";
import { formatTime } from "@/utils/DateTimeUtil";

/**
 * [Clock컴포넌트]
 * TT:MM AM/PM
 */
// TODO(20240907/완료)
// Text content does not match server-rendered HTML. client보다 server text가 1분 느린 시간으로 찍힘
// [참고] https://velog.io/@hapwoo/Next.js-Text-content-does-not-match-server-rendered-HTML
export default function Clock() {
  const [time, setTime] = useState<Date>();
  useEffect(() => {
    // 원래 1000ms로 해야 0.2초마다 함수를 호출할 일이 없는데, 아래와 같이 설정한 이유는 1초로하면 렌더링된 후 1초후 시간이 return됨.
    const clock = setInterval(() => {
      setTime(new Date());
    }, 200);

    return () => clearInterval(clock);
  }, []);

  if (!time) {
    return null;
  }

  return (
    <>
      <p>{formatTime(time)}</p>
    </>
  );
}
