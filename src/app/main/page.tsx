"use client";
import { useEffect, useState } from "react";
import { useWindowStore } from "@/store/store";
import AlertModal from "@/components/modal/AlertModal";
import DefaultWindow from "@/components/window/DefaultWindow";

/**
 * [메인페이지]
 */
export default function MainPage() {
  // 전역상태관리 state, action
  const {
    windows,
    addWindow,
    removeWindow,
    toggleShow,
    toggleSelected,
    toggleHide,
  } = useWindowStore();
  // AlertModal 제어
  const [isAlertShow, setIsAlertShow] = useState<boolean>(false);

  // TODO(20240822/완료) Welcome Window 두 건 생기는 부분 수정 -> store add action 중복안되도록
  // TODO(20240823/x) isSelected가 true면 다른 windows보다 z-index 커야함.
  useEffect(() => {
    addWindow({
      title: "Welcome",
      contentKey: "welcome",
      isShow: true,
      isSelected: true,
      isHide: false,
    });
  }, []);

  return (
    <>
      {/* <p className="text font-bold underline">My Personal Website</p> */}
      {/* <button className="btn btn-sm btn-primary border-dark mr-2" type="button">
        <span className="btn-text">Primary</span>
      </button> */}
      <div className="main absolute left-0 top-0 flex flex-col p-[10px]">
        <div
          className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center"
          onDoubleClick={() =>
            addWindow({
              title: "Portfolio",
              contentKey: "portfolio",
              isShow: true,
              isSelected: true,
              isHide: false,
            })
          }
        >
          {/* <span
            className={`${porfolioWindow ? "w95-opened-file-full" : "w95-closed-file"} inline-block`}
          ></span> */}
          <span className="w95-closed-file inline-block"></span>
          <span className="inline-block break-words pt-[5px] text-[8px] text-white">
            Portfolio
          </span>
        </div>
        {/* <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-opened-file-full h-35 w-35 inline-block"></span>
          <span className="inline-block break-words pt-[3px] text-[8px] text-white">
            portfolio-full
          </span>
        </div> */}
        {/* <div className="h-35 w-35 mb-[13px] flex flex-col items-center cursor-pointer">
        <span className="w95-opened-file-empty h-35 w-35 inline-block"></span>
        <span className="inline-block pt-[3px] text-[8px] text-white">
          portfolio-empty
        </span>
        </div> */}
        <div
          className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center"
          onDoubleClick={() =>
            addWindow({
              title: "Recycle Bin",
              contentKey: "recycleBin",
              isShow: true,
              isSelected: true,
              isHide: false,
            })
          }
        >
          <span className="w95-bin-empty h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[3px] text-[8px] text-white">
            Recycle Bin
          </span>
        </div>
        {/* <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-bin-full h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[3px] text-[8px] text-white">
            Recycle Bin full
          </span>
        </div> */}
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-computer h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[3px] text-[8px] text-white">
            Computer
          </span>
        </div>
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-cd h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[3px] text-[8px] text-white">
            music
          </span>
        </div>
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-internet h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[3px] text-[8px] text-white">
            Internet
          </span>
        </div>
      </div>
      <div className="absolute left-[90px] top-0 flex flex-col p-[6px]">
        <div
          className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center"
          onDoubleClick={() =>
            addWindow({
              title: "About Me",
              contentKey: "aboutMe",
              isShow: true,
              isSelected: true,
              isHide: false,
            })
          }
        >
          <span className="w95-me h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[1px] text-[8px] text-white">
            About me
          </span>
        </div>
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-camera h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[2px] text-[8px] text-white">
            Photos
          </span>
        </div>
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-calendar h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[4px] text-[8px] text-white">
            Calendar
          </span>
        </div>
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-paint h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[4px] text-[8px] text-white">
            Paint
          </span>
        </div>
      </div>
      {/* windows */}
      {windows.map((window) => (
        <DefaultWindow
          key={window.id}
          id={window.id}
          isShow={window.isShow}
          isSelected={window.isSelected}
          isHide={window.isSelected}
          onToggleShow={() => toggleShow(window.id)}
          onToggleSelected={() => toggleSelected(window.id)}
          onToggleClose={() => removeWindow(window.id)}
          onToggleHide={() => toggleHide(window.id)}
          title={window.title}
          contentKey={window.contentKey}
        />
      ))}
      {isAlertShow && (
        <AlertModal
          isShow={isAlertShow}
          setIsShow={setIsAlertShow}
          title="Notice!"
          text="The minimum system requirements called for a 386DX processor, 4MB of RAM, and a 120MB hard drive."
        />
      )}
    </>
  );
}
