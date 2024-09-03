"use client";
import { useEffect, useState } from "react";
import { useWindowStore } from "@/store/store";
import FolderWindow from "@/components/window/FolderWindow";
import Folders from "@/components/Folders";
import DocWindow from "@/components/window/DocWindow";
import { useStore } from "@/hooks/useStore";
import WelcomeWindow from "@/components/window/WelcomeWindow";
import { WindowType } from "@/types/window";

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

  const [currentContentKey, setCurrentContentKey] = useState<string>("");

  const handleFolderClick = (contentKey: string) => {
    setCurrentContentKey(contentKey);
  };

  // TODO(20240822/완료) Welcome Window 두 건 생기는 부분 수정 -> store add action 중복안되도록
  // TODO(20240823/완료) isSelected가 true면 다른 windows보다 z-index 커야함.
  // TODO(20240828/완료) 폴더 컴포넌트 적용하기
  // TODO(20240829/완료) 아이콘, 공통 컴포넌트로 분리
  // TODO(20240828/x) 인터넷 클릭 시, window창 내부에 google띄우기
  // TODO(20240829/x) 인트로 페이지 제작 필요
  useEffect(() => {
    addWindow({
      title: "Welcome",
      contentKey: "welcome",
      isShow: true,
      isSelected: true,
      isHide: false,
      windowType: "notice",
    });
  }, []);

  if (!windows) {
    // 데이터가 준비되기 전에는 아무것도 렌더링하지 않음
    return null;
  }

  return (
    // <>
    //   <Folders />
    //   {/* welcome 윈도우 */}
    //   {windows.length > 0 && (
    //     <>
    //       {windows.map(
    //         (window) =>
    //           window.contentKey === "welcome" && (
    //             <WelcomeWindow
    //               key={window.id}
    //               id={window.id}
    //               isShow={window.isShow}
    //               isSelected={window.isSelected}
    //               isHide={window.isSelected}
    //               onToggleShow={() => toggleShow(window.id)}
    //               onToggleSelected={() => toggleSelected(window.id)}
    //               onToggleClose={() => removeWindow(window.id)}
    //               onToggleHide={() => toggleHide(window.id)}
    //             />
    //           ),
    //       )}
    //     </>
    //   )}

    //   {/* 폴더타입 윈도우 */}
    //   {windows.length > 0 && (
    //     <>
    //       {windows.map(
    //         (window) =>
    //           window.windowType === "folder" && (
    //             <FolderWindow
    //               key={window.id}
    //               id={window.id}
    //               isShow={window.isShow}
    //               isSelected={window.isSelected}
    //               isHide={window.isSelected}
    //               onToggleShow={() => toggleShow(window.id)}
    //               onToggleSelected={() => toggleSelected(window.id)}
    //               onToggleClose={() => removeWindow(window.id)}
    //               onToggleHide={() => toggleHide(window.id)}
    //               title={window.title}
    //               contentKey={window.contentKey}
    //               windowType={window.windowType}
    //             />
    //           ),
    //       )}
    //     </>
    //   )}

    //   {/* 폴더타입 윈도우 */}
    //   {windows.length > 0 && (
    //     <>
    //       {windows.map(
    //         (window) =>
    //           window.windowType === "folder" && (
    //             <FolderWindow
    //               key={window.id}
    //               id={window.id}
    //               isShow={false}
    //               isSelected={window.isSelected}
    //               isHide={window.isSelected}
    //               onToggleShow={() => toggleShow(window.id)}
    //               onToggleSelected={() => toggleSelected(window.id)}
    //               onToggleClose={() => removeWindow(window.id)}
    //               onToggleHide={() => toggleHide(window.id)}
    //               title={window.title}
    //               contentKey={window.contentKey}
    //               windowType={window.windowType}
    //             />
    //           ),
    //       )}
    //     </>
    //   )}

    //   {/* 문서타입 윈도우 */}
    //   {windows.length > 0 && (
    //     <>
    //       {windows.map(
    //         (window) =>
    //           window.windowType === "doc" && (
    //             <DocWindow
    //               key={window.id}
    //               id={window.id}
    //               isShow={window.isShow}
    //               isSelected={window.isSelected}
    //               isHide={window.isSelected}
    //               onToggleShow={() => toggleShow(window.id)}
    //               onToggleSelected={() => toggleSelected(window.id)}
    //               onToggleClose={() => removeWindow(window.id)}
    //               onToggleHide={() => toggleHide(window.id)}
    //               title={window.title}
    //               contentKey={window.contentKey}
    //             />
    //           ),
    //       )}
    //     </>
    //   )}
    // </>
    <>
      <Folders />

      {windows.map((window) => {
        // Render FolderWindow for "folder" type and "childFolder" type
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
              title={window.title}
              contentKey={
                window.windowType === "childFolder"
                  ? currentContentKey // Use currentContentKey for childFolder
                  : window.contentKey // Otherwise use the contentKey of the window
              }
              windowType={window.windowType as WindowType} // Type assertion for windowType
              onFolderClick={handleFolderClick}
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

        // Optionally, handle other types (e.g., "notice") or return null if not handled
        return null;
      })}
    </>
  );
}
