import { contentInfo } from "@/constants/windowData";
import { useWindowStore } from "@/store/store";
import { WindowType } from "@/types/window";
/**
 * [아이콘 컴포넌트]
 */

interface IconPropsType {
  iconNm: string;
  contentKey: string;
  iconImgNm: string;
  textColor: string;
  windowType: WindowType;
  onFolderClick: (contentKey: string) => void;
  parentFolderKey: string;
}

export default function Icon({
  iconNm,
  contentKey,
  iconImgNm,
  textColor,
  windowType,
  onFolderClick,
  parentFolderKey,
}: IconPropsType) {
  // 전역상태관리 state, action
  const { addWindow } = useWindowStore();
  const handleDoubleClick = () => {
    if (windowType === "childFolder") {
      onFolderClick(contentKey);
    } else if (windowType === "folder") {
      onFolderClick(contentKey);
      addWindow({
        title: iconNm,
        contentKey: contentKey,
        isShow: true,
        isSelected: true,
        isHide: false,
        windowType: windowType,
        folderItems: contentInfo[contentKey].folderItems,
        parentFolderKey: parentFolderKey,
      });
    } else {
      addWindow({
        title: iconNm,
        contentKey: contentKey,
        isShow: true,
        isSelected: true,
        isHide: false,
        windowType: windowType,
        folderItems: [],
        parentFolderKey: parentFolderKey,
      });
    }
  };
  return (
    <div
      className="mb-[20px] mr-[17px] flex h-full w-[60px] flex-col items-center"
      // onDoubleClick={() => {
      //   windowType === "childFolder"
      //     ? () => onFolderClick && onFolderClick(contentKey)
      //     : // () => console.log(contentKey)
      //       addWindow({
      //         title: iconNm,
      //         contentKey: contentKey,
      //         isShow: true,
      //         isSelected: true,
      //         isHide: false,
      //         windowType: windowType,
      //       });
      // }}
      onDoubleClick={handleDoubleClick}
    >
      <span
        className={`${iconImgNm} inline-block h-[60px] w-[60px] cursor-pointer`}
      ></span>
      <span
        className={`inline-block w-[60px] cursor-pointer pt-[5px] text-center text-[10px] text-${textColor}`}
      >
        {iconNm}
      </span>
    </div>
  );
}
