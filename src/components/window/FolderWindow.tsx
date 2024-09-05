"use client";
import { useEffect, useRef, useState } from "react";
// import { useWindowStore } from "@/store/store";
import { FolderItemsType, WindowType } from "@/types/window";
import Draggable from "react-draggable";
import FolderContainer from "../container/FolderContainer";

/**
 * [Folder Window]
 * 폴더 창으로 쓰이는 컴포넌트.
 */

// TODO(20240902/x) 윈도우 헤더에 아이콘 넣기

// 폴더윈도우컴포넌트타입
interface FolderWindowPropsType {
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
  // style: React.CSSProperties;
  windowType: WindowType;
  // onFolderClick: (contentKey: string) => void;
  folderItems: FolderItemsType[];
  // initialFolderItems: FolderItemsType[];
}

// contentKey에 대응하는 컴포넌트 매핑
// const folderContainer: Record<string, JSX.Element> = {
//   // welcome: <Folder,
//   projects: (
//     <FolderContainer folderItems={contentInfo["projects"].folderItems} />
//   ),
//   computer: (
//     <FolderContainer folderItems={contentInfo["computer"].folderItems} />
//   ),
//   photos: <FolderContainer folderItems={contentInfo["photos"].folderItems} />,
//   recycleBin: (
//     <FolderContainer folderItems={contentInfo["recycleBin"].folderItems} />
//   ),
//   aboutMe: <FolderContainer folderItems={contentInfo["aboutMe"].folderItems} />,
//   music: <FolderContainer folderItems={contentInfo["music"].folderItems} />,
// };

// TODO(20240822/완료) React Draggable 라이브러리로 드래그 기능 추가
// TODO(20240827/완료) content component에 따른 size, position 조정
// TODO(20240827/완료) 윈도우 확대 기능 추가
// TODO(20240827/x) 윈도우창 selected될때 클릭한 창만 z-Index 높게 설정 및 두창 모두 앞으로 오는 현상 수정필요
// TODO(20240828/x) window창 드래그 후, max하면 중앙 배치 안되는 부분 수정필요
// TODO(20240903/완료) Footer수정
// TODO(20240903/완료) window타입 === childFolder의 경우 화면 전환 필요 ==> 여기서 새창 add로 전환.

const contentKeyIcon: Record<string, string> = {
  projects: "w95-opened-file-empty-small",
  noname: "w95-opened-file-empty-small",
  2022: "w95-opened-file-empty-small",
  2023: "w95-opened-file-empty-small",
  2024: "w95-opened-file-empty-small",
  computer: "w95-computer-small",
  music: "w95-cd-small",
  recycleBin: "w95-bin-empty-small",
  aboutMe: "w95-me-small",
  calendar: "w95-calendar-small ",
  photos: "w95-camera-small",
  paint: "w95-paint-small",
};

export default function FolderWindow({
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
  windowType,
  // onFolderClick,
  folderItems,
  // initialFolderItems,
}: FolderWindowPropsType) {
  // const { windows } = useWindowStore();
  const dragRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [randomPosition, setRandomPosition] = useState<{
    top: string;
    left: string;
  }>({
    top: "40%",
    left: "10%",
  });
  // const [currentContentKey, setCurrentContentKey] = useState<string>(
  //   contentKey!,
  // );
  // const [childFolderInfo, setChildFolderInfo] =
  //   useState<FolderItemsType[]>(initialFolderItems);

  // window창 확대/최소화
  const onMaximizeWindow = () => {
    setIsMaximized(!isMaximized);
  };
  // const handleFolderClick = (newContentKey: string) => {
  //   const selectedContent = contentInfo[newContentKey];

  //   console.log(newContentKey);

  //   if (selectedContent.windowType === "childFolder") {
  //     setChildFolderInfo(selectedContent.folderItems || []);
  //   } else {
  //     setCurrentContentKey(newContentKey);
  //   }
  // };

  // 폴더 클릭 시 내용 업데이트
  // const handleFolderClick = (contentKey: string) => {
  //   // if (contentInfo[contentKey].windowType === "folder") {
  //   //   setCurrentContentKey(contentKey);
  //   //   console.log("상위폴더", currentContentKey);
  //   //   console.log("현재폴더", contentKey);
  //   //   console.log("상위폴더 folderItems :", contentInfo[currentContentKey]);
  //   //   console.log("현재폴더의 folderItems :", contentInfo[contentKey]);
  //   // } else {
  //   // }
  //   setCurrentContentKey(contentKey);
  //   console.log("상위폴더", currentContentKey);
  //   console.log("현재폴더", contentKey);
  //   console.log(
  //     "상위폴더 folderItems :",
  //     contentInfo[currentContentKey].folderItems,
  //   );
  //   console.log("현재폴더의 folderItems :", contentInfo[contentKey]);
  // };

  // 현재 열려있는 폴더의 내용을 반환
  // const getFolderContent = (contentKey: string) => {
  //   const handleFolderClick = (newContentKey: string) => {
  //     setCurrentContentKey(newContentKey);
  //   };
  //   // console.log(currentContentKey);

  //   return (
  //     <FolderContainer
  //       folderItems={contentInfo[contentKey].folderItems}
  //       onFolderClick={handleFolderClick} // onFolderClick 이벤트 핸들러 추가
  //     />
  //   );
  // };

  useEffect(() => {
    const randomTop = `${Math.floor(Math.random() * 50)}%`;
    const randomLeft = `${Math.floor(Math.random() * 50)}%`;
    setRandomPosition({ top: randomTop, left: randomLeft });
  }, [isShow]);

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
                height: "300px",
                width: "550px",
                left: `${randomPosition.left}`,
                top: `${randomPosition.top}`,
              }
        }
        className={`card card-tertiary z-9999 fixed ${isShow ? "block" : "hidden"} h-[300px] w-[550px] ${isSelected ? "z-[9999]" : "z-[1]"}`}
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
        {/* widowcontents */}
        <div className="card-body">
          {/* {windowType === "childFolder" ? (
            getFolderContent(currentContentKey)
          ) : (
            <FolderContainer
              folderItems={contentInfo[contentKey].folderItems}
              onFolderClick={handleFolderClick}
            />
          )} */}
          <FolderContainer
            folderItems={folderItems}
            // onFolderClick={handleFolderClick}
          />
        </div>
        <div className="card-footer">
          <div className="card-footer-box">
            <p className="text-[13px] text-black">
              <span className="mr-[2px] text-[9px] text-black">
                {folderItems.length}
              </span>
              <span className="text-[9px] text-black">items</span>
            </p>
          </div>
          <div className="card-footer-box">
            {/* <p className="text-[13px] text-black">
              <span className="text-[9px] text-black">234</span>
              <span className="text-[9px] text-black">KB</span>
            </p> */}
          </div>
        </div>
      </div>
    </Draggable>
  );
}
