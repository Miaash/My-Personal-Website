"use client";
import { useEffect } from "react";
import { useWindowStore } from "@/store/store";
import FolderWindow from "@/components/window/FolderWindow";
import Folders from "@/components/Folders";

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
    });
  }, []);

  return (
    <>
      <Folders />
      {windows.map((window) => (
        <FolderWindow
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
    </>
  );
}
