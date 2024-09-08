import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { contentKeyIcon } from "@/constants/windowData";
import ResumeDoc from "../doc/ResumeDoc";
import PortfolioDoc from "../doc/PortfolioDoc";
import MyWebSiteDoc from "../doc/MyWebSiteDoc";
import InternetDoc from "../doc/InternetDoc";
/**
 * [Doc Window]
 * 문서용 윈도우로 쓰이는 컴포넌트.
 * 전체화면이 default 크기
 */

// TODO(20240902/x) 윈도우 헤더에 아이콘 넣기

interface DocWindowPropsType {
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
  style?: React.CSSProperties;
}

// contentKey에 대응하는 doc 컴포넌트 매핑
export const docContentComponents: Record<string, JSX.Element> = {
  resume: <ResumeDoc />,
  portfolio: <PortfolioDoc />,
  myWebSite: <MyWebSiteDoc />,
  internet: <InternetDoc />,
};

export default function DocWindow({
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
}: DocWindowPropsType) {
  const dragRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState<boolean>(true);
  const [randomPosition, setRandomPosition] = useState<{
    top: string;
    left: string;
  }>({
    top: "40%",
    left: "10%",
  });

  // window창 확대/최소화
  const onMaximizeWindow = () => {
    setIsMaximized(!isMaximized);
  };

  useEffect(() => {
    const randomTop = `${Math.floor(Math.random() * 50)}%`;
    const randomLeft = `${Math.floor(Math.random() * 50)}%`;
    setRandomPosition({ top: randomTop, left: randomLeft });
  }, [isShow]);

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
                left: `${randomPosition.left}`,
                top: `${randomPosition.top}`,
              }
        }
        className={`card card-tertiary z-9999 fixed ${isShow ? "block" : "hidden"} ${isSelected ? "z-[9999]" : "z-[1]"}`}
      >
        <div
          className={`card-header flex w-full items-center justify-between pl-[3px] text-left ${isSelected ? "selected" : ""}`}
        >
          <div className="relative w-[70%] items-center">
            <span
              className={`${contentKeyIcon[contentKey]} absolute top-[-7px] inline-block`}
            ></span>
            <span className="absolute left-[20px] top-[-6px] text-[10px] text-white">
              {title}
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
        <div className="card-body doc">
          <div>{docContentComponents[contentKey]}</div>
        </div>
      </div>
    </Draggable>
  );
}
