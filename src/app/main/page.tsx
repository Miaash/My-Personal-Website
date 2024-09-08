"use client";
import { useEffect, useState } from "react";
import { useWindowStore } from "@/store/store";
import FolderWindow from "@/components/window/FolderWindow";
import Folders from "@/components/Folders";
import DocWindow from "@/components/window/DocWindow";
// import { useStore } from "@/hooks/useStore";
import WelcomeWindow from "@/components/window/WelcomeWindow";
import SystemInfoWindow from "@/components/window/SystemInfoWindow";

/**
 * [메인페이지]
 */
export default function MainPage() {
  // store에서 state, action 가져오기
  const {
    windows,
    addWindow,
    removeWindow,
    toggleShow,
    toggleSelected,
    toggleHide,
  } = useWindowStore();

  // const windows = useStore(useWindowStore, (state) => state.windows);
  // const [currentContentKey, setCurrentContentKey] = useState<string>("");
  // const [childFolderInfo, setChildFolderInfo] = useState<FolderItemsType>();

  // const handleFolderClickTest = (contentKey: string) => {
  //   console.log("현재선택한폴더", contentKey);
  //   setCurrentContentKey(contentKey);
  //   // 타입이 폴더일 때만
  //   if (contentInfo[contentKey]?.windowType === "folder") {
  //     // console.log("현재선택한폴더", contentKey);
  //     setCurrentContentKey(contentKey);
  //     console.log("이전에선택한폴더", currentContentKey);
  //   } else {
  //     const parentFolder = Object.keys(contentInfo)
  //       .map((key) => contentInfo[key])
  //       .find((item) => item.contentKey === currentContentKey);

  //     const childFolder = parentFolder?.folderItems.find(
  //       (item) => item.contentKey === contentKey,
  //     );

  //     if (childFolder?.windowType === "childFolder") {
  //       setChildFolderInfo(childFolder);
  //     }

  //     console.log("모든폴더아이템", parentFolder);
  //     console.log("현재선택한폴더의childFolder", childFolder?.folderItems);
  //     // if (childFolderItemsChildType === "childFolder") {
  //     //   // 여기서 내용 바꾸는거 필요
  //     // }
  //   }
  //   console.log("1", currentContentKey);
  //   console.log("2", contentKey);
  // };

  // TODO(20240822/완료) Welcome Window 두 건 생기는 부분 수정 -> store add action 중복안되도록
  // TODO(20240823/완료) isSelected가 true면 다른 windows보다 z-index 커야함.
  // TODO(20240828/완료) 폴더 컴포넌트 적용하기
  // TODO(20240829/완료) 아이콘, 공통 컴포넌트로 분리
  // TODO(20240828/x) 인터넷 클릭 시, window창 내부에 google띄우기
  // TODO(20240829/x) 인트로 페이지 제작 필요

  // const [selectedFolder, setSelectedFolder] = useState<string>("");

  // const handleFolderClick = (contentKey: string) => {
  //   setSelectedFolder(contentKey);
  // };

  useEffect(() => {
    addWindow({
      title: "Welcome",
      contentKey: "welcome",
      isShow: true,
      isSelected: true,
      isHide: false,
      windowType: "notice",
      folderItems: [],
      // parentFolderKey: "",
      width: "",
      height: "",
    });
  }, []);

  if (!windows) {
    return null;
  }

  return (
    <>
      <Folders />
      {windows.map((window) => {
        if (
          window.windowType === "folder" ||
          window.windowType === "childFolder"
        ) {
          return (
            <FolderWindow
              key={window.id}
              id={window.id}
              isShow={window.isShow}
              isSelected={window.isSelected}
              isHide={window.isHide}
              onToggleShow={() => toggleShow(window.id)}
              onToggleSelected={() => toggleSelected(window.id)}
              onToggleClose={() => removeWindow(window.id)}
              onToggleHide={() => toggleHide(window.id)}
              // title={
              //   currentContentKey === window.contentKey
              //     ? window.title
              //     : childFolderInfo?.contentKey
              // }
              // contentKey={
              //   currentContentKey === window.contentKey
              //     ? window.contentKey
              //     : childFolderInfo?.contentKey
              // }
              // windowType={
              //   currentContentKey === window.contentKey
              //     ? (window.windowType as WindowType)
              //     : (childFolderInfo?.windowType as WindowType)
              // }
              // onFolderClick={handleFolderClick}
              // folderItems={
              //   currentContentKey === window.contentKey
              //     ? window.folderItems
              //     : childFolderInfo?.folderItems
              // }
              title={window.title}
              contentKey={window.contentKey}
              windowType={window.windowType}
              // onFolderClick={handleFolderClick}
              folderItems={window.folderItems}
            />
          );
        }

        if (window.windowType === "doc") {
          return (
            <DocWindow
              key={window.id}
              id={window.id}
              isShow={window.isShow}
              isSelected={window.isSelected}
              isHide={window.isHide}
              onToggleShow={() => toggleShow(window.id)}
              onToggleSelected={() => toggleSelected(window.id)}
              onToggleClose={() => removeWindow(window.id)}
              onToggleHide={() => toggleHide(window.id)}
              title={window.title}
              contentKey={window.contentKey}
            />
          );
        }

        if (window.windowType === "notice") {
          return (
            <WelcomeWindow
              key={window.id}
              id={window.id}
              isShow={window.isShow}
              isSelected={window.isSelected}
              isHide={window.isHide}
              onToggleShow={() => toggleShow(window.id)}
              onToggleSelected={() => toggleSelected(window.id)}
              onToggleClose={() => removeWindow(window.id)}
              onToggleHide={() => toggleHide(window.id)}
            />
          );
        }

        if (window.windowType === "info") {
          return (
            <SystemInfoWindow
              key={window.id}
              id={window.id}
              isShow={window.isShow}
              isSelected={window.isSelected}
              isHide={window.isHide}
              onToggleShow={() => toggleShow(window.id)}
              onToggleSelected={() => toggleSelected(window.id)}
              onToggleClose={() => removeWindow(window.id)}
              onToggleHide={() => toggleHide(window.id)}
            />
          );
        }

        return (
          <div key={window.id}>
            화면을 렌더링하는 도중 에러가 발생했습니다. 관리자에게 문의하세요.
          </div>
        );
      })}
    </>
  );
}
