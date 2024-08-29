import { useWindowStore } from "@/store/store";

/**
 * [아이콘 컴포넌트]
 */

interface IconPropsType {
  iconNm: string;
  contentKey: string;
  iconImgNm: string;
  textColor: string;
}

export default function Icon({
  iconNm,
  contentKey,
  iconImgNm,
  textColor,
}: IconPropsType) {
  // 전역상태관리 state, action
  const { addWindow } = useWindowStore();
  return (
    <div
      className="h-35 w-35 mb-[16px] flex cursor-pointer flex-col items-center"
      onDoubleClick={() =>
        addWindow({
          title: `${iconNm}`,
          contentKey: `${contentKey}`,
          isShow: true,
          isSelected: true,
          isHide: false,
        })
      }
    >
      <span className={`${iconImgNm} h-35 w-35 inline-block`}></span>
      <span className={`inline-block pt-[3px] text-[8px] text-${textColor}`}>
        {iconNm}
      </span>
    </div>
  );
}
