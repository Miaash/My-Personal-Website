"use client";
import { useRef, useState } from "react";
import Draggable from "react-draggable";
import AboutMeContent from "../content/AboutMeContent";
import ProjectsContent from "../content/ProjectsContent";
import RecycleBinContent from "../content/RecycleBinContent";
import WelcomeContent from "../content/WelcomeContent";
import PhotosContent from "../content/PhotosContent";
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
  left: string;
  top: string;
}

// contentKey에 대응하는 컴포넌트 매핑
const contentComponents: Record<string, JSX.Element> = {
  welcome: <WelcomeContent />,
  projects: <ProjectsContent />,
  recycleBin: <RecycleBinContent />,
  aboutMe: <AboutMeContent />,
  photos: <PhotosContent />,
};

// contentKey에 대응하는 윈도우 사이즈 및 위치 매핑
const contentStyles: Record<string, SizePosition> = {
  welcome: {
    width: "550px",
    height: "660px",
    left: "27%",
    top: "8%",
  },
  projects: {
    width: "500px",
    height: "380px",
    left: "10%",
    top: "30%",
  },
  recycleBin: {
    width: "500px",
    height: "380px",
    left: "10%",
    top: "30%",
  },
  aboutMe: {
    width: "500px",
    height: "400px",
    left: "10%",
    top: "30%",
  },
  photos: {
    width: "450px",
    height: "380px",
    left: "20%",
    top: "8%",
  },
};

// TODO(20240822/완료) React Draggable 라이브러리로 드래그 기능 추가
// TODO(20240827/완료) 윈도우 확대 기능 추가
// TODO(20240827/x) content component에 따른 size, position 조정
// TODO(20240827/x) 윈도우창 selected될때 클릭한 창만 z-Index 높게 설정 및 두창 모두 앞으로 오는 현상 수정필요
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
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  // window창 확대/최소화
  // TODO(20240828/x) window창 드래그 후, max하면 중앙 배치 안되는 부분 수정필요
  const onMaximizeWindow = () => {
    isMaximized ? setIsMaximized(false) : setIsMaximized(true);
  };

  return (
    <Draggable
      handle=".card-header"
      nodeRef={dragRef}
      // bounds='body'
      // disabled={isMaximized ? true : false}
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
            : {}
        }
        className={`card card-tertiary z-9999 fixed ${isShow ? "block" : "hidden"} ${
          isMaximized
            ? "translate-x-0 translate-y-0"
            : `left-[${style.left}] top-[${style.top}] h-[${style.height}] w-[${style.width}]`
        } ${isSelected ? "z-[9999]" : "z-[1]"}`}
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
              <span className="w95-btn-hide absolute left-[0px] top-[3px]"></span>
            </button>
            {/* 확대버튼/최소화 버튼 */}
            <button
              className="btn-control relative mr-2 p-0"
              type="button"
              onClick={() => onMaximizeWindow()}
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
        <div className="p-[10px]">
          <div>{contentComponents[contentKey]}</div>
        </div>
      </div>
    </Draggable>
  );
}
