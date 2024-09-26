"use client";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

/**
 * [Welcome Window]
 * 환영윈도우
 */

// 폴더윈도우컴포넌트타입
interface FolderWindowPropsType {
  id: number;
  isShow: boolean;
  isSelected: boolean;
  isHide: boolean;
  onToggleShow: (id: number) => void;
  onToggleClose: (id: number) => void;
  onToggleSelected: (id: number) => void;
  onToggleHide: (id: number) => void;
  //   title: string;
  //   contentKey: string;
  //   style?: React.CSSProperties;
}

export default function WelcomeWindow({
  id,
  isShow,
  isSelected,
  isHide,
  onToggleShow,
  onToggleClose,
  onToggleSelected,
  onToggleHide,
  //   title,
  //   contentKey,
}: FolderWindowPropsType) {
  const dragRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  // window창 확대/최소화
  const onMaximizeWindow = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <Draggable
      handle=".card-header"
      nodeRef={dragRef}
      bounds="html"
      // disabled={isMaximized}
    >
      <div
        ref={dragRef}
        onClick={() => onToggleSelected(id)}
        style={
          isMaximized
            ? {
                height: `calc(100% - 38px)`,
                width: "100%",
                top: "0",
                left: "0",
                transform: "translate(0, 0)",
              }
            : {
                height: "550px",
                width: "660px",
                left: "25%",
                top: "15%",
              }
        }
        className={`card card-tertiary z-9999 fixed ${isShow ? "block" : "hidden"} h-[550px] w-[660px] ${isSelected ? "z-[9999]" : "z-[1]"}`}
      >
        <div
          className={`card-header flex w-full items-center justify-between pl-[3px] text-left ${isSelected ? "selected" : ""}`}
        >
          <div className="relative w-[70%] items-center">
            <span className="w95-tip-small absolute top-[-7px] inline-block"></span>
            <span className="absolute left-[20px] top-[-6px] text-[10px] text-white">
              Welcome
            </span>
          </div>
          <div>
            {/* 숨기기버튼 */}
            <button
              className="btn-control relative mr-2 p-0"
              type="button"
              onClick={() => onToggleHide(id)}
            >
              <span className="w95-btn-hide absolute left-[0px] top-[3px]"></span>
            </button>
            {/* 확대버튼/최소화 버튼 */}
            <button
              className="btn-control relative mr-2 p-0"
              type="button"
              onClick={onMaximizeWindow}
            >
              <span
                className={`${isMaximized ? "w95-btn-min" : "w95-btn-max"} absolute left-[1px] top-[1px]`}
              ></span>
            </button>
            {/* 닫기버튼 */}
            <button
              className="btn-control relative mr-[3px] p-0"
              onClick={() => onToggleClose(id)}
            >
              <span className="w95-btn-x absolute left-[-1px] top-0"></span>
            </button>
          </div>
        </div>
        {/* widowcontents */}
        <div className="card-body info">
          <div className="w-full" style={{ height: `calc(100% - 38px)` }}>
            <div className="pl-[20px] text-[20px]">
              제 사이트에 방문해주셔서 감사합니다.
              {/* Welcome to My Website. */}
              {/* <span className="text-gray-100">2024</span> */}
            </div>
            <div className="mt-[20px] flex h-full w-full flex-col justify-center">
              <div className="bg-light-yellow flex h-full w-full flex-col justify-center">
                <div className="flex items-center justify-center">
                  <span className="w95-tip mr-[10px] mt-[10px] inline-block"></span>
                  <p className="inline-block text-center text-[20px]">
                    참고해주세요
                  </p>
                </div>
                <div className="mt-[20px] flex flex-col items-center justify-center text-[12px]">
                  <p className="text-[15px]">
                    {/* To open a program, you just click the Start button, and then click
              the program&apos;s icon.  */}
                    프로그램을 실행하시려면, 시작버튼 또는 화면의 아이콘을
                    클릭하세요.
                  </p>
                  <span className="w95-img-computer inline-block"></span>
                  <p className="py-[10px] text-[9px]">
                    {/* To open a program, you just click the Start button, and then click
              the program&apos;s icon.  */}
                    &copy; 2024 hong seonga. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
