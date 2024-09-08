/**
 * [DateTimeUtil]
 * 문자열을 특정 형식으로 포맷팅하는 유틸 모음.
 */
export const formatTime = (date: Date) => {
  const hour = date.getHours();
  const mimute = date.getMinutes();
  const period = hour >= 12 ? "PM" : "AM";

  const formmatedHour = (hour % 12 || 12).toString();
  const formattedMinute = mimute.toString().padStart(2, "0");

  return `${formmatedHour}:${formattedMinute} ${period}`;
};

export const formatTimeToString = (date: string) => {
  // console.log(date);
  const period = date.slice(0, 2) === "오전" ? "AM" : "PM"; // 오전/오후
  const time = date.slice(3, 8); // HH:MM

  return `${time} ${period}`;
};
