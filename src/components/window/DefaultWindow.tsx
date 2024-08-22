"use client";
import { useRef } from "react";
import Draggable from "react-draggable";
import AboutMeContent from "../content/AboutMeContent";
import PortfolioContent from "../content/PortfolioContent";
import RecycleBinContent from "../content/RecycleBinContent";
import WelcomeContent from "../content/WelcomeContent";
/**
 * [DefaultWindow]
 * 기본 창으로 쓰이는 컴포넌트.
 */

// 기본윈도우컴포넌트타입
interface DefaultWindowType {
  id: number;
  isShow: boolean;
  isSelected: boolean;
  isHide: boolean;
  onToggleShow: (id: number) => void;
  onToggleClose: (id: number) => void;
  onToggleSelected: (id: number) => void;
  onToggleHide: (id: number) => void;
  title: string;
  contentKey: string;
}

// contentKey에 대응하는 컴포넌트 매핑
const contentComponents: Record<string, JSX.Element> = {
  portfolio: <PortfolioContent />,
  aboutMe: <AboutMeContent />,
  recycleBin: <RecycleBinContent />,
  welcome: <WelcomeContent />,
};

// TODO(20240822/x) React Draggable 라이브러리로 드래그 기능 추가
export default function DefaultWindow({
  id,
  isShow,
  isSelected,
  isHide,
  onToggleShow,
  onToggleClose,
  onToggleSelected,
  onToggleHide,
  title,
  contentKey,
}: DefaultWindowType) {
  const dragRef = useRef<HTMLDivElement>(null);
  return (
    <Draggable
      handle=".card-header"
      nodeRef={dragRef}
      // bounds='body'
    >
      <div
        ref={dragRef}
        onClick={() => onToggleSelected(id)}
        className={`card card-tertiary z-9999 fixed left-1/4 top-1/2 h-[100px] w-[500px] ${isShow ? "block" : "hidden"} ${isSelected ? "z-[9999]" : "z-[1]"}`}
      >
        <div className="card-header align-center flex w-full justify-between pr-[3px] text-left">
          <span className="text-center text-[10px] text-white">{title}</span>
          <div>
            {/* 물음표버튼 */}
            {/* <button className="btn-control relative mr-2 p-0" type="button">
            <span className="w95-btn-q absolute left-[-1px] top-0"></span>
          </button> */}
            {/* 숨기기버튼 */}
            <button
              className="btn-control relative mr-2 p-0"
              type="button"
              onClick={() => onToggleHide(id)}
            >
              <span className="w95-btn-q absolute left-[-1px] top-0"></span>
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
        <div className="h-full w-full p-[10px]">
          <div className="h-full w-full">
            <div>{contentComponents[contentKey]}</div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
