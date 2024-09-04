import { WindowType } from "@/types/window";
import Icon from "./common/Icon";
import { contentInfo } from "@/constants/windowData";

/**
 * [Folders]
 * MainPage에 나열되는 폴더 아이콘 모음 컴포넌트
 */

interface FolderPropsType {
  onFolderClick: (contentKey: string) => void;
}

// TODO(20240828/x) 폴더 클릭 시, 열린 폴더로 아이콘 변경.
// TODO(20240829/완료) 폴더 아이콘들 중복 코드 정리
export default function Folders({ onFolderClick }: FolderPropsType) {
  // 폴더아이템 배열
  // 1. Object.keys(contentInfo) => contentInfo의 모든 키를 배열로 반환
  // 2. map으로 키에 해당하는 아이템 하나씩 반환.
  const folderItems = Object.keys(contentInfo).map((key) => {
    const item = contentInfo[key];
    return {
      iconNm: item.iconNm,
      contentKey: item.contentKey,
      iconImgNm: item.iconImgNm,
      textColor: item.textColor,
      windowType: item.windowType as WindowType,
      parentFolderKey: item.parentFolderKey,
    };
  });

  return (
    <div className="main absolute left-0 top-0 flex w-[200px] flex-wrap p-[10px]">
      {folderItems.map((folder, idx) => (
        <div key={idx} className="flex flex-col" style={{ flexBasis: "50%" }}>
          <Icon
            iconNm={folder.iconNm}
            contentKey={folder.contentKey}
            iconImgNm={folder.iconImgNm}
            textColor={folder.textColor}
            windowType={folder.windowType}
            onFolderClick={onFolderClick}
            parentFolderKey={folder.parentFolderKey}
          />
        </div>
      ))}
    </div>
  );
}
