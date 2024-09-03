"use client";
import { useRef, useState } from "react";
import { WindowType } from "@/types/window";
import { contentInfo } from "@/constants/windowData";
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
  style?: React.CSSProperties;
  windowType: WindowType;
  onFolderClick: (contentKey: string) => void;
}

// contentKey에 대응하는 윈도우 사이즈 및 위치 매핑
// TODO(20240827/완료) content component에 따른 size, position 조정
// const contentInfo: Record<string, InfoType> = {
//   projects: {
//     width: "550px",
//     height: "300px",
//     left: "20%",
//     top: "30%",
//     folderItems: [
//       {
//         iconNm: "MyWebSite",
//         contentKey: "myWebSite",
//         iconImgNm: "w95-resume",
//         textColor: "black",
//         windowType: "doc",
//       },
//     ],
//   },
//   computer: {
//     width: "550px",
//     height: "300px",
//     left: "10%",
//     top: "40%",
//     folderItems: [],
//   },
//   music: {
//     width: "550px",
//     height: "300px",
//     left: "10%",
//     top: "40%",
//     folderItems: [],
//   },
//   recycleBin: {
//     width: "550px",
//     height: "300px",
//     left: "10%",
//     top: "40%",
//     folderItems: [],
//   },
//   aboutMe: {
//     width: "550px",
//     height: "300px",
//     left: "50%",
//     top: "50%",
//     folderItems: [
//       {
//         iconNm: "Resume",
//         contentKey: "resume",
//         iconImgNm: "w95-resume",
//         textColor: "black",
//         windowType: "doc",
//       },
//       {
//         iconNm: "Miasoft PowerPoint - Portfolio",
//         contentKey: "portfolio",
//         iconImgNm: "w95-ppt",
//         textColor: "black",
//         windowType: "doc",
//       },
//       {
//         iconNm: "Noname",
//         contentKey: "noname",
//         iconImgNm: "w95-closed-file",
//         textColor: "black",
//         windowType: "childFolder",
//         folderItems: [],
//       },
//     ],
//   },
//   photos: {
//     width: "550px",
//     height: "300px",
//     left: "20%",
//     top: "8%",
//     folderItems: [
//       {
//         iconNm: "2022",
//         contentKey: "2022",
//         iconImgNm: "w95-closed-file",
//         textColor: "black",
//         windowType: "childFolder",
//         folderItems: [
//           {
//             iconNm: "1",
//             contentKey: "1",
//             iconImgNm: "w95-photo",
//             textColor: "black",
//             windowType: "doc",
//           },
//         ],
//       },
//       {
//         iconNm: "2023",
//         contentKey: "2023",
//         iconImgNm: "w95-closed-file",
//         textColor: "black",
//         windowType: "childFolder",
//         folderItems: [
//           {
//             iconNm: "1",
//             contentKey: "1",
//             iconImgNm: "w95-photo",
//             textColor: "black",
//             windowType: "doc",
//           },
//           {
//             iconNm: "2",
//             contentKey: "2",
//             iconImgNm: "w95-photo",
//             textColor: "black",
//             windowType: "doc",
//           },
//           {
//             iconNm: "3",
//             contentKey: "3",
//             iconImgNm: "w95-photo",
//             textColor: "black",
//             windowType: "doc",
//           },
//         ],
//       },
//       {
//         iconNm: "2024",
//         contentKey: "2024",
//         iconImgNm: "w95-closed-file",
//         textColor: "black",
//         windowType: "childFolder",
//         folderItems: [],
//       },
//     ],
//   },
// };

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
// TODO(20240827/완료) 윈도우 확대 기능 추가
// TODO(20240827/x) 윈도우창 selected될때 클릭한 창만 z-Index 높게 설정 및 두창 모두 앞으로 오는 현상 수정필요
// TODO(20240828/x) window창 드래그 후, max하면 중앙 배치 안되는 부분 수정필요
// TODO(20240903/완료) Footer수정
// TODO(20240903/x) window타입 === childFolder의 경우 화면 전환 필요
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
}: FolderWindowPropsType) {
  const dragRef = useRef<HTMLDivElement>(null);
  const style = contentInfo[contentKey];
  const [isMaximized, setIsMaximized] = useState<boolean>(false);
  const [currentContentKey, setCurrentContentKey] =
    useState<string>(contentKey);

  // window창 확대/최소화
  const onMaximizeWindow = () => {
    setIsMaximized(!isMaximized);
  };

  // 폴더 클릭 시 내용 업데이트
  const handleFolderClick = (contentKey: string) => {
    setCurrentContentKey(contentKey);
    console.log(currentContentKey);
  };

  // 현재 열려있는 폴더의 내용을 반환
  const getFolderContent = (contentKey: string) => {
    const handleFolderClick = (newContentKey: string) => {
      setCurrentContentKey(newContentKey);
    };
    console.log(currentContentKey);

    return (
      <FolderContainer
        folderItems={contentInfo[contentKey].folderItems}
        onFolderClick={handleFolderClick} // onFolderClick 이벤트 핸들러 추가
      />
    );
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
                height: `${style?.height}`,
                width: `${style?.width}`,
                left: `${style?.left}`,
                top: `${style?.top}`,
              }
        }
        className={`card card-tertiary z-9999 fixed ${isShow ? "block" : "hidden"} ${`h-[${style?.height}] w-[${style?.width}]`} ${isSelected ? "z-[9999]" : "z-[1]"}`}
      >
        <div
          className={`card-header align-center flex w-full justify-between pl-[3px] text-left ${isSelected ? "selected" : ""}`}
        >
          <span className="text-center text-[10px] text-white">
            {windowType === "childFolder"
              ? `${currentContentKey}/${title}`
              : title}
          </span>
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
            folderItems={contentInfo[contentKey]?.folderItems || []}
            onFolderClick={handleFolderClick}
          />
        </div>
        <div className="card-footer">
          <div className="card-footer-box">
            <p className="text-[13px] text-black">
              <span className="text-[9px] text-black">
                {contentInfo[contentKey].folderItems.length}
              </span>
              <span className="text-[13px] text-black">개체</span>
            </p>
          </div>
          <div className="card-footer-box">
            <p className="text-[13px] text-black">
              <span className="text-[9px] text-black">234</span>
              <span className="text-[9px] text-black">KB</span>
            </p>
          </div>
        </div>
      </div>
    </Draggable>
  );
}
