"use client";
import Clock from "@/components/common/Clock";
import { useWindowStore } from "@/store/store";

/**
 * [네비게이션 바 컴포넌트]
 * - start메뉴: 현재 띄워져있는 팝업창 관리 & 환경설정 & 검색기능
 * - 현재 띄워져있는 팝업창 관리. -> store windowsList
 * - 시계.
 */
export default function NavBar() {
  // 전역상태관리 state, action
  const {
    windows,
    addWindow,
    removeWindow,
    toggleShow,
    toggleSelected,
    toggleHide,
  } = useWindowStore();

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
          {windows.map((window, idx) => (
            <li
              className="nav-item"
              key={idx}
              onClick={() => toggleHide(window.id)}
            >
              <a
                className={`nav-link ${window.isHide ? "opened" : ""}`}
                role="button"
              >
                <span className="nav-link-inner-text">{window.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="time text-center">
          <Clock />
        </div>
      </nav>
    </footer>
  );
}
