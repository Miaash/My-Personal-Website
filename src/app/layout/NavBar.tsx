import { useEffect, useState } from "react";

/**
 * [네비게이션 바 컴포넌트]
 * - 현재 띄워져있는 팝업창 관리.
 * - 시계.
 * @returns
 */
export default function NavBar() {
  // TODO 시계 기능 구현 -> use client?
  // 네비게이션바 시계
  //   const [time, setTime] = useState("");
  //   useEffect(() => {
  //     setTime("12:38");
  //   }, []);
  const openedPopup = [
    {
      id: 1,
      title: "first popup",
      path: "/main",
    },
    {
      id: 2,
      title: "second popup",
      path: "/main",
    },
  ];
  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <nav
        id="navbar-footer"
        className="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer flex items-center justify-between"
      >
        <ul className="navbar-nav navbar-nav-hover align-items-center flex flex-row items-center">
          <li className="nav-item">
            <a
              href="/main"
              className="nav-link flex items-center justify-center"
              role="button"
            >
              <span className="w95-windows h-18 w-18 inline-block"></span>
              <span className="nav-link-inner-text">Start</span>
            </a>
          </li>
          {openedPopup.map((popup) => (
            <li className="nav-item" key={popup.id}>
              <a href="/main" className="nav-link" role="button">
                <span className="nav-link-inner-text">{popup.title}</span>
              </a>
            </li>
          ))}
          <li className="nav-item open">
            <a href="/main" className="nav-link clicked" role="button">
              <span className="nav-link-inner-text">Welcome</span>
            </a>
          </li>
        </ul>
        <div className="time text-center">1:47 PM</div>
      </nav>
    </footer>
  );
}
