import { useWindowStore } from "@/store/store";

/**
 * [아이콘 컴포넌트]
 */

interface IconPropsType {
  iconNm: string;
  contentKey: string;
  iconImgNm: string;
  textColor: string;
  isDoc: boolean;
}

export default function Icon({
  iconNm,
  contentKey,
  iconImgNm,
  textColor,
  isDoc,
}: IconPropsType) {
  // 전역상태관리 state, action
  const { addWindow } = useWindowStore();
  return (
    <div
      className="mb-[20px] mr-[17px] flex h-full w-[60px] cursor-pointer flex-col items-center"
      onDoubleClick={() =>
        addWindow({
          title: iconNm,
          contentKey: contentKey,
          isShow: true,
          isSelected: true,
          isHide: false,
          isDoc: isDoc,
        })
      }
    >
      <span className={`${iconImgNm} inline-block h-[60px] w-[60px]`}></span>
      <span
        className={`inline-block w-[60px] pt-[5px] text-center text-[10px] text-${textColor}`}
      >
        {iconNm}
      </span>
    </div>
  );
}
