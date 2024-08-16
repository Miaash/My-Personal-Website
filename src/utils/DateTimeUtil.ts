/**
 * [DateTimeUtil]
 * 문자열을 특정 형식으로 포맷팅하는 유틸 모음.
 */
export const formatTime = (date: Date) => {
  const hour = date.getHours();
  const mimute = date.getMinutes();
  const period = hour >= 12 ? "PM" : "AM";

  const formmatedHour = (hour % 12 || 12).toString().padStart(2, "0");
  const formattedMinute = mimute.toString().padStart(2, "0");

  return `${formmatedHour}:${formattedMinute} ${period}`;
};
