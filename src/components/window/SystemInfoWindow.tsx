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

// TODO(20240910/x) 탭content 컴포넌트화 필요.
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
  const [tabId, setTabId] = useState<number>(1);

  const tabArr = [
    {
      id: 1,
      name: "일반",
    },
    {
      id: 2,
      name: "개발자 정보",
    },
    // {
    //   id: 3,
    //   name: "기타 정보",
    // },
  ];

  // window창 확대/최소화
  const onMaximizeWindow = () => {
    setIsMaximized(!isMaximized);
  };

  // 탭버튼 클릭
  const handleTabClick = (v: number) => {
    setTabId(v);
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
                height: "450px",
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
                    className={`nav-item ${tabId === tab.id ? "active" : ""}`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    <span className="nav-text">{tab.name}</span>
                    {/* {tab.name} */}
                  </li>
                ))}
              </ul>
              {/* tab contents */}
              <div className="tab-content" id="myTabContent">
                {tabId === 1 && (
                  <div
                    className="tab-pane show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="relative flex">
                      <span className="w95-img-system absolute left-[25px] top-0 inline-block pl-[30px]"></span>
                      <div className="absolute left-[250px] top-[0] flex flex-col">
                        <div className="mb-[10px] flex flex-col">
                          <p className="text-[13px]">
                            시스템 <span className="text-[10px]">:</span>
                          </p>
                          <p className="px-[20px] text-[10px]">
                            Miasoft Windows 99
                          </p>
                          <p className="px-[20px] text-[10px]">
                            Second Edition
                          </p>
                        </div>
                        <div className="mb-[10px] flex flex-col">
                          <p className="text-[13px]">
                            버전 정보 <span className="text-[10px]">:</span>
                          </p>
                          <p className="px-[20px] text-[10px]">Version 0.2</p>
                        </div>
                        <div className="mb-[10px] flex flex-col">
                          <p className="text-[13px]">
                            구현 기능 <span className="text-[10px]">:</span>
                          </p>
                          <p className="px-[20px] text-[12px]">
                            이력서, 포트폴리오 조회
                          </p>
                          <p className="px-[20px] text-[12px]">
                            윈도우매니저 구현
                          </p>
                        </div>
                        <div className="mb-[10px] flex flex-col">
                          <p className="text-[13px]">
                            사용 스택 <span className="text-[10px]">:</span>
                          </p>
                          <p className="px-[20px] text-[10px]">
                            Next.js 14, zustand, vercel, tailwind css
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tabId === 2 && (
                  <div
                    className="tab-pane show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="relative flex">
                      <span className="w95-img-me absolute left-[45px] top-[15px] inline-block border-b-2 border-l-2 border-r-2 border-t-2 border-b-[#393939] border-l-white border-r-[#393939] border-t-white pl-[30px]"></span>
                      <div className="absolute left-[250px] top-[0] flex flex-col">
                        <div className="mb-[10px] flex flex-col">
                          <p className="text-[13px]">
                            이름 <span className="text-[10px]">:</span>
                          </p>
                          <p className="px-[20px] text-[10px]">
                            Hong seong a (Mia)
                          </p>
                        </div>
                        <div className="mb-[10px] flex flex-col">
                          <p className="text-[13px]">
                            직업 <span className="text-[10px]">:</span>
                          </p>
                          <p className="px-[20px] text-[10px]">
                            Junior frontend developer
                          </p>
                        </div>
                        <div className="mb-[10px] flex flex-col">
                          <p className="text-[13px]">
                            정보 <span className="text-[10px]">:</span>
                          </p>
                          <p className="px-[20px]">
                            <a
                              href="mailto:girl0930h@gmail.com"
                              target="_blank"
                              className="text-[10px] text-[#000000] underline"
                            >
                              girl0930h@gmail.com
                            </a>
                          </p>
                          <p className="px-[20px]">
                            <a
                              href="https://github.com/Miaash"
                              target="_blank"
                              className="text-[10px] text-[#000000] underline"
                            >
                              github
                            </a>
                          </p>
                          <p className="px-[20px] text-[12px]">
                            <a
                              href="https://eight-heath-b94.notion.site/Mia-s-Devlog-b60f645c2e054c3ea3419dabd2f3cc3a"
                              target="_blank"
                              className="text-[10px] text-[#000000] underline"
                            >
                              blog
                            </a>
                          </p>
                        </div>
                        <div className="mb-[10px] flex flex-col">
                          <p className="text-[13px]">
                            개발자의 한마디
                            <span className="text-[10px]">:</span>
                          </p>
                          <p className="px-[20px] text-[10px]">
                            Version 0.3 will be released on 2024/09/30.
                          </p>
                          <p className="relative px-[20px] text-[10px]">
                            Thank you
                            <span className="w95-smile-small absolute top-[2px] inline-block"></span>
                          </p>
                        </div>
                      </div>
                    </div>
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
