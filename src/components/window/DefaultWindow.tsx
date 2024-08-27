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

interface SizePosition {
  width: string;
  height: string;
  // left: string;
  // top: string;
}

// contentKey에 대응하는 컴포넌트 매핑
const contentComponents: Record<string, JSX.Element> = {
  portfolio: <PortfolioContent />,
  aboutMe: <AboutMeContent />,
  recycleBin: <RecycleBinContent />,
  welcome: <WelcomeContent />,
};

// contentKey에 대응하는 윈도우 사이즈 및 위치 매핑
// left-[30%] top-[10%] w-[550px]
const contentStyles: Record<string, SizePosition> = {
  portfolio: {
    width: "800px",
    height: "700px",
  },
  aboutMe: {
    width: "800px",
    height: "700px",
  },
  recycleBin: {
    width: "800px",
    height: "700px",
  },
  welcome: {
    width: "100%",
    height: "",
  },
};

// TODO(20240822/완료) React Draggable 라이브러리로 드래그 기능 추가
// TODO(20240827/x) content component에 따른 size, position 조정
// TODO(20240827/x) 윈도우 확대 기능 추가
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
  const style = contentStyles[contentKey];

  return (
    <Draggable
      handle=".card-header"
      nodeRef={dragRef}
      // bounds='body'
    >
      <div
        ref={dragRef}
        onClick={() => onToggleSelected(id)}
        style={{ height: `calc(100% - 38px)` }}
        className={`card card-tertiary z-9999 fixed w-full ${isShow ? "block" : "hidden"} ${isSelected ? "z-[9999]" : "z-[1]"}`}
      >
        <div className="card-header align-center flex w-full justify-between pl-[3px] text-left">
          <span className="text-center text-[10px] text-white">{title}</span>
          <div>
            {/* 숨기기버튼 */}
            <button
              className="btn-control relative mr-2 p-0"
              type="button"
              onClick={() => onToggleHide(id)}
            >
              <span className="w95-btn-hide absolute left-[-1px] top-0"></span>
            </button>
            {/* 확대버튼 */}
            <button
              className="btn-control relative mr-2 p-0"
              type="button"
              onClick={() => onToggleHide(id)}
            >
              <span className="w95-btn-hide absolute left-[-1px] top-0"></span>
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
        <div className="p-[10px]">
          <div>{contentComponents[contentKey]}</div>
        </div>
      </div>
    </Draggable>
  );
}
