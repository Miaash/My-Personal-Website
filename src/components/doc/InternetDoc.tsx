"use client";
import { useEffect } from "react";
/**
 * [Internet Doc Window용 doc 컴포넌트]
 */

export default function InternetDoc() {
  useEffect(() => {
    window.open("https://www.google.co.kr", "_blank");
  }, []);
  return <div className="h-full w-full">로딩중...</div>;
}
