"use client";
import Clock from "@/components/common/Clock";
import { contentInfo, contentKeyIcon } from "@/constants/windowData";
import { useWindowStore } from "@/store/store";
import { FolderItemsType, WindowType } from "@/types/window";
import { useState } from "react";

/**
 * [네비게이션 바 컴포넌트]
 * - start메뉴: 현재 띄워져있는 팝업창 관리 & 환경설정 & 검색기능
 * - 현재 띄워져있는 팝업창 관리. -> store windowsList
 * - 시계.
 */

// TODO(20240827/완료) start버튼에 폴더 아이콘 내역 뿌려주기
// TODO(20240908/완료) contentKeyIcon => folder, doc이 추가될때마다 수정해야하는 번거로움. data파일로 옮기기
// TODO(20240908/x) 모두닫기 기능 필요 우클릭
// TODO(20240908/x) start popup에서 열린 window는 css 변경 처리 추가 필요.
// TODO(20240908/x) nav바에 상태 아이콘 영역 추가 기능은 추후 개발예정.
interface folderType {
  iconNm: string;
  contentKey: string;
  iconImgNm: string;
  textColor: string;
  windowType: WindowType;
  // onFolderClick: (contentKey: string) => void;
  // parentFolderKey: string;
  folderItems: FolderItemsType[];
  width: string;
  height: string;
}
export default function NavBar() {
  // 전역상태관리 state, action
  const { windows, toggleHide, addWindow } = useWindowStore();
  const [isShow, setIsShow] = useState<boolean>(false);

  const folderItems = Object.keys(contentInfo).map((key) => {
    const item = contentInfo[key];
    return {
      iconNm: item.iconNm,
      contentKey: item.contentKey,
      iconImgNm: item.iconImgNm,
      textColor: item.textColor,
      windowType: item.windowType as WindowType,
      folderItems: item.folderItems,
      width: item.width,
      height: item.height,
      // parentFolderKey: item.parentFolderKey,
    };
  });

  const handleFolderClick = (folder: folderType) => {
    addWindow({
      title: folder.iconNm,
      contentKey: folder.contentKey,
      isShow: true,
      isSelected: true,
      isHide: false,
      windowType: folder.windowType,
      folderItems: folder.folderItems,
      width: folder.width,
      height: folder.height,
      // parentFolderKey: parentFolderKey,
    });
    setIsShow(!isShow);
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <nav
        id="navbar-footer"
        className="navbar navbar-main navbar-expand-lg navbar-dark justify-content-between navbar-footer flex items-center justify-between"
      >
        <ul className="navbar-nav navbar-nav-hover align-items-center flex flex-row items-center">
          <li className="nav-item relative" onClick={() => setIsShow(!isShow)}>
            <a
              className={`nav-link ${isShow ? "opened" : ""} flex items-center justify-center`}
              role="button"
            >
              <span className="w95-windows inline-block h-[20px] w-[20px]"></span>
              <span className="nav-link-inner-text">Start</span>
            </a>
          </li>
          {windows.map((window, idx) => (
            <li
              className="nav-item"
              key={idx}
              onClick={() => toggleHide(window.id)}
            >
              <a
                className={`nav-link ${window.isHide ? "" : "opened"}`}
                role="button"
              >
                <span className="nav-link-inner-text">{window.title}</span>
              </a>
            </li>
          ))}
        </ul>
        {/* start버튼 팝업창 */}
        <div
          className={`start-button-popup absolute flex ${isShow ? "block" : "hidden"}`}
        >
          <div className="relative flex min-h-[300px] w-[20px] items-center justify-center bg-[#808080]">
            <span className="absolute bottom-[15%] -rotate-90 whitespace-nowrap text-[11px] text-[#C0C0C0]">
              Hongdows99
            </span>
          </div>
          <div className="flex flex-col">
            {folderItems.map((folder, idx) => (
              <li
                // className={`popup-item ${window.isHide ? "" : "opened"}`}
                className="popup-item"
                key={idx}
                onClick={() => handleFolderClick(folder)}
              >
                <span
                  className={`${contentKeyIcon[folder.contentKey]} mr-[8px] inline-block h-[20px] w-[20px]`}
                ></span>
                <span className="text-[11px]">{folder.iconNm}</span>
              </li>
            ))}
          </div>
        </div>
        <div className="time flex items-center text-center">
          <div className="mr-[10px] flex items-center">
            <span className="w95-speaker mr-[2px] inline-block h-[18px] w-[18px] cursor-pointer"></span>
            <span className="w95-search mr-[2px] inline-block h-[18px] w-[18px] cursor-pointer"></span>
            <span className="w95-world mr-[2px] inline-block h-[18px] w-[18px] cursor-pointer"></span>
            <span className="w95-usb mr-[2px] inline-block h-[20px] w-[20px] cursor-pointer"></span>
          </div>
          <Clock />
        </div>
      </nav>
    </footer>
  );
}
