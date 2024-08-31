import Draggable from "react-draggable";
import MyWebSiteContent from "../content/MyWebSiteContent";
import PortfoilioContent from "../content/PortfolioContent";
import ResumeContent from "../content/ResumeContent";
import { useRef, useState } from "react";
/**
 * [Doc Window]
 * 문서용 윈도우로 쓰이는 컴포넌트.
 * 전체화면이 default 크기
 */

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

// contentKey에 대응하는 컴포넌트 매핑
const contentComponents: Record<string, JSX.Element> = {
  resume: <ResumeContent />,
  portfolio: <PortfoilioContent />,
  myWebSite: <MyWebSiteContent />,
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

  // window창 확대/최소화
  const onMaximizeWindow = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <Draggable
      handle=".card-header"
      nodeRef={dragRef}
      // bounds="body"
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
        className={`card card-tertiary z-9999 fixed ${isShow ? "block" : "hidden"} ${isSelected ? "z-[9999]" : "z-[1]"}`}
      >
        <div
          className={`card-header align-center flex w-full justify-between pl-[3px] text-left ${isSelected ? "selected" : ""}`}
        >
          <span className="text-[10px] text-white">{title}</span>
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
          <div>{contentComponents[contentKey]}</div>
        </div>
        {/* <div className="card-footer">
          <div className="card-footer-box">
            <p className="text-[13px] text-black">
              <span className="text-[9px] text-black">2</span>개체
            </p>
          </div>
          <div className="card-footer-box">
            <p className="text-[13px] text-black">
              <span className="text-[9px] text-black">234</span>
              <span className="text-[9px] text-black">KB</span>
            </p>
          </div>
        </div> */}
      </div>
    </Draggable>
  );
}
