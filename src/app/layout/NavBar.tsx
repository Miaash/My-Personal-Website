"use client";
import Clock from "@/components/common/Clock";
import { contentKeyIcon } from "@/constants/windowData";
import { useWindowStore } from "@/store/store";
import { useState } from "react";

/**
 * [네비게이션 바 컴포넌트]
 * - start메뉴: 현재 띄워져있는 팝업창 관리 & 환경설정 & 검색기능
 * - 현재 띄워져있는 팝업창 관리. -> store windowsList
 * - 시계.
 */

// TODO(20240827/완료) start버튼에 열린 창 내역 뿌려주기
// TODO(20240908/완료) contentKeyIcon => folder, doc이 추가될때마다 수정해야하는 번거로움. data파일로 옮기기

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

  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <nav
        id="navbar-footer"
        className="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer flex items-center justify-between"
      >
        <ul className="navbar-nav navbar-nav-hover align-items-center flex flex-row items-center">
          <li className="nav-item relative" onClick={() => setIsShow(!isShow)}>
            <a
              className={`nav-link ${isShow ? "opened" : ""} flex items-center justify-center`}
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
                className={`nav-link ${window.isHide ? "" : "opened"}`}
                role="button"
              >
                <span className="nav-link-inner-text">{window.title}</span>
              </a>
            </li>
          ))}
        </ul>
        {/* start버튼 팝업창 */}
        <div
          className={`start-button-popup absolute flex ${isShow ? "block" : "hidden"}`}
        >
          <div className="relative flex min-h-[300px] w-[20px] items-center justify-center bg-[#808080]">
            <span className="absolute bottom-[15%] -rotate-90 whitespace-nowrap text-[11px] text-[#C0C0C0]">
              Hongdows99
            </span>
          </div>
          <div className="flex flex-col">
            {windows.map((window, idx) =>
              window.windowType === "folder" ||
              window.windowType === "notice" ? (
                <li
                  className={`popup-item ${window.isHide ? "" : "opened"}`}
                  key={idx}
                  onClick={() => toggleHide(window.id)}
                >
                  <span
                    className={`${contentKeyIcon[window.contentKey]} mr-[10px] inline-block`}
                  ></span>
                  <span className="text-[12px]">{window.title}</span>
                </li>
              ) : (
                <></>
              ),
            )}
          </div>
        </div>
        <div className="time text-center">
          <Clock />
        </div>
      </nav>
    </footer>
  );
}
