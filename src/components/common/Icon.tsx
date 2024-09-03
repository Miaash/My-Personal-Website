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
  onFolderClick?: (contentKey: string) => void;
}

export default function Icon({
  iconNm,
  contentKey,
  iconImgNm,
  textColor,
  windowType,
  onFolderClick,
}: IconPropsType) {
  // 전역상태관리 state, action
  const { addWindow } = useWindowStore();
  const handleDoubleClick = () => {
    if (windowType === "childFolder" && onFolderClick) {
      onFolderClick(contentKey);
    } else {
      addWindow({
        title: iconNm,
        contentKey: contentKey,
        isShow: true,
        isSelected: true,
        isHide: false,
        windowType: windowType,
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
