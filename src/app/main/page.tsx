"use client";
import AlertModal from "@/components/modal/AlertModal";
import InfoPopup from "@/components/popup/InfoPopup";
import { useEffect, useState } from "react";

/**
 * [메인페이지]
 * @returns
 */
export default function MainPage() {
  // WelcomePopup 제어
  const [isWelcomeShow, setIsWelcomeShow] = useState<boolean>(false);
  // AlertModal 제어
  const [isAlertShow, setIsAlertShow] = useState<boolean>(false);

  useEffect(() => {
    setIsWelcomeShow(true);
  }, []);

  return (
    <>
      {/* <p className="text font-bold underline">My Personal Website</p> */}
      {/* <button className="btn btn-sm btn-primary border-dark mr-2" type="button">
        <span className="btn-text">Primary</span>
      </button> */}
      <div className="absolute left-0 top-0 flex flex-col p-[6px]">
        <div
          className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center"
          onClick={() => setIsWelcomeShow(true)}
        >
          <span className="w95-closed-file inline-block"></span>
          <span className="inline-block break-words pt-[3px] text-[8px] text-white">
            portfolio-default
          </span>
        </div>
        {/* <div className="h-35 w-35 mb-[13px] flex flex-col items-center cursor-pointer">
        <span className="w95-opened-file-empty h-35 w-35 inline-block"></span>
        <span className="inline-block pt-[3px] text-[8px] text-white">
          portfolio-empty
        </span>
        </div> */}
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-opened-file-full h-35 w-35 inline-block"></span>
          <span className="inline-block break-words pt-[3px] text-[8px] text-white">
            portfolio-full
          </span>
        </div>
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-bin-empty h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[3px] text-[8px] text-white">
            Recycle Bin
          </span>
        </div>
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-bin-full h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[3px] text-[8px] text-white">
            Recycle Bin
          </span>
        </div>
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
        {/* <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
          <span className="w95-resume h-35 w-35 inline-block"></span>
          <span className="inline-block pt-[3px] text-[8px] text-white">
            resume
          </span>
        </div> */}
        <div className="h-35 w-35 mb-[13px] flex cursor-pointer flex-col items-center">
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
      {/* popup 영역 start */}
      {/* Welcome Popup */}
      <InfoPopup
        isShow={isWelcomeShow}
        setIsShow={setIsWelcomeShow}
        title="Welcome"
        text="Welcome to my Website"
      />
      {/* popup 영역 end */}
      {/* modal 영역 start */}
      {isAlertShow && (
        <AlertModal
          isShow={isAlertShow}
          setIsShow={setIsAlertShow}
          title="Notice!"
          text="The minimum system requirements called for a 386DX processor, 4MB of RAM, and a 120MB hard drive."
        />
      )}
      {/* modal 영역 end */}
    </>
  );
}
