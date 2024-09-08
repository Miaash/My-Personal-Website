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
        {/* widowcontents */}
        <div className="card-body">
          <div className="w-full" style={{ height: `calc(100% - 38px)` }}>
            <div className="flex flex-col">
              <ul className="nav nav-tabs flex" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    // href="../#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Programs
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    // href="../#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Control Panel
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    // href="../#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Documents
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta voluptatem nam ut temporibus corporis dolorem dolores
                    accusamus deserunt veniam eius maiores suscipit veritatis
                    necessitatibus voluptatum incidunt repellendus eligendi,
                    consequatur rem?
                  </p>
                  <button
                    className="btn btn-sm btn-primary border-dark mr-2"
                    type="button"
                  >
                    <span className="btn-text">Show Other Options</span>
                  </button>
                </div>
                {/* <div
                  className="tab-pane"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequatur earum consequuntur accusamus reprehenderit quae
                    sint, quia eligendi sed quidem neque omnis odit suscipit
                    dolorum corrupti minima quas temporibus recusandae vel.
                  </p>
                  <button
                    className="btn btn-sm btn-secondary border-dark mr-2"
                    type="button"
                  >
                    <span className="btn-text">Show Other Options</span>
                  </button>
                </div> */}
                {/* <div
                  className="tab-pane"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    ad tempora, quam quisquam, neque possimus ducimus eligendi
                    cumque ipsum autem nam magnam atque, ipsam sint inventore
                    repellat iste sunt harum!
                  </p>
                  <button
                    className="btn btn-sm btn-tertiary border-dark mr-2"
                    type="button"
                  >
                    <span className="btn-text">Show Other Options</span>
                  </button>
                </div> */}
              </div>
            </div>

            {/* <div className="d-flex justify-content-end mt-3">
              <button
                className="btn btn-sm btn-primary border-dark mr-2"
                type="button"
              >
                <span className="btn-text">OK</span>
              </button>
              <button className="btn btn-sm btn-primary" type="button">
                <span className="btn-text">Cancel</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
