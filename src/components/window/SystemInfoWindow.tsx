"use client";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

/**
 * [SystemInfo Window]
 * 웹사이트 버전정보 윈도우
 */

// 시스템정보윈도우컴포넌트타입
interface SystemInfoPropsType {
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

export default function SystemInfoWindow({
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
}: SystemInfoPropsType) {
  const dragRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [tabValue, setTabValue] = useState<number>(1);

  const tabArr = [
    {
      id: 1,
      name: "버전 정보",
    },
    {
      id: 2,
      name: "관리자 정보",
    },
    {
      id: 3,
      name: "기타 정보",
    },
  ];

  // window창 확대/최소화
  const onMaximizeWindow = () => {
    setIsMaximized(!isMaximized);
  };

  // 탭버튼 클릭
  const handleTabClick = (v: number) => {
    setTabValue(v);
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
                height: "350px",
                width: "550px",
                left: "35%",
                top: "20%",
              }
        }
        className={`card card-tertiary z-9999 fixed ${isShow ? "block" : "hidden"} h-[550px] w-[660px] ${isSelected ? "z-[9999]" : "z-[1]"}`}
      >
        <div
          className={`card-header flex w-full items-center justify-between pl-[3px] text-left ${isSelected ? "selected" : ""}`}
        >
          <div className="relative w-[70%] items-center">
            <span className="w95-info-small absolute top-[-7px] inline-block"></span>
            <span className="absolute left-[20px] top-[-6px] text-[10px] text-white">
              System Info
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
            {/* <button
              className="btn-control relative mr-2 p-0"
              type="button"
              onClick={() => onMaximizeWindow()}
            >
              <span
                className={`${isMaximized ? "w95-btn-min" : "w95-btn-max"} absolute left-[1px] top-[1px]`}
              ></span>
            </button> */}
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
          <div
            className="h-full w-full p-[5px]"
            // style={{ height: `calc(100% - 38px)` }}
          >
            <div className="flex h-full flex-col">
              {/* tab buttons */}
              <ul className="nav nav-tabs flex">
                {tabArr.map((tab) => (
                  <li
                    key={tab.id}
                    className={`nav-item ${tabValue === tab.id ? "active" : ""}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <span className="nav-text">{tab.name}</span>
                    {/* {tab.name} */}
                  </li>
                ))}
              </ul>
              {/* tab contents */}
              <div className="tab-content" id="myTabContent">
                {tabValue === 1 && (
                  <div
                    className="tab-pane show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <p>버전 정보</p>
                  </div>
                )}
                {tabValue === 2 && (
                  <div
                    className="tab-pane"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <p>관리자 정보</p>
                  </div>
                )}
                {tabValue === 3 && (
                  <div
                    className="tab-pane"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <p>기타</p>
                  </div>
                )}
              </div>
            </div>

            {/* 확인/닫기버튼 */}
            {/* <div className="d-flex justify-content-end mt-3">
              <button
                className="btn btn-primary border-dark relative mr-2"
                type="button"
              >
                <span className="btn-text absolute text-[13px]">확인</span>
              </button>
              <button className="btn btn-primary relative" type="button">
                <span className="btn-text absolute text-[13px]">취소</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
